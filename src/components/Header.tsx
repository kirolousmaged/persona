'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/5 text-black py-3.5 px-4 sm:px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-black text-white font-extrabold flex items-center justify-center text-lg tracking-tighter rounded-full group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-sans text-xl font-bold tracking-tight text-black">
              Persona<span className="text-emerald-600">.</span>
            </span>
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <Link
              href="/"
              className={`transition-colors duration-200 ${isActive('/') ? 'text-black font-bold' : 'hover:text-black'}`}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-200 ${isActive('/services') ? 'text-black font-bold' : 'hover:text-black'}`}
            >
              {t.nav.services}
            </Link>
            <Link
              href="/why-persona"
              className={`transition-colors duration-200 ${isActive('/why-persona') ? 'text-black font-bold' : 'hover:text-black'}`}
            >
              {t.nav.whyPersona}
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${isActive('/about') ? 'text-black font-bold' : 'hover:text-black'}`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors duration-200 ${isActive('/pricing') ? 'text-black font-bold' : 'hover:text-black'}`}
            >
              {t.nav.pricing}
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Segment Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="relative flex items-center p-1 bg-zinc-100 hover:bg-zinc-200/80 rounded-full border border-black/5 transition-all text-xs font-semibold select-none group"
              aria-label="Toggle Language"
              title={language === 'en' ? 'Switch to Egyptian Arabic' : 'Switch to English'}
            >
              <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1">
                <Globe className="w-3.5 h-3.5 text-zinc-700 group-hover:rotate-45 transition-transform duration-300 mr-0.5" />
                <span className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'en' ? 'bg-black text-white shadow-sm' : 'text-zinc-600 hover:text-black'}`}>
                  EN
                </span>
                <span className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'ar' ? 'bg-black text-white shadow-sm font-bold' : 'text-zinc-600 hover:text-black'}`}>
                  عربي
                </span>
              </div>
            </button>

            {/* Desktop Contact CTA */}
            <Link
              href="/contact"
              className="hidden sm:flex bg-black text-white hover:bg-zinc-800 px-5 py-2 text-xs md:text-sm font-semibold tracking-tight transition-all rounded-full items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.nav.contact}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex lg:hidden p-2 text-black bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors active:scale-95 ml-1"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Modal (Solid White Backdrop, Zero Overlap) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          {/* Mobile Modal Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black text-white font-extrabold flex items-center justify-center text-lg tracking-tighter rounded-full">
                P
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-black">
                Persona<span className="text-emerald-600">.</span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center p-1 bg-zinc-100 rounded-full border border-black/5 text-xs font-semibold"
              >
                <div className="flex items-center gap-1 px-2 py-0.5">
                  <span className={`px-2 py-0.5 rounded-full ${language === 'en' ? 'bg-black text-white' : 'text-zinc-600'}`}>
                    EN
                  </span>
                  <span className={`px-2 py-0.5 rounded-full ${language === 'ar' ? 'bg-black text-white font-bold' : 'text-zinc-600'}`}>
                    عربي
                  </span>
                </div>
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-black bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
                aria-label="Close Navigation Drawer"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Nav Links List */}
          <nav className="flex flex-col space-y-5 my-auto py-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-tight py-2 border-b border-zinc-100 flex items-center justify-between ${
                isActive('/') ? 'text-black' : 'text-zinc-600'
              }`}
            >
              <span>{t.nav.home}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-tight py-2 border-b border-zinc-100 flex items-center justify-between ${
                isActive('/services') ? 'text-black' : 'text-zinc-600'
              }`}
            >
              <span>{t.nav.services}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              href="/why-persona"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-tight py-2 border-b border-zinc-100 flex items-center justify-between ${
                isActive('/why-persona') ? 'text-black' : 'text-zinc-600'
              }`}
            >
              <span>{t.nav.whyPersona}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-tight py-2 border-b border-zinc-100 flex items-center justify-between ${
                isActive('/about') ? 'text-black' : 'text-zinc-600'
              }`}
            >
              <span>{t.nav.about}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-tight py-2 border-b border-zinc-100 flex items-center justify-between ${
                isActive('/pricing') ? 'text-black' : 'text-zinc-600'
              }`}
            >
              <span>{t.nav.pricing}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>
          </nav>

          {/* Bottom Action Area */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-black text-white font-bold text-center text-base rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-98"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

            <p className="text-center text-xs text-zinc-400">
              Persona Technologies — Retail Growth Agency
            </p>
          </div>
        </div>
      )}
    </>
  );
}
