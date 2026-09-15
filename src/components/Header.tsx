'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 text-black py-4 px-6 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-black text-white font-extrabold flex items-center justify-center text-lg tracking-tighter rounded-full group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-black">
            Persona<span className="text-emerald-600">.</span>
          </span>
        </Link>

        {/* Multi-Page Navigation Links */}
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

        {/* Actions - Modern Language Toggle & Dedicated /contact Page CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="relative flex items-center p-1 bg-zinc-100 hover:bg-zinc-200/80 rounded-full border border-black/5 transition-all text-xs font-semibold select-none group"
            aria-label="Toggle Language"
            title={language === 'en' ? 'Switch to Egyptian Arabic' : 'Switch to English'}
          >
            <div className="flex items-center gap-1 px-2 py-1">
              <Globe className="w-3.5 h-3.5 text-zinc-700 group-hover:rotate-45 transition-transform duration-300 mr-0.5" />
              <span className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'en' ? 'bg-black text-white shadow-sm' : 'text-zinc-600 hover:text-black'}`}>
                EN
              </span>
              <span className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'ar' ? 'bg-black text-white shadow-sm font-bold' : 'text-zinc-600 hover:text-black'}`}>
                عربي
              </span>
            </div>
          </button>

          <Link
            href="/contact"
            className="bg-black text-white hover:bg-zinc-800 px-5 py-2 text-xs md:text-sm font-semibold tracking-tight transition-all rounded-full flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.nav.contact}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
