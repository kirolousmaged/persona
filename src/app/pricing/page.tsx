'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, ChevronDown, MoveRight } from 'lucide-react';

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const planMatrix = [
    { name: 'Custom Mobile Web Storefront', starter: '✓', growth: '✓', enterprise: '✓ Multi-Store' },
    { name: 'Local Cash on Delivery (COD) & Paymob Setup', starter: '✓', growth: '✓', enterprise: '✓ Custom Gateways' },
    { name: 'Meta (IG/FB) & TikTok Ad Campaign Management', starter: 'Setup Only', growth: 'Full Daily Management', enterprise: 'Enterprise Strategy' },
    { name: 'Monthly Custom Product Reels', starter: '10 Reels / mo', growth: '25 Reels / mo', enterprise: 'High Volume Production' },
    { name: 'Merchant CRM & WhatsApp Automation', starter: '—', growth: '✓ Included', enterprise: '✓ Custom Workflows' },
    { name: 'Dedicated Cairo Growth Manager', starter: 'Standard Support', growth: '✓ Dedicated Manager', enterprise: '✓ 24/7 Priority SLA' },
    { name: 'Weekly ROI & Sales Velocity Reports', starter: 'Monthly', growth: '✓ Weekly', enterprise: '✓ Custom Dashboards' },
  ];

  const faqs = [
    {
      q: language === 'ar' ? 'هل توجد أي مصاريف أو خفية أو عمولات على المبيعات؟' : 'Are there any hidden transaction fees or sales commission taxes?',
      a: language === 'ar'
        ? 'لا يوجد على الإطلاق. أنت تدفع رسوم التجهيز لمرة واحدة والاشتراك الشهري الثابت فقط. جميع أرباح ومبيعات محلك ملك لك بنسبة 100%.'
        : 'Zero hidden fees. You pay the transparent one-time setup fee and the fixed monthly retainer. 100% of store sales revenue remains with your business.',
    },
    {
      q: language === 'ar' ? 'هل يمكنني ترقية الباقة لاحقاً مع نمو مبيعات محلي؟' : 'Can I upgrade my tier later as my retail brand expands?',
      a: language === 'ar'
        ? 'بالتأكيد، يمكنك البدء بالباقة الأساسية ثم الترقية لباقة النمو مع زيادة كمية الريلز المطلوبة وتفعيل سيستم CRM بدون أي تعقيدات.'
        : 'Absolutely. Many merchants start with the Essential Store plan and upgrade to the Complete Agency Package as sales scale and Reel volume increases.',
    },
    {
      q: language === 'ar' ? 'ما هي طرق الدفع المتاحة لرسوم الاشتراك في مصر؟' : 'What payment methods are supported for the monthly retainer in Egypt?',
      a: language === 'ar'
        ? 'ندعم التحويل البنكي المباشر، محافظ فودافون كاش، وكروت الفيزا والماستركارد المحلية.'
        : 'We accept direct bank transfer, Vodafone Cash merchant wallets, and local Egyptian credit/debit cards.',
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        <Header />

        <main className="flex-1 pt-28 pb-16 md:pt-32 md:pb-24">
          {/* Header Banner */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <ScrollAnimate direction="up" className="max-w-3xl mb-12 sm:mb-16 space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                {language === 'ar' ? 'استثمار شفاف لتكبير مبيعات محلك' : 'Simple, Predictable Retail Growth Pricing'}
              </h1>
              <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                {language === 'ar'
                  ? 'رسوم تجهيز لمرة واحدة + اشتراك شهري ثابت. بدون عمولات على المبيعات وبدون مصاريف خفية.'
                  : 'Clear setup cost + fixed monthly retainer. Zero percentage tax on your sales, 100% store data ownership.'}
              </p>
            </ScrollAnimate>
          </div>

          {/* Pricing Cards Component (with guarantee banner removed) */}
          <PricingSection onOpenAuditModal={() => {}} />

          {/* Complete Feature Comparison Matrix */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="max-w-3xl mb-8 sm:mb-14 space-y-3">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'مقارنة تفصيلية لمميزات الباقات' : 'Detailed Plan Features Comparison'}
              </h2>
            </ScrollAnimate>

            {/* Mobile Swipe Hint */}
            <div className="flex md:hidden items-center gap-1.5 text-xs text-zinc-500 mb-3 font-medium">
              <MoveRight className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>{language === 'ar' ? 'اسحب الجداول أفقياً للمقارنة 👈' : 'Swipe table horizontally to compare 👉'}</span>
            </div>

            <ScrollAnimate direction="up" delay={0.1} className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-sm bg-white -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-zinc-900 text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 sm:p-5">Feature Breakdown</th>
                    <th className="p-4 sm:p-5 text-zinc-300">Essential Store</th>
                    <th className="p-4 sm:p-5 text-emerald-400 font-bold bg-zinc-800">Growth Package</th>
                    <th className="p-4 sm:p-5 text-zinc-300">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {planMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-black">{row.name}</td>
                      <td className="p-4 sm:p-5 text-zinc-700 text-xs">{row.starter}</td>
                      <td className="p-4 sm:p-5 text-emerald-700 font-bold text-xs bg-emerald-50/50">
                        {row.growth}
                      </td>
                      <td className="p-4 sm:p-5 text-zinc-800 text-xs">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollAnimate>
          </div>

          {/* Zero Sales Commission Economics */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 border-t border-zinc-200/80">
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-12 md:p-14 space-y-6 sm:space-y-8 shadow-2xl">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Why Fixed Retainer Retains 100% of Your Profits
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Marketplaces and traditional commission agencies charge 10% to 20% on every sale you make. As your monthly retail revenue grows from 100,000 EGP to 1,000,000 EGP, their fees skyrocket.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-sm">
                <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/60 border border-zinc-700/60 space-y-2.5 sm:space-y-3">
                  <div className="text-red-400 font-bold text-base sm:text-lg">Commission-Based Agency (15%)</div>
                  <p className="text-xs text-zinc-400">At EGP 300,000 monthly store sales:</p>
                  <div className="text-xl sm:text-2xl font-bold text-white">EGP 45,000 / mo</div>
                  <p className="text-xs text-red-400">Deducted straight from your retail profit margins.</p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2.5 sm:space-y-3">
                  <div className="text-emerald-400 font-bold text-base sm:text-lg">Persona Fixed Retainer (0%)</div>
                  <p className="text-xs text-zinc-300">At EGP 300,000 monthly store sales:</p>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">Fixed EGP 4,999 / mo</div>
                  <p className="text-xs text-emerald-400 font-bold">You keep EGP 40,000+ extra profit every month.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing FAQ Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="text-center mb-8 sm:mb-12 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'الأسئلة الشائعة حول الاستثمار والأسعار' : 'Pricing & Billing FAQs'}
              </h2>
            </ScrollAnimate>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm sm:text-lg text-black hover:bg-zinc-100/80 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-600' : 'text-zinc-400'}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-12">
            <div className="rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Need a custom multi-branch quote?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                  Contact our founders directly for custom multi-store retainers and dedicated SLA support.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold text-sm tracking-tight hover:bg-zinc-200 transition-all rounded-full flex items-center justify-center gap-2 shrink-0 shadow-lg active:scale-98"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
