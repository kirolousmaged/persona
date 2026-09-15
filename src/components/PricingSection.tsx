'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface PricingSectionProps {
  onOpenAuditModal?: () => void;
}

export default function PricingSection({ onOpenAuditModal }: PricingSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollAnimate direction="up" className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            {t.pricing.title}
          </h2>
          <p className="text-zinc-600 text-lg font-normal leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </ScrollAnimate>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <ScrollAnimate direction="up" delay={0.1}>
            <div className="rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60">
              <div>
                <div className="pb-6 mb-6 border-b border-zinc-200/80">
                  <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                    {t.pricing.tiers.starter.name}
                  </h3>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed min-h-[40px]">
                    {t.pricing.tiers.starter.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 space-y-2 font-mono">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.setupFeeLabel}</span>
                    <span className="text-2xl font-bold text-black">{t.pricing.tiers.starter.setupPrice}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.monthlyRetainerLabel}</span>
                    <span className="text-lg font-semibold text-emerald-700">{t.pricing.tiers.starter.monthlyPrice}</span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 pt-6 border-t border-zinc-200/80 text-xs font-mono text-zinc-800">
                  {t.pricing.tiers.starter.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-8 w-full py-3.5 bg-zinc-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider transition-colors rounded-full text-center"
              >
                {t.pricing.tiers.starter.cta}
              </Link>
            </div>
          </ScrollAnimate>

          {/* Growth Tier (Popular Highlighted) */}
          <ScrollAnimate direction="up" delay={0.2}>
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between relative shadow-2xl h-full border-2 border-emerald-500">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">
                {t.pricing.popularTag}
              </div>

              <div>
                <div className="pb-6 mb-6 border-b border-zinc-100">
                  <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                    {t.pricing.tiers.growth.name}
                  </h3>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed min-h-[40px]">
                    {t.pricing.tiers.growth.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 space-y-2 font-mono">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.setupFeeLabel}</span>
                    <span className="text-3xl font-bold text-black">{t.pricing.tiers.growth.setupPrice}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.monthlyRetainerLabel}</span>
                    <span className="text-xl font-semibold text-emerald-700">{t.pricing.tiers.growth.monthlyPrice}</span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 pt-6 border-t border-zinc-100 text-xs font-mono text-zinc-800">
                  {t.pricing.tiers.growth.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-8 w-full py-4 bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                <span>{t.pricing.tiers.growth.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimate>

          {/* Enterprise Tier */}
          <ScrollAnimate direction="up" delay={0.3}>
            <div className="rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60">
              <div>
                <div className="pb-6 mb-6 border-b border-zinc-200/80">
                  <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                    {t.pricing.tiers.enterprise.name}
                  </h3>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed min-h-[40px]">
                    {t.pricing.tiers.enterprise.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 space-y-2 font-mono">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.setupFeeLabel}</span>
                    <span className="text-2xl font-bold text-black">{t.pricing.tiers.enterprise.setupPrice}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase block">{t.pricing.monthlyRetainerLabel}</span>
                    <span className="text-lg font-semibold text-emerald-700">{t.pricing.tiers.enterprise.monthlyPrice}</span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 pt-6 border-t border-zinc-200/80 text-xs font-mono text-zinc-800">
                  {t.pricing.tiers.enterprise.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-8 w-full py-3.5 bg-zinc-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider transition-colors rounded-full text-center"
              >
                {t.pricing.tiers.enterprise.cta}
              </Link>
            </div>
          </ScrollAnimate>
        </div>

      </div>
    </section>
  );
}
