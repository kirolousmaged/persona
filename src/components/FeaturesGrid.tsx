'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, Megaphone, Video, Users, Check } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface FeaturesGridProps {
  onOpenAuditModal?: () => void;
}

export default function FeaturesGrid({ onOpenAuditModal }: FeaturesGridProps) {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 md:py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <ScrollAnimate direction="up" className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            {t.features.title}
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
            {t.features.subtitle}
          </p>
        </ScrollAnimate>

        {/* 4 Pillars Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Pillar 1: E-Commerce Website */}
          <ScrollAnimate direction="up" delay={0.1}>
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60 group">
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    {t.features.ecommerce.tag}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2.5">
                  {t.features.ecommerce.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  {t.features.ecommerce.desc}
                </p>

                <ul className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-zinc-200/80 text-xs text-zinc-800">
                  {t.features.ecommerce.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimate>

          {/* Pillar 2: Ads & Media Buying */}
          <ScrollAnimate direction="up" delay={0.2}>
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60 group">
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    {t.features.ads.tag}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2.5">
                  {t.features.ads.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  {t.features.ads.desc}
                </p>

                <ul className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-zinc-200/80 text-xs text-zinc-800">
                  {t.features.ads.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimate>

          {/* Pillar 3: Custom Business Reels */}
          <ScrollAnimate direction="up" delay={0.3}>
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60 group">
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    {t.features.reels.tag}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2.5">
                  {t.features.reels.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  {t.features.reels.desc}
                </p>

                <ul className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-zinc-200/80 text-xs text-zinc-800">
                  {t.features.reels.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimate>

          {/* Pillar 4: Merchant CRM */}
          <ScrollAnimate direction="up" delay={0.4}>
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-50 hover:bg-zinc-100/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full border border-zinc-200/60 group">
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    {t.features.crm.tag}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2.5">
                  {t.features.crm.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  {t.features.crm.desc}
                </p>

                <ul className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-zinc-200/80 text-xs text-zinc-800">
                  {t.features.crm.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Feature CTA Strip */}
        <ScrollAnimate direction="up" delay={0.5} className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Ready to replace your fragmented agency stack?
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              One predictable retainer for your online store, ads, and video content.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors rounded-full shrink-0 text-center shadow-md"
          >
            {t.nav.contact}
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}
