"use client";

import { FormEvent, useRef, useState, useTransition } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  IdCard,
  Loader2,
  Paperclip,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { submitJobApplication } from "@/app/actions/submitJobApplication";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const selectClass =
  "h-10 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-semibold text-charcoal">
        {label}
        {required && <span className="text-amber-dark"> *</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 bg-white"
      />
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof IdCard;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-lg border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-brand/15 text-amber-dark">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-extrabold text-charcoal">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export function RecruitmentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ type: "success" | "error"; message: string }>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const response = await submitJobApplication(formData);
      setResult({
        type: response.success ? "success" : "error",
        message: response.message,
      });

      if (response.success) {
        formRef.current?.reset();
      }
    });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <Section icon={IdCard} title="مشخصات عمومی">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="نام و نام خانوادگی" name="fullName" required />
          <Field label="نام پدر" name="fatherName" />
          <Field label="کد ملی" name="nationalCode" required />
          <Field label="ایمیل" name="email" type="email" placeholder="name@example.com" />
          <Field label="تابعیت" name="nationality" />
          <Field label="تاریخ تولد" name="birthDate" placeholder="مثال: ۱۳۷۵/۰۵/۰۱" />
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-sm font-semibold text-charcoal">
              جنسیت
            </Label>
            <select id="gender" name="gender" className={selectClass} defaultValue="">
              <option value="" disabled>
                انتخاب کنید
              </option>
              <option value="female">خانم</option>
              <option value="male">آقا</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="maritalStatus" className="text-sm font-semibold text-charcoal">
              وضعیت تاهل
            </Label>
            <select id="maritalStatus" name="maritalStatus" className={selectClass} defaultValue="">
              <option value="" disabled>
                انتخاب کنید
              </option>
              <option value="single">مجرد</option>
              <option value="married">متاهل</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="militaryStatus" className="text-sm font-semibold text-charcoal">
              وضعیت خدمت
            </Label>
            <select id="militaryStatus" name="militaryStatus" className={selectClass} defaultValue="">
              <option value="" disabled>
                انتخاب کنید
              </option>
              <option value="completed">پایان خدمت</option>
              <option value="exempt">معافیت</option>
              <option value="required">مشمول</option>
              <option value="serving">در حال خدمت</option>
              <option value="not-applicable">شامل نمی‌شود</option>
            </select>
          </div>
        </div>
      </Section>

      <Section icon={GraduationCap} title="اطلاعات تحصیلی">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="educationLevel" className="text-sm font-semibold text-charcoal">
              آخرین مقطع
            </Label>
            <select id="educationLevel" name="educationLevel" className={selectClass} defaultValue="">
              <option value="" disabled>
                انتخاب کنید
              </option>
              <option value="diploma">دیپلم</option>
              <option value="associate">فوق دیپلم</option>
              <option value="bachelor">کارشناسی</option>
              <option value="master">کارشناسی ارشد</option>
              <option value="doctorate">دکتری</option>
            </select>
          </div>
          <Field label="معدل" name="gpa" />
          <Field label="سال اخذ" name="graduationYear" />
          <Field label="محل تحصیل" name="school" />
          <div className="md:col-span-2">
            <Field label="رشته تحصیلی" name="field" />
          </div>
        </div>
      </Section>

      <Section icon={Phone} title="اطلاعات تماس">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="موبایل" name="mobile" required />
          <Field label="تلفن ثابت" name="phone" />
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address" className="text-sm font-semibold text-charcoal">
              آدرس محل سکونت
            </Label>
            <Textarea id="address" name="address" className="min-h-24 bg-white" />
          </div>
        </div>
      </Section>

      <Section icon={Sparkles} title="مهارت‌ها">
        <p className="mb-4 text-sm text-slate-custom">
          حداکثر ۵ مورد از اصلی‌ترین مهارت‌های خود را وارد کنید.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Field key={index} label={`مهارت ${index + 1}`} name={`skill${index + 1}`} />
          ))}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="otherSkills" className="text-sm font-semibold text-charcoal">
              مهارت‌های دیگر
            </Label>
            <Textarea id="otherSkills" name="otherSkills" className="min-h-24 bg-white" />
          </div>
        </div>
      </Section>

      <Section icon={BriefcaseBusiness} title="سوابق کاری و بیمه">
        <p className="mb-4 text-sm text-slate-custom">
          حداکثر ۵ مورد از اصلی‌ترین سوابق خود را وارد کنید.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Field key={index} label={`سابقه ${index + 1}`} name={`experience${index + 1}`} />
          ))}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="otherExperiences" className="text-sm font-semibold text-charcoal">
              سوابق دیگر
            </Label>
            <Textarea id="otherExperiences" name="otherExperiences" className="min-h-24 bg-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hasInsurance" className="text-sm font-semibold text-charcoal">
              آیا سابقه بیمه دارید؟
            </Label>
            <select id="hasInsurance" name="hasInsurance" className={selectClass} defaultValue="no">
              <option value="yes">بله</option>
              <option value="no">خیر</option>
            </select>
          </div>
          <Field label="سابقه بیمه - سال" name="insuranceYears" type="number" />
          <Field label="سابقه بیمه - ماه" name="insuranceMonths" type="number" />
        </div>
      </Section>

      <Section icon={Paperclip} title="رزومه و توضیحات">
        <div className="grid gap-4">
          <div className="rounded-lg border border-dashed border-amber-brand/50 bg-amber-brand/5 p-5">
            <Label htmlFor="resume" className="mb-2 block text-sm font-semibold text-charcoal">
              فایل رزومه
            </Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".zip,.pdf,.doc,.docx,application/zip,application/pdf"
              className="h-11 cursor-pointer bg-white"
            />
            <p className="mt-2 text-xs text-slate-custom">
              فرمت‌های مجاز: ZIP، PDF، DOC، DOCX. حداکثر حجم ۶ مگابایت.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-semibold text-charcoal">
              توضیحات تکمیلی
            </Label>
            <Textarea id="notes" name="notes" className="min-h-28 bg-white" />
          </div>
        </div>
      </Section>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 rounded-lg border p-4 text-sm font-semibold ${
            result.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-destructive/20 bg-destructive/10 text-destructive"
          }`}
        >
          {result.type === "success" && <CheckCircle2 className="h-5 w-5" />}
          {result.message}
        </motion.div>
      )}

      <motion.div variants={fadeUp} className="sticky bottom-4 z-10 flex justify-end">
        <Button
          type="submit"
          disabled={isPending}
          className="h-12 gap-2 rounded-lg bg-amber-brand px-8 font-bold text-charcoal shadow-lg shadow-amber-brand/20 hover:bg-amber-dark"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              در حال ارسال
            </>
          ) : (
            <>
              ارسال درخواست
              <Send className="h-5 w-5" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
