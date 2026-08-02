"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Send,
  Upload,
  X,
} from "lucide-react";
import { submitJobApplication } from "@/app/actions/submitJobApplication";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProgress } from "@/components/rfq/FormProgress";

const steps = ["مشخصات عمومی", "تحصیلات و تماس", "مهارت و سابقه", "رزومه و بررسی"];

const selectClass =
  "mt-2 h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-charcoal outline-none transition-colors [color-scheme:dark] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

const optionClass = "bg-card text-charcoal";

type RecruitmentData = {
  fullName: string;
  fatherName: string;
  nationalCode: string;
  email: string;
  nationality: string;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  militaryStatus: string;
  educationLevel: string;
  gpa: string;
  graduationYear: string;
  school: string;
  field: string;
  mobile: string;
  phone: string;
  address: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  otherSkills: string;
  experience1: string;
  experience2: string;
  experience3: string;
  experience4: string;
  experience5: string;
  otherExperiences: string;
  hasInsurance: string;
  insuranceYears: string;
  insuranceMonths: string;
  notes: string;
  resumeFileName: string;
};

const initialData: RecruitmentData = {
  fullName: "",
  fatherName: "",
  nationalCode: "",
  email: "",
  nationality: "",
  birthDate: "",
  gender: "",
  maritalStatus: "",
  militaryStatus: "",
  educationLevel: "",
  gpa: "",
  graduationYear: "",
  school: "",
  field: "",
  mobile: "",
  phone: "",
  address: "",
  skill1: "",
  skill2: "",
  skill3: "",
  skill4: "",
  skill5: "",
  otherSkills: "",
  experience1: "",
  experience2: "",
  experience3: "",
  experience4: "",
  experience5: "",
  otherExperiences: "",
  hasInsurance: "no",
  insuranceYears: "",
  insuranceMonths: "",
  notes: "",
  resumeFileName: "",
};

function Field({
  data,
  label,
  name,
  onChange,
  required,
  type = "text",
  placeholder,
  dir,
}: {
  data: RecruitmentData;
  label: string;
  name: keyof RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  dir?: "rtl" | "ltr";
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-base font-semibold">
        {label}
        {required && <span className="text-amber-brand"> *</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={data[name]}
        onChange={(event) => onChange({ [name]: event.target.value })}
        className="mt-2 h-10"
        dir={dir}
      />
    </div>
  );
}

function SelectField({
  data,
  label,
  name,
  onChange,
  children,
}: {
  data: RecruitmentData;
  label: string;
  name: keyof RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-base font-semibold">
        {label}
      </Label>
      <select
        id={name}
        name={name}
        className={selectClass}
        value={data[name]}
        onChange={(event) => onChange({ [name]: event.target.value })}
      >
        {children}
      </select>
    </div>
  );
}

function Step1General({
  data,
  onChange,
}: {
  data: RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field data={data} label="نام و نام خانوادگی" name="fullName" onChange={onChange} required />
        <Field data={data} label="نام پدر" name="fatherName" onChange={onChange} />
        <Field data={data} label="کد ملی" name="nationalCode" onChange={onChange} required dir="ltr" />
        <Field data={data} label="ایمیل" name="email" onChange={onChange} type="email" placeholder="name@example.com" dir="ltr" />
        <Field data={data} label="تابعیت" name="nationality" onChange={onChange} />
        <Field data={data} label="تاریخ تولد" name="birthDate" onChange={onChange} placeholder="مثال: ۱۳۷۵/۰۵/۰۱" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SelectField data={data} label="جنسیت" name="gender" onChange={onChange}>
          <option value="" disabled className={optionClass}>
            انتخاب کنید
          </option>
          <option value="female" className={optionClass}>
            خانم
          </option>
          <option value="male" className={optionClass}>
            آقا
          </option>
        </SelectField>

        <SelectField data={data} label="وضعیت تاهل" name="maritalStatus" onChange={onChange}>
          <option value="" disabled className={optionClass}>
            انتخاب کنید
          </option>
          <option value="single" className={optionClass}>
            مجرد
          </option>
          <option value="married" className={optionClass}>
            متاهل
          </option>
        </SelectField>
      </div>

      <SelectField data={data} label="وضعیت خدمت" name="militaryStatus" onChange={onChange}>
        <option value="" disabled className={optionClass}>
          انتخاب کنید
        </option>
        <option value="completed" className={optionClass}>
          پایان خدمت
        </option>
        <option value="exempt" className={optionClass}>
          معافیت
        </option>
        <option value="required" className={optionClass}>
          مشمول
        </option>
        <option value="serving" className={optionClass}>
          در حال خدمت
        </option>
        <option value="not-applicable" className={optionClass}>
          شامل نمی‌شود
        </option>
      </SelectField>
    </div>
  );
}

function Step2EducationContact({
  data,
  onChange,
}: {
  data: RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <SelectField data={data} label="آخرین مقطع" name="educationLevel" onChange={onChange}>
          <option value="" disabled className={optionClass}>
            انتخاب کنید
          </option>
          <option value="diploma" className={optionClass}>
            دیپلم
          </option>
          <option value="associate" className={optionClass}>
            فوق دیپلم
          </option>
          <option value="bachelor" className={optionClass}>
            کارشناسی
          </option>
          <option value="master" className={optionClass}>
            کارشناسی ارشد
          </option>
          <option value="doctorate" className={optionClass}>
            دکتری
          </option>
        </SelectField>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field data={data} label="معدل" name="gpa" onChange={onChange} dir="ltr" />
          <Field data={data} label="سال اخذ" name="graduationYear" onChange={onChange} />
          <Field data={data} label="محل تحصیل" name="school" onChange={onChange} />
          <Field data={data} label="رشته تحصیلی" name="field" onChange={onChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field data={data} label="موبایل" name="mobile" onChange={onChange} required dir="ltr" />
        <Field data={data} label="تلفن ثابت" name="phone" onChange={onChange} dir="ltr" />
      </div>

      <div>
        <Label htmlFor="address" className="text-base font-semibold">
          آدرس محل سکونت
        </Label>
        <Textarea
          id="address"
          name="address"
          value={data.address}
          onChange={(event) => onChange({ address: event.target.value })}
          className="mt-2 min-h-[120px]"
        />
      </div>
    </div>
  );
}

function Step3SkillsExperience({
  data,
  onChange,
}: {
  data: RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-4 text-sm text-slate-custom">
          حداکثر ۵ مورد از اصلی‌ترین مهارت‌های خود را وارد کنید.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 5 }, (_, index) => {
            const name = `skill${index + 1}` as keyof RecruitmentData;
            return <Field key={name} data={data} label={`مهارت ${index + 1}`} name={name} onChange={onChange} />;
          })}
        </div>
        <div className="mt-4">
          <Label htmlFor="otherSkills" className="text-base font-semibold">
            مهارت‌های دیگر
          </Label>
          <Textarea
            id="otherSkills"
            name="otherSkills"
            value={data.otherSkills}
            onChange={(event) => onChange({ otherSkills: event.target.value })}
            className="mt-2 min-h-[100px]"
          />
        </div>
      </div>

      <div>
        <p className="mb-4 text-sm text-slate-custom">
          حداکثر ۵ مورد از اصلی‌ترین سوابق کاری خود را وارد کنید.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 5 }, (_, index) => {
            const name = `experience${index + 1}` as keyof RecruitmentData;
            return <Field key={name} data={data} label={`سابقه ${index + 1}`} name={name} onChange={onChange} />;
          })}
        </div>
        <div className="mt-4">
          <Label htmlFor="otherExperiences" className="text-base font-semibold">
            سوابق دیگر
          </Label>
          <Textarea
            id="otherExperiences"
            name="otherExperiences"
            value={data.otherExperiences}
            onChange={(event) => onChange({ otherExperiences: event.target.value })}
            className="mt-2 min-h-[100px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SelectField data={data} label="آیا سابقه بیمه دارید؟" name="hasInsurance" onChange={onChange}>
          <option value="yes" className={optionClass}>
            بله
          </option>
          <option value="no" className={optionClass}>
            خیر
          </option>
        </SelectField>
        <Field data={data} label="سابقه بیمه - سال" name="insuranceYears" onChange={onChange} type="number" />
        <Field data={data} label="سابقه بیمه - ماه" name="insuranceMonths" onChange={onChange} type="number" />
      </div>
    </div>
  );
}

function Step4ResumeReview({
  data,
  onChange,
  resumeFile,
  onFileChange,
}: {
  data: RecruitmentData;
  onChange: (data: Partial<RecruitmentData>) => void;
  resumeFile: File | null;
  onFileChange: (file: File | null) => void;
}) {
  const rows = [
    { label: "نام و نام خانوادگی", value: data.fullName || "-" },
    { label: "کد ملی", value: data.nationalCode || "-" },
    { label: "موبایل", value: data.mobile || "-" },
    { label: "ایمیل", value: data.email || "-" },
    { label: "آخرین مقطع", value: data.educationLevel || "-" },
    { label: "رشته تحصیلی", value: data.field || "-" },
    { label: "فایل رزومه", value: data.resumeFileName || "بدون فایل" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block text-base font-semibold">فایل رزومه</Label>
        <label className="block cursor-pointer rounded-xl border-2 border-dashed border-border p-8 text-center transition-all hover:border-slate-300">
          {resumeFile ? (
            <span className="flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-amber-brand" />
              <span>
                <span className="block text-sm font-medium text-charcoal">{resumeFile.name}</span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    onFileChange(null);
                  }}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-red-400 hover:underline"
                >
                  <X className="h-3 w-3" />
                  حذف فایل
                </button>
              </span>
            </span>
          ) : (
            <span>
              <Upload className="mx-auto mb-3 h-10 w-10 text-slate-400" />
              <span className="mb-1 block text-sm text-slate-custom">برای انتخاب فایل رزومه کلیک کنید</span>
              <span className="block text-xs text-slate-400">
                فرمت‌های مجاز: ZIP، PDF، DOC، DOCX. حداکثر حجم ۶ مگابایت.
              </span>
            </span>
          )}
          <Input
            type="file"
            accept=".zip,.pdf,.doc,.docx,application/zip,application/pdf"
            className="hidden"
            onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      <div>
        <Label htmlFor="notes" className="text-base font-semibold">
          توضیحات تکمیلی
        </Label>
        <Textarea
          id="notes"
          name="notes"
          value={data.notes}
          onChange={(event) => onChange({ notes: event.target.value })}
          className="mt-2 min-h-[120px]"
        />
      </div>

      <div>
        <p className="mb-4 text-sm text-slate-custom">
          لطفا اطلاعات زیر را بررسی کنید و سپس درخواست همکاری را ارسال کنید:
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          {rows.map((row, index) => (
            <div
              key={row.label}
              className={`flex justify-between gap-4 px-4 py-3 text-sm ${
                index % 2 === 0 ? "bg-muted/50" : "bg-card"
              }`}
            >
              <span className="font-medium text-charcoal">{row.label}</span>
              <span className="max-w-[60%] text-left text-slate-custom">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RecruitmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string }>();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<RecruitmentData>(initialData);

  const updateData = (partial: Partial<RecruitmentData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
  };

  const updateResumeFile = (file: File | null) => {
    setResumeFile(file);
    updateData({ resumeFileName: file?.name ?? "" });
  };

  const canNext = () => {
    switch (currentStep) {
      case 0:
        return !!formData.fullName && !!formData.nationalCode;
      case 1:
        return !!formData.mobile;
      case 2:
        return true;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async (event?: FormEvent) => {
    event?.preventDefault();
    setIsSubmitting(true);
    setResult(undefined);

    const submission = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "resumeFileName") {
        submission.append(key, value);
      }
    });
    if (resumeFile) {
      submission.append("resume", resumeFile);
    }

    try {
      const response = await submitJobApplication(submission);
      if (response.success) {
        setIsSubmitted(true);
        return;
      }
      setResult({ type: "error", message: response.message });
    } catch (error) {
      console.error("Submit error:", error);
      setResult({
        type: "error",
        message: "خطا در ارسال فرم. لطفا دوباره تلاش کنید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
        <h3 className="mb-2 text-2xl font-bold text-charcoal">
          درخواست همکاری شما با موفقیت ارسال شد!
        </h3>
        <p className="mx-auto max-w-md text-slate-custom">
          پس از بررسی اطلاعات و رزومه، تیم منابع انسانی با شما تماس می‌گیرد.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormProgress currentStep={currentStep} steps={steps} />

      <Card>
        <CardContent className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && <Step1General data={formData} onChange={updateData} />}
              {currentStep === 1 && <Step2EducationContact data={formData} onChange={updateData} />}
              {currentStep === 2 && <Step3SkillsExperience data={formData} onChange={updateData} />}
              {currentStep === 3 && (
                <Step4ResumeReview
                  data={formData}
                  onChange={updateData}
                  resumeFile={resumeFile}
                  onFileChange={updateResumeFile}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 flex items-center gap-2 rounded-lg border p-4 text-sm font-semibold ${
                result.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-destructive/20 bg-destructive/10 text-destructive"
              }`}
            >
              {result.type === "success" && <CheckCircle2 className="h-5 w-5" />}
              {result.message}
            </motion.div>
          )}

          <div className="mt-8 flex justify-between border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((step) => step - 1)}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              مرحله قبل
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep((step) => step + 1)}
                disabled={!canNext()}
                className="gap-2 bg-amber-brand text-charcoal hover:bg-amber-dark"
              >
                مرحله بعد
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 bg-amber-brand text-charcoal hover:bg-amber-dark"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    ارسال درخواست
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
