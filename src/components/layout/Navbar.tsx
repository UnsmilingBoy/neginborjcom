"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/machinery", label: "ماشین‌آلات" },
  { href: "/about", label: "درباره ما" },
  { href: "/recruitment", label: "جذب نیرو" },
  { href: "/rfq", label: "درخواست پیش‌فاکتور" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-brand text-charcoal font-bold text-xl">
              N
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white leading-tight">نگین برج قائم</p>
              <p className="text-xs text-slate-400 leading-tight">گروه صنعتی</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-brand rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/rfq"
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold text-sm transition-colors"
            >
              مشاوره رایگان
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <button className="md:hidden inline-flex items-center justify-center h-8 w-8 text-white">
                    <Menu className="h-5 w-5" />
                  </button>
                }
              />
              <SheetContent side="right" className="w-72 bg-charcoal border-slate-700">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-slate-200 hover:text-amber-brand transition-colors py-2 border-b border-slate-700/50"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/rfq"
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold transition-colors"
                  >
                    مشاوره رایگان
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
