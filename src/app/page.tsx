'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        {/* Multi-Page Navigation Header */}
        <Header />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenAuditModal={() => {}} />

          {/* Mission & Vision Showcase Strip */}
          <section className="py-24 bg-zinc-50 border-y border-zinc-200/80 text-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <ScrollAnimate direction="up" className="max-w-3xl mb-12 space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
                  Built for the Future of Retail in MENA
                </h2>
              </ScrollAnimate>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Summary */}
                <ScrollAnimate direction="left" delay={0.1}>
                  <div className="rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-sm space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-bold text-black">{t.missionVision.missionTitle}</h3>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {t.missionVision.mission}
                      </p>
                    </div>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-emerald-700 pt-4"
                    >
                      <span>Read Our Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </ScrollAnimate>

                {/* Vision Summary */}
                <ScrollAnimate direction="right" delay={0.2}>
                  <div className="rounded-3xl bg-zinc-900 text-white p-8 shadow-xl space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Compass className="w-6 h-6 text-emerald-400" />
                        <h3 className="text-xl font-bold text-white">{t.missionVision.visionTitle}</h3>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {t.missionVision.vision}
                      </p>
                    </div>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white pt-4"
                    >
                      <span>Explore MENA Vision</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </section>

          {/* Problem & Solution Comparison Section */}
          <ProblemSection onOpenAuditModal={() => {}} />

          {/* Services 4 Pillars Section */}
          <FeaturesGrid onOpenAuditModal={() => {}} />

          {/* Pricing Section */}
          <PricingSection onOpenAuditModal={() => {}} />
        </main>

        {/* Localized Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
