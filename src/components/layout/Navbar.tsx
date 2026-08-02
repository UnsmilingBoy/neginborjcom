"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/machinery", label: "ماشین‌آلات" },
  { href: "/about", label: "درباره ما" },
  { href: "/recruitment", label: "جذب نیرو" },
  { href: "/rfq", label: "درخواست پیش‌فاکتور" },
];

const mobileContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block overflow-hidden rounded-lg border border-white/10 bg-surface-dark/70 shadow-md shadow-black/20",
        className,
      )}
    >
      <Image
        src="/weirdlogo2.png"
        alt="Negin Borj Qaem Logo"
        width={120}
        height={120}
        priority
        className="absolute left-1/2 top-1/2 h-[170%] w-[170%] max-w-none -translate-x-1/2 -translate-y-[40%] object-contain"
      />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-2 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
    >
      <div
        className={cn(
          "w-full max-w-5xl rounded-xl border transition-all duration-500 sm:rounded-2xl",
          scrolled ?
            "border-white/10 bg-surface-dark/80 shadow-xl shadow-black/30 backdrop-blur-xl"
          : "border-white/5 bg-surface-dark/40 shadow-lg shadow-black/10 backdrop-blur-lg",
        )}
      >
        <Container>
          <div className="flex h-12 items-center justify-between sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="shrink-0"
              >
                <LogoMark className="h-9 w-9 sm:h-11 sm:w-11 sm:rounded-xl" />
              </motion.div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-white leading-tight">
                  نگین برج قائم
                </p>
                <p className="text-xs text-slate-400 leading-tight">
                  گروه صنعتی
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1 relative"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(i)}
                    className={cn(
                      "relative z-10 px-3 py-2 text-sm font-medium rounded-full transition-colors",
                      isActive ? "text-amber-brand" : (
                        "text-slate-300 hover:text-amber-brand"
                      ),
                    )}
                  >
                    {hoveredIndex === i && !isActive && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/5"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.4,
                        }}
                      />
                    )}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-amber-brand/10" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:block"
              >
                <Link
                  href="/rfq"
                  className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold text-sm transition-colors"
                >
                  مشاوره رایگان
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </motion.div>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                  render={
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 md:hidden sm:h-9 sm:w-9 sm:rounded-full">
                      <AnimatePresence mode="wait" initial={false}>
                        {open ?
                          <motion.span
                            key="x"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="h-5 w-5" />
                          </motion.span>
                        : <motion.span
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Menu className="h-5 w-5" />
                          </motion.span>
                        }
                      </AnimatePresence>
                    </button>
                  }
                />
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="w-[86vw] max-w-80 border-l border-white/10 bg-surface-dark/95 p-0 backdrop-blur-xl sm:w-72 sm:rounded-l-3xl"
                >
                  <motion.div
                    variants={mobileContainerVariants}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                    className="flex h-full flex-col gap-2 px-5 py-6"
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-5">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <LogoMark className="h-10 w-10" />
                        <span>
                          <span className="block text-sm font-bold text-white">
                            نگین برج قائم
                          </span>
                          <span className="block text-xs text-slate-400">
                            گروه صنعتی
                          </span>
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          variants={mobileItemVariants}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                              isActive ?
                                "bg-amber-brand/10 text-amber-brand"
                              : "text-slate-200 hover:bg-white/5 hover:text-amber-brand",
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div variants={mobileItemVariants}>
                      <Link
                        href="/rfq"
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-brand px-4 py-3 font-semibold text-charcoal transition-colors hover:bg-amber-dark"
                      >
                        مشاوره رایگان
                      </Link>
                    </motion.div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
}
