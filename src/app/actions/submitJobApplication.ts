"use server";

import { Buffer } from "node:buffer";
import { getPayloadClient } from "@/lib/payload";

type SubmitResult = {
  success: boolean;
  message: string;
};

const allowedResumeTypes = new Set([
  "application/zip",
  "application/x-zip-compressed",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function numberOrUndefined(value: string) {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function collectList(formData: FormData, prefix: string) {
  return Array.from({ length: 5 }, (_, index) => text(formData, `${prefix}${index + 1}`))
    .filter(Boolean)
    .map((title) => ({ title }));
}

export async function submitJobApplication(
  formData: FormData,
): Promise<SubmitResult> {
  const fullName = text(formData, "fullName");
  const nationalCode = text(formData, "nationalCode");
  const mobile = text(formData, "mobile");

  if (!fullName || !nationalCode || !mobile) {
    return {
      success: false,
      message: "لطفا نام، کد ملی و شماره موبایل را وارد کنید.",
    };
  }

  const payload = await getPayloadClient();
  const resumeFile = formData.get("resume");
  let resumeId: string | number | undefined;

  if (resumeFile instanceof File && resumeFile.size > 0) {
    if (!allowedResumeTypes.has(resumeFile.type)) {
      return {
        success: false,
        message: "فرمت رزومه باید ZIP، PDF، DOC یا DOCX باشد.",
      };
    }

    if (resumeFile.size > 6 * 1024 * 1024) {
      return {
        success: false,
        message: "حجم رزومه باید کمتر از ۶ مگابایت باشد.",
      };
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const upload = await payload.create({
      collection: "resume-files",
      data: {
        candidateName: fullName,
      },
      file: {
        data: buffer,
        mimetype: resumeFile.type,
        name: resumeFile.name,
        size: resumeFile.size,
      },
    });

    resumeId = upload.id;
  }

  await payload.create({
    collection: "job-applications",
    data: {
      fullName,
      fatherName: text(formData, "fatherName"),
      nationalCode,
      email: text(formData, "email"),
      nationality: text(formData, "nationality"),
      gender: text(formData, "gender"),
      birthDate: text(formData, "birthDate"),
      maritalStatus: text(formData, "maritalStatus"),
      militaryStatus: text(formData, "militaryStatus"),
      education: {
        level: text(formData, "educationLevel"),
        gpa: text(formData, "gpa"),
        graduationYear: text(formData, "graduationYear"),
        school: text(formData, "school"),
        field: text(formData, "field"),
      },
      mobile,
      phone: text(formData, "phone"),
      address: text(formData, "address"),
      skills: collectList(formData, "skill"),
      otherSkills: text(formData, "otherSkills"),
      experiences: collectList(formData, "experience"),
      otherExperiences: text(formData, "otherExperiences"),
      hasInsurance: text(formData, "hasInsurance") === "yes",
      insuranceYears: numberOrUndefined(text(formData, "insuranceYears")),
      insuranceMonths: numberOrUndefined(text(formData, "insuranceMonths")),
      resume: resumeId,
      notes: text(formData, "notes"),
      status: "new",
    },
  });

  return {
    success: true,
    message: "درخواست همکاری شما ثبت شد. پس از بررسی رزومه با شما تماس می‌گیریم.",
  };
}
