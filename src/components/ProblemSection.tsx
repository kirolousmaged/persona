'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface ProblemSectionProps {
  onOpenAuditModal?: () => void;
}

export default function ProblemSection({ onOpenAuditModal }: ProblemSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-16 md:py-32 bg-zinc-50 text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <ScrollAnimate direction="up" className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            {t.problem.title}
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
            {t.problem.subtitle}
          </p>
        </ScrollAnimate>

        {/* Disconnected Stack Badges */}
        <ScrollAnimate direction="up" delay={0.1} className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="relative rounded-xl sm:rounded-2xl bg-zinc-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <XCircle className="w-3.5 h-3.5 text-red-500 absolute top-2.5 right-2.5" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 line-through decoration-red-500">
                Standalone POS App
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 mt-1">EGP 1,200 / mo</span>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl bg-zinc-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <XCircle className="w-3.5 h-3.5 text-red-500 absolute top-2.5 right-2.5" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 line-through decoration-red-500">
                Web Hosting & Plugins
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 mt-1">EGP 800 / mo</span>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl bg-zinc-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <XCircle className="w-3.5 h-3.5 text-red-500 absolute top-2.5 right-2.5" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 line-through decoration-red-500">
                Freelance Content Agency
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 mt-1">EGP 6,000 / mo</span>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl bg-zinc-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <XCircle className="w-3.5 h-3.5 text-red-500 absolute top-2.5 right-2.5" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 line-through decoration-red-500">
                Wasted Meta Ad Spend
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 mt-1">Uncalculated Loss</span>
            </div>
          </div>
        </ScrollAnimate>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Old Way */}
          <ScrollAnimate direction="left" delay={0.2} className="rounded-2xl sm:rounded-3xl bg-zinc-100/70 p-6 sm:p-10 flex flex-col justify-between border border-zinc-200/60">
            <div>
              <div className="pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-zinc-200">
                <h3 className="text-lg sm:text-xl font-bold text-red-700 tracking-tight flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{t.problem.oldWayTitle}</span>
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-700">
                {t.problem.oldWayItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-red-600 font-bold mt-0.5 shrink-0">✕</span>
                    <span className="leading-relaxed font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-200 text-xs text-red-600 font-medium">
              Result: Low ROI, delayed communication & high monthly software burn.
            </div>
          </ScrollAnimate>

          {/* Persona Way */}
          <ScrollAnimate direction="right" delay={0.2} className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 flex flex-col justify-between relative shadow-xl border border-emerald-500/30">
            <div>
              <div className="pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-zinc-100">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-700 tracking-tight flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{t.problem.personaWayTitle}</span>
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-800">
                {t.problem.personaWayItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-100 text-xs text-emerald-700 font-medium">
              Result: Maximum sales velocity & smooth execution.
            </div>
          </ScrollAnimate>
        </div>

        {/* Switch to Persona CTA Button Under the Two Boxes */}
        <ScrollAnimate direction="up" delay={0.3} className="mt-8 sm:mt-12 flex flex-col items-center justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-black text-white font-semibold text-sm tracking-tight hover:bg-zinc-800 transition-all rounded-full flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10"
          >
            <span>Switch to Persona</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}
