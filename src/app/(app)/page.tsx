import { HeroSection } from "@/components/home/HeroSection";
import { StatsGrid } from "@/components/home/StatsGrid";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Timeline } from "@/components/home/Timeline";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsGrid />
      <ServicesGrid />
      <Timeline />
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            برای دریافت مشاوره رایگان و پیش‌فاکتور، همین الان با ما تماس بگیرید
            یا فرم درخواست را تکمیل کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/rfq"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-amber-brand text-charcoal font-semibold hover:bg-amber-dark transition-colors"
            >
              درخواست پیش‌فاکتور
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
            <a
              href="tel:+981133333333"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:bg-white/5 transition-colors"
            >
              تماس تلفنی
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
