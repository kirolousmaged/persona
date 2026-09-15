'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface HeroProps {
  onOpenAuditModal?: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const { t, dir } = useLanguage();

  return (
    <section className="relative h-screen h-[100vh] w-full flex flex-col justify-between pt-24 pb-6 bg-white text-black overflow-hidden select-none">
      {/* Subtle Soft Background Blur Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center relative z-10 my-auto">
        <ScrollAnimate direction="up" delay={0.1} className="max-w-3xl space-y-4 md:space-y-6">
          {/* Refined Headline - Fits cleanly inside 100vh without header overlap */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-black">
            {t.hero.headline}
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
            {t.hero.subheadline}
          </p>

          {/* Action CTAs - Dedicated Page Links */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-black text-white font-semibold text-sm tracking-tight hover:bg-zinc-800 transition-all rounded-full flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.hero.primaryCTA}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>

            <Link
              href="/services"
              className="px-7 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium text-sm transition-colors rounded-full border border-black/5 flex items-center justify-center gap-2"
            >
              <span>{t.hero.secondaryCTA}</span>
            </Link>
          </div>


        </ScrollAnimate>

        {/* Minimal System Stats Bar */}
        <ScrollAnimate direction="up" delay={0.3} className="mt-8 md:mt-12 pt-6 border-t border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-0.5">
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                {t.hero.stats.salesGrowth}
              </div>
              <div className="text-xs text-zinc-600 font-medium">
                {t.hero.stats.salesGrowthLabel}
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-600">
                {t.hero.stats.turnkey}
              </div>
              <div className="text-xs text-zinc-600 font-medium">
                {t.hero.stats.turnkeyLabel}
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                {t.hero.stats.roi}
              </div>
              <div className="text-xs text-zinc-600 font-medium">
                {t.hero.stats.roiLabel}
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-black transition-colors cursor-pointer pt-2 pb-2 z-10">
        <a href="#problem" className="flex flex-col items-center gap-0.5">
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-600" />
        </a>
      </div>
    </section>
  );
}
