"use server";

import nodemailer from "nodemailer";

interface RFQData {
  projectType: string;
  estimatedTonnage: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  timeline: string;
  notes: string;
  blueprintFileName: string;
}

const projectTypeLabels: Record<string, string> = {
  skeleton: "اسکلت فلزی سنگین",
  suleh: "سوله صنعتی",
  bridge: "پل فلزی",
  refinery: "سازه پالایشگاهی",
  other: "سایر",
};

function buildEmailBody(data: RFQData): string {
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0F172A; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">
        درخواست پیش‌فاکتور جدید
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">نوع پروژه</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${projectTypeLabels[data.projectType] || data.projectType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">وزن تقریبی</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.estimatedTonnage ? data.estimatedTonnage + ' تن' : '-'}</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">نام شرکت</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.companyName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">تماس‌گیرنده</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.contactPerson}</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">تلفن</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;" dir="ltr">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">ایمیل</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;" dir="ltr">${data.email || '-'}</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">زمان‌بندی</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.timeline || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">فایل نقشه</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.blueprintFileName || 'بدون فایل'}</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">توضیحات</td>
          <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.notes || '-'}</td>
        </tr>
      </table>
      <p style="margin-top: 16px; color: #64748B; font-size: 12px;">
        این ایمیل توسط سیستم درخواست پیش‌فاکتور وب‌سایت نگین برج قائم ارسال شده است.
      </p>
    </div>
  `;
}

export async function submitRFQ(data: RFQData) {
  // Validate required fields
  if (!data.projectType || !data.companyName || !data.contactPerson || !data.phone) {
    throw new Error("فیلدهای الزامی پر نشده‌اند");
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const rfqEmailTo = process.env.RFQ_EMAIL_TO;

  // If SMTP is not configured, just log the submission
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("📧 RFQ Submission (SMTP not configured):", {
      ...data,
      timestamp: new Date().toISOString(),
    });
    return { success: true, message: "درخواست ثبت شد (ایمیل پیکربندی نشده)" };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort || "587"),
    secure: parseInt(smtpPort || "587") === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"سیستم پیش‌فاکتور نگین برج" <${smtpUser}>`,
    to: rfqEmailTo || "info@neginborj.com",
    subject: `درخواست پیش‌فاکتور جدید از ${data.companyName}`,
    html: buildEmailBody(data),
  });

  return { success: true, message: "درخواست با موفقیت ارسال شد" };
}
