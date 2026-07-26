import Link from "next/link";
import { Container } from "./Container";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/machinery", label: "ماشین‌آلات" },
  { href: "/about", label: "درباره ما" },
  { href: "/recruitment", label: "جذب نیرو" },
  { href: "/rfq", label: "درخواست پیش‌فاکتور" },
];

const services = [
  "اسکلت فلزی سنگین",
  "سوله صنعتی",
  "پل‌های فلزی",
  "سازه‌های پالایشگاهی",
];

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-slate-700/50">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-brand text-charcoal font-bold text-xl">
                N
              </div>
              <div>
                <p className="text-sm font-bold text-white">نگین برج قائم</p>
                <p className="text-xs text-slate-400">گروه صنعتی</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              بیش از دو دهه تجربه در ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی و
              پل‌های فلزی در سراسر ایران.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">خدمات ما</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-amber-brand shrink-0" />
                <span>۰۱۱-۳۳۳۳۳۳۳۳</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-amber-brand shrink-0" />
                <span>info@neginborj.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-amber-brand shrink-0 mt-0.5" />
                <span>مازندران، بشل</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} گروه صنعتی نگین برج قائم. تمامی حقوق محفوظ است.
          </p>
          <p className="text-xs text-slate-500">
            طراحی و توسعه با دقت مهندسی
          </p>
        </div>
      </Container>
    </footer>
  );
}
