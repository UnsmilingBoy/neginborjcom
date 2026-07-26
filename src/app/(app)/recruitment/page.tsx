import type { Metadata } from "next";
import { Award, Factory, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { RecruitmentForm } from "@/components/recruitment/RecruitmentForm";

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
      <section className="relative overflow-hidden bg-charcoal py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
        <Container>
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                <Users className="h-4 w-4 text-amber-brand" />
                همکاری با ما
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                فرم جذب نیروی انسانی نگین برج قائم
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                اطلاعات خود را کامل ثبت کنید تا تیم اداری و منابع انسانی بتواند
                سابقه، مهارت‌ها و رزومه شما را دقیق‌تر بررسی کند.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <item.icon className="h-5 w-5 text-amber-brand" />
                  <span className="text-sm font-semibold text-slate-100">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
