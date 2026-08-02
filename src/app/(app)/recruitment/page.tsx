import type { Metadata } from "next";
import { Award, Factory, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { RecruitmentForm } from "@/components/recruitment/RecruitmentForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "جذب نیروی انسانی | نگین برج قائم",
  description: "فرم همکاری با گروه صنعتی نگین برج قائم",
};

const highlights = [
  { icon: Factory, label: "محیط صنعتی حرفه‌ای" },
  { icon: ShieldCheck, label: "فرآیند بررسی منظم" },
  { icon: Award, label: "فرصت رشد تخصصی" },
];

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="همکاری با ما"
        title={
          <>
            فرم جذب نیروی انسانی
            <span className="relative inline-block">
              <span className="text-amber-brand">نگین برج قائم</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-brand to-amber-brand/0" />
            </span>
          </>
        }
        subtitle="                اطلاعات خود را کامل ثبت کنید تا تیم اداری و منابع انسانی بتواند
                سابقه، مهارت‌ها و رزومه شما را دقیق‌تر بررسی کند.
"
      />

      <section className="bg-background py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <RecruitmentForm />
          </div>
        </Container>
      </section>
    </>
  );
}
