'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProblemSection from '@/components/ProblemSection';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, Zap, AlertTriangle, ShieldCheck, DollarSign } from 'lucide-react';

export default function WhyPersonaPage() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const comparisonMatrix = [
    {
      feature: language === 'ar' ? 'جهة واحدة مسؤولة عن نتائج المبيعات' : 'Single Point of Accountability',
      freelancers: language === 'ar' ? 'لا يوجد (كل شخص يلقي اللوم على الآخر)' : 'None (Everyone blames each other)',
      agencies: language === 'ar' ? 'إعلانات فقط (بدون ربط بالموقع)' : 'Ads only (No store integration)',
      persona: language === 'ar' ? 'مسؤولية متكاملة 100% عن المبيعات' : '100% Single Growth Accountability',
    },
    {
      feature: language === 'ar' ? 'سرعة إطلاق المتجر والحملات' : 'Launch & Setup Speed',
      freelancers: language === 'ar' ? 'أسابيع أو شهور من التأخير' : '3 to 6 weeks',
      agencies: language === 'ar' ? 'من 2 إلى 4 أسابيع' : '2 to 4 weeks',
      persona: language === 'ar' ? 'من 5 إلى 7 أيام فقط' : '5 to 7 Business Days',
    },
    {
      feature: language === 'ar' ? 'إنتاج فيديوهات ريلز مخصصة شهرياً' : 'Monthly Custom Video Reels',
      freelancers: language === 'ar' ? 'تكلفة إضافية باهظة لكل فيديو' : 'High per-video add-on cost',
      agencies: language === 'ar' ? 'تصاميم ثابتة أو ريلز بطيئة' : 'Static designs / Slow turnaround',
      persona: language === 'ar' ? '10 إلى 25 فيديو مخصص شهرياً' : '10 to 25 Custom Reels Included',
    },
    {
      feature: language === 'ar' ? 'سيستم متابعة وإعادة استهداف العملاء (CRM)' : 'Integrated Customer CRM',
      freelancers: language === 'ar' ? 'غير متوفر' : 'Not Provided',
      agencies: language === 'ar' ? 'برامج خارجية باشتراك منفصل' : 'Requires third-party monthly SaaS',
      persona: language === 'ar' ? 'مدمج ومتصل بالواتساب تلقائياً' : 'Integrated WhatsApp Automation',
    },
    {
      feature: language === 'ar' ? 'تكلفة الاشتراكات والعمولات' : 'Monthly Cost Structure',
      freelancers: language === 'ar' ? '4 فواتير شهرياً مشتتة' : '4 separate invoicing streams',
      agencies: language === 'ar' ? 'عمولة على المبيعات + اشتراك مرتفع' : 'High Retainer + Sales Commission %',
      persona: language === 'ar' ? 'اشتراك شهري ثابت بدون عمولات' : 'Fixed Monthly Retainer, 0% Commission',
    },
  ];

  const faqs = [
    {
      q: language === 'ar' ? 'أملك بالفعل متجراً أونلاين، هل يمكنني الانتقال لبيرسونا؟' : 'I already have a Shopify/WooCommerce store. Can I switch to Persona?',
      a: language === 'ar'
        ? 'نعم، نقوم بنقل منتجاتك وبياناتك فوراً إلى هوية رقمية موحدة أسرع وأنسب للمشتري المصري مع تفعيل حملات الإعلانات والريلز.'
        : 'Yes! We quickly migrate your product catalog and customer list to our optimized high-speed mobile architecture, syncing your ad pixels and starting Reel production immediately.',
    },
    {
      q: language === 'ar' ? 'ما الفرق بين بيرسونا وشركات التسويق التقليدية؟' : 'What is the main difference between Persona and traditional agencies?',
      a: language === 'ar'
        ? 'الشركات التقليدية تتولى الإعلانات فقط ولا تهتم بسرعة الموقع أو إنتاج الفيديوهات. بيرسونا وكالة نمو متكاملة تدير الموقع، الإعلانات، الريلز، والعملاء تحت اشتراك واحد.'
        : 'Traditional agencies only manage ad buttons and charge high retainers without fixing slow websites or creating product videos. Persona builds your store, manages media buying, shoots video Reels, and runs customer retention under one retainer.',
    },
    {
      q: language === 'ar' ? 'ما هي الضمانات المتاحة للتجار؟' : 'What guarantees or accountability standards do you provide?',
      a: language === 'ar'
        ? 'نضمن لك تنفيذ كافة العوامل التشغيلية بنسبة 100% نيابة عنك، مع تقديم تقارير أسبوعية تفصيلية بعائد الاستثمار (ROAS) والأرباح.'
        : 'We guarantee 100% done-for-you execution with zero technical hassle on your end, providing clear weekly performance reports tracking sales growth and ROAS velocity.',
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        <Header />

        <main className="flex-1 pt-32 pb-24">
          {/* Header Banner */}
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollAnimate direction="up" className="max-w-3xl mb-16 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                {language === 'ar' ? 'لماذا تختار بيرسونا بدلاً من التشتت؟' : 'Why Merchants Choose Persona Over Disconnected Agencies'}
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl font-normal leading-relaxed">
                {language === 'ar'
                  ? 'اكتشف كيف يستغني أصحاب المحلات التجارية في القاهرة والإسكندرية عن التعامل مع 4 شركات منفصلة لصالح شريك نمو موحد.'
                  : 'Discover why retail store owners in Cairo and Alexandria are replacing fragmented freelancers with one unified, high-performance growth partner.'}
              </p>
            </ScrollAnimate>
          </div>

          {/* Core Problem Section Component (with CTA under both cards) */}
          <ProblemSection onOpenAuditModal={() => {}} />

          {/* Side-by-Side Operational Comparison Matrix */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="max-w-3xl mb-14 space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'مقارنة مباشرة بين بيرسونا والطرق التقليدية' : 'Head-to-Head Comparison Matrix'}
              </h2>
            </ScrollAnimate>

            <ScrollAnimate direction="up" delay={0.1} className="overflow-x-auto rounded-3xl border border-zinc-200/80 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-zinc-900 text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-5">Feature / Dimension</th>
                    <th className="p-5 text-zinc-400">Freelancers Stack</th>
                    <th className="p-5 text-zinc-400">Traditional Agency</th>
                    <th className="p-5 text-emerald-400 font-bold bg-zinc-800">Persona Growth Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="p-5 font-bold text-black">{row.feature}</td>
                      <td className="p-5 text-red-600 text-xs font-medium">{row.freelancers}</td>
                      <td className="p-5 text-zinc-600 text-xs">{row.agencies}</td>
                      <td className="p-5 text-emerald-700 font-bold text-xs bg-emerald-50/50">
                        ✓ {row.persona}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollAnimate>
          </div>

          {/* The Hidden Cost of Fragmentation */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="max-w-3xl mb-14 space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'كيف يضيع التشتت أرباح محلك التجارى؟' : 'How Agency Chaos Drain Retail Store Profit'}
              </h2>
            </ScrollAnimate>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimate direction="up" delay={0.1} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-4">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <h3 className="text-xl font-bold text-black">Wasted Meta Ad Spend</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Ad buyers driving traffic to slow, poorly designed web stores leads to 80%+ cart drop-off rates and burned ad budgets.
                </p>
              </ScrollAnimate>

              <ScrollAnimate direction="up" delay={0.2} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-4">
                <DollarSign className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-black">4 Monthly Subscriptions</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Paying separate retainers for web hosting, video editors, ad managers, and CRM plugins adds EGP 9,000+ in unnecessary overhead.
                </p>
              </ScrollAnimate>

              <ScrollAnimate direction="up" delay={0.3} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-4">
                <Zap className="w-8 h-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-black">Zero Speed & Synergy</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Waiting 3 weeks for freelancers to deliver Reels while ad campaigns stall loses critical sales velocity against retail competitors.
                </p>
              </ScrollAnimate>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'أسئلة شائعة حول الانتقال لبيرسونا' : 'Switching to Persona FAQs'}
              </h2>
            </ScrollAnimate>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-zinc-50 border border-zinc-200/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-black hover:bg-zinc-100/80 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-600' : 'text-zinc-400'}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
            <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  {language === 'ar' ? 'جاهز للاستغناء عن فوضى الشركات المشتتة؟' : 'Ready to eliminate monthly agency chaos?'}
                </h3>
                <p className="text-sm text-zinc-600 font-normal mt-1">
                  Our growth specialists handle your online store, ads, and video content under one transparent retainer.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white font-semibold text-sm tracking-tight hover:bg-zinc-800 transition-all rounded-full flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Switch to Persona</span>
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
