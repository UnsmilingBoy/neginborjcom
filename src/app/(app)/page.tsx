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
      <section className="relative py-24 bg-surface-dark overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/95 to-surface-dark" />
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-brand/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            برای دریافت مشاوره رایگان و پیش‌فاکتور، همین الان با ما تماس بگیرید
            یا فرم درخواست را تکمیل کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/rfq"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-brand text-charcoal font-semibold hover:bg-amber-dark transition-all duration-300 shadow-lg shadow-amber-brand/20 hover:shadow-amber-brand/40 hover:-translate-y-0.5"
            >
              درخواست پیش‌فاکتور
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
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
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-600/50 text-slate-300 font-semibold hover:bg-white/5 hover:border-slate-500 transition-all duration-300"
            >
              تماس تلفنی
              <svg
                className="h-5 w-5 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
