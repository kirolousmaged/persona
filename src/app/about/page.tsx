'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Compass, ArrowRight, ShieldCheck, Zap, Layers, Globe, Smartphone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function VisionMissionPage() {
  const { t, language } = useLanguage();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        <Header />

        <main className="flex-1 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Page Title Header */}
            <ScrollAnimate direction="up" className="max-w-3xl mb-16 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                {language === 'ar' ? 'الرؤية والرسالة — بناء مستقبل التجزئة في الشرق الأوسط' : 'Vision & Mission — The Future of MENA Retail'}
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl font-normal leading-relaxed">
                {language === 'ar'
                  ? 'بيرسونا هي وكالة النمو المتكاملة والنظام التشغيلي المصمم لتمكين أصحاب المحلات التجارية في مصر والشرق الأوسط من إطلاق هوية رقمية موحدة وعالية الكفاءة.'
                  : 'Persona is an all-in-one growth agency and digital ecosystem dedicated to transforming offline merchants into automated, high-performing digital retail brands.'}
              </p>
            </ScrollAnimate>

            {/* Mission & Vision Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
              {/* Mission Card */}
              <ScrollAnimate direction="left" delay={0.1}>
                <div className="rounded-3xl bg-zinc-50 p-10 border border-zinc-200/80 shadow-md h-full flex flex-col justify-between space-y-8 relative overflow-hidden group">
                  <div className="space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Target className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-black tracking-tight">
                      {t.missionVision.missionTitle}
                    </h2>
                    <p className="text-zinc-700 text-lg font-normal leading-relaxed">
                      "{t.missionVision.mission}"
                    </p>
                  </div>
                </div>
              </ScrollAnimate>

              {/* Vision Card */}
              <ScrollAnimate direction="right" delay={0.2}>
                <div className="rounded-3xl bg-zinc-900 text-white p-10 shadow-2xl h-full flex flex-col justify-between space-y-8 relative overflow-hidden group">
                  <div className="space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Compass className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                      {t.missionVision.visionTitle}
                    </h2>
                    <p className="text-zinc-300 text-lg font-normal leading-relaxed">
                      "{t.missionVision.vision}"
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>

            {/* Strategic Pillars of Our Vision */}
            <ScrollAnimate direction="up" className="mb-24 space-y-12">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                  {language === 'ar' ? 'الركائز الأربع لرؤية بيرسونا المستقبلية' : 'The 4 Pillars of Persona\'s Strategic Vision'}
                </h2>
                <p className="text-zinc-600 text-base md:text-lg">
                  {language === 'ar'
                    ? 'كيف نحول المحلات التقليدية إلى علامات تجارية رقمية سريعة ومربحة بدون تعقيد تقني.'
                    : 'How we eliminate retail friction and build sustainable digital growth for independent Egyptian merchants.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Layers className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {language === 'ar' ? '1. هوية رقمية موحدة (Singular Persona)' : '1. Singular Digital Persona'}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ar'
                      ? 'ربط كامل بين متجرك الأونلاين، إعلاناتك الممولة، محتوى الريلز، وسيستم متابعة العملاء لمنع التشتت وتحقيق أعلى عائد.'
                      : 'Connecting your online web store, targeted ad campaigns, custom video Reels, and customer retention into one seamless growth engine.'}
                  </p>
                </div>

                <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {language === 'ar' ? '2. تصميم مخصص للسوق المصري' : '2. Built Specifically for Egyptian Shoppers'}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ar'
                      ? 'سرعة تحميل فائقة على شبكات الموبايل في مصر، تفعيل الدفع عند الاستلام (COD)، وتجربة شراء بلمسة واحدة.'
                      : 'Ultra-fast mobile loading on Egyptian 4G/5G networks, native Cash on Delivery (COD) workflows, and friction-free mobile checkout.'}
                  </p>
                </div>

                <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {language === 'ar' ? '3. إنتاج محتوى مرئي مستمر' : '3. High-Velocity Content Production'}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ar'
                      ? 'إنتاج فيديوهات ريلز مخصصة لمنتجاتك شهرياً لمواكبة تريندات إنستجرام وتيك توك وجذب عملاء جدد باستمرار.'
                      : 'Continuous monthly production of custom product Reels optimized for viral reach on Instagram & TikTok.'}
                  </p>
                </div>

                <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {language === 'ar' ? '4. التوسع الإقليمي في الشرق الأوسط' : '4. MENA Regional Scaling'}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ar'
                      ? 'بدأنا من التجمع الخامس بالقاهرة وشارع فؤاد بالإسكندرية للوصول بكافة المحلات في المنطقة العربية إلى العالمية.'
                      : 'Starting in Cairo & Alexandria retail hubs, empowering merchants across MENA to scale internationally.'}
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Why Merchants Choose Persona */}
            <ScrollAnimate direction="up" className="mb-24 rounded-3xl bg-zinc-900 text-white p-10 md:p-14 space-y-8 shadow-2xl">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {language === 'ar' ? 'لماذا يثق التجار في نظام بيرسونا؟' : 'Why Merchants Trust the Persona Ecosystem'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 space-y-2">
                  <div className="text-emerald-400 font-bold text-lg">01. Single Accountability</div>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    No finger-pointing between developers and media buyers. Persona takes full responsibility for sales results.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 space-y-2">
                  <div className="text-emerald-400 font-bold text-lg">02. Fixed Retainer</div>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    Zero revenue share taxes or hidden plugin fees. You keep 100% of your retail sales profit.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 space-y-2">
                  <div className="text-emerald-400 font-bold text-lg">03. Full Data Ownership</div>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    Your customer list, product catalog, and ad pixels remain 100% owned by your business forever.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Bottom CTA Banner */}
            <ScrollAnimate direction="up" delay={0.3} className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  {language === 'ar' ? 'جاهز للانضمام إلى المستقبل الرقمي للتجزئة؟' : 'Ready to align your retail brand with our vision?'}
                </h3>
                <p className="text-sm text-zinc-600 font-normal max-w-xl">
                  {language === 'ar'
                    ? 'تواصل مع فريق النمو بالقاهرة لمناقشة خطة التوسع وتفعيل متجرك وإعلاناتك وحملات الريلز.'
                    : 'Connect with our growth specialists to launch your online store, run targeted ad campaigns, and produce custom Reels.'}
                </p>
              </div>

              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white font-semibold text-sm tracking-tight hover:bg-zinc-800 transition-all rounded-full flex items-center gap-3 shrink-0 shadow-lg"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollAnimate>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
