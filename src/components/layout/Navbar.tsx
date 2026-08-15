"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/machinery", label: "ماشین‌آلات" },
  { href: "/about", label: "درباره ما" },
  { href: "/recruitment", label: "جذب نیرو" },
  { href: "/rfq", label: "درخواست پیش‌فاکتور" },
];

const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

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
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={cn(
          "w-full max-w-5xl rounded-2xl border transition-all duration-500 max-lg:backdrop-blur-none",
          scrolled ?
            "border-white/10 bg-surface-dark/80 shadow-xl shadow-black/30 backdrop-blur-xl max-lg:bg-surface-dark/95"
          : "border-white/5 bg-surface-dark/40 shadow-lg shadow-black/10 backdrop-blur-lg max-lg:bg-surface-dark/90",
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-brand text-charcoal font-bold text-xl shadow-md shadow-amber-brand/20"
              >
                N
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
                    <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full text-white hover:bg-white/5 transition-colors">
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
                  className="w-72 rounded-l-3xl border-l border-white/10 bg-surface-dark/95 backdrop-blur-xl"
                >
                  <motion.div
                    variants={mobileContainerVariants}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                    className="flex flex-col gap-4 mt-8"
                  >
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
                              "block text-lg font-medium py-2 border-b border-slate-700/50 transition-colors",
                              isActive ? "text-amber-brand" : (
                                "text-slate-200 hover:text-amber-brand"
                              ),
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
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold transition-colors"
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
