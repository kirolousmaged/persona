'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const whatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(
    language === 'ar'
      ? 'مرحباً بيرسونا، أرغب في التواصل لمعرفة تفاصيل تحويل محلي إلى المنظومة الرقمية.'
      : 'Hello Persona, I would like to get in touch regarding digitizing my retail store.'
  )}`;

  return (
    <footer className="bg-black text-white border-t border-zinc-800 py-16 px-6 md:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white text-black font-extrabold flex items-center justify-center text-lg tracking-tighter rounded-full">
              P
            </div>
            <span className="font-mono text-xl font-bold tracking-widest uppercase">
              PERSONA<span className="text-emerald-400">.</span>
            </span>
          </div>
          <p className="text-zinc-400 text-sm font-sans font-light max-w-md leading-relaxed">
            {t.footer.tagline}
          </p>
          <p className="text-zinc-500 text-xs">
            {t.footer.egyptNote}
          </p>
        </div>

        {/* Quick Multi-Page Navigation */}
        <div className="space-y-3">
          <span className="text-zinc-500 uppercase tracking-widest block font-bold">PAGES</span>
          <ul className="space-y-2 text-zinc-300">
            <li><Link href="/" className="hover:text-white transition">{t.nav.home}</Link></li>
            <li><Link href="/services" className="hover:text-white transition">{t.nav.services}</Link></li>
            <li><Link href="/why-persona" className="hover:text-white transition">{t.nav.whyPersona}</Link></li>
            <li><Link href="/about" className="hover:text-white transition">{t.nav.about}</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">{t.nav.pricing}</Link></li>
          </ul>
        </div>

        {/* Direct Contact Actions */}
        <div className="space-y-4">
          <span className="text-zinc-500 uppercase tracking-widest block font-bold">CONTACT US</span>
          <Link
            href="/contact"
            className="w-full py-2.5 px-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition text-left flex items-center justify-between rounded-full"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 border border-emerald-500/40 text-emerald-400 font-bold uppercase tracking-wider hover:bg-emerald-500/10 transition flex items-center justify-between rounded-full"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direct
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Legal & Rights Strip */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
        <p>{t.footer.rights}</p>
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
          <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'en' ? 'Switch to Egyptian Arabic' : 'الانتقال للغة الإنجليزية'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
