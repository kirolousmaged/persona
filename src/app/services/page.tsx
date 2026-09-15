'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturesGrid from '@/components/FeaturesGrid';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Megaphone, Video, Users, CheckCircle2, ChevronDown, Clock, Shield, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: language === 'ar' ? 'هل يحتاج متجري لإرسال العينات أو المنتجات لتصوير فيديوهات الريلز؟' : 'Do I need to ship my retail products to your studio for Reels production?',
      a: language === 'ar'
        ? 'نعم، يقوم فريق الإنتاج لدينا باستلام عينات من تشكيلة محلك (ملابس، أحذية، أو إكسسوارات) لتصويرها في الستوديو أو بالفرع ثم إعادة العينات بحالة ممتازة.'
        : 'Yes, our media team receives product samples from your inventory (apparel, footwear, or accessories) to shoot high-quality video Reels, then safely returns them.',
    },
    {
      q: language === 'ar' ? 'كم يستغرق تجهيز المتجر الإلكتروني وإطلاق إعلانات الممولة؟' : 'How long does it take to build the web store and launch ad campaigns?',
      a: language === 'ar'
        ? 'يستغرق الإطلاق الكامل من 5 إلى 7 أيام عمل فقط، يشمل ذلك رفع المنتجات، ربط وسائل الدفع والتوصيل في مصر، وتجهيز حملات الإعلانات.'
        : 'The turnkey setup takes only 5 to 7 business days, including catalog upload, Egyptian COD & payment gateway integration, and Meta/TikTok ad pixel configuration.',
    },
    {
      q: language === 'ar' ? 'كيف يتم التعامل مع ميزانية الإعلانات الممولة؟' : 'How is the Meta and TikTok advertising budget handled?',
      a: language === 'ar'
        ? 'يتم دفع ميزانية الإعلانات المباشرة للفيسبوك وتيك توك من حساب التاجر المباشر، بينما تتولى بيرسونا الإدارة والتحسين واستراتيجية الميديا بايينج.'
        : 'Direct ad spend is billed directly from your ad account. Persona handles campaign architecture, targeting, A/B testing, and daily ROAS optimization.',
    },
    {
      q: language === 'ar' ? 'هل سيستم CRM يتكامل مع الواتساب المصري؟' : 'Does the Merchant CRM support Egyptian WhatsApp automation?',
      a: language === 'ar'
        ? 'نعم، يتضمن سيستم CRM أتمتة رسائل تأكيد الطلب وتتبع الشحنة وإعادة التذكير مباشرة عبر الواتساب للعملاء في مصر.'
        : 'Yes, our CRM integrates directly with WhatsApp to send automated order confirmations, delivery tracking, and win-back offers to Egyptian shoppers.',
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
                {language === 'ar' ? 'خدمات النمو المتكاملة لمحلات التجزئة' : 'Our Done-For-You Retail Growth Engine'}
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl font-normal leading-relaxed">
                {language === 'ar'
                  ? 'كل ما يحتاجه محلك التجاري للتوسع أونلاين: متجر سريع، إعلانات ممولة مستهدفة، فيديوهات ريلز مخصصة، وسيستم متابعة العملاء.'
                  : 'Everything your physical store needs to expand online, attract qualified buyers, and maximize repeat purchases under one unified retainer.'}
              </p>
            </ScrollAnimate>
          </div>

          {/* Main 4 Pillars Features Component */}
          <FeaturesGrid onOpenAuditModal={() => {}} />

          {/* Deep-Dive Specifications Section */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="max-w-3xl mb-14 space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'المواصفات التقنية والتشغيلية لكل ركيزة' : 'Technical & Operational Pillar Specifications'}
              </h2>
            </ScrollAnimate>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Spec 1: E-Commerce */}
              <ScrollAnimate direction="up" delay={0.1} className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-black">Web Store Infrastructure</h3>
                </div>
                <ul className="space-y-3 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sub-1.2 second mobile load speed on 4G networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Native Cash on Delivery (COD) order management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Paymob & local card payment gateway setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Product variant swatches (sizes, colors, stock)</span>
                  </li>
                </ul>
              </ScrollAnimate>

              {/* Spec 2: Media Buying */}
              <ScrollAnimate direction="up" delay={0.2} className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-black">Ads & Media Buying Engine</h3>
                </div>
                <ul className="space-y-3 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Meta Pixel & Conversions API (CAPI) precision tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>TikTok Pixel custom catalog integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hyper-targeted Cairo & Alexandria demographic clusters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Daily A/B ad creative testing & ROAS optimization</span>
                  </li>
                </ul>
              </ScrollAnimate>

              {/* Spec 3: Custom Reels */}
              <ScrollAnimate direction="up" delay={0.3} className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-black">Custom Business Reels Production</h3>
                </div>
                <ul className="space-y-3 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High-definition 4K vertical product videography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Arabic captions, trending audio overlays & hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Monthly delivery of 10 to 25 polished video Reels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Ready for organic Instagram/TikTok & paid ad campaigns</span>
                  </li>
                </ul>
              </ScrollAnimate>

              {/* Spec 4: CRM */}
              <ScrollAnimate direction="up" delay={0.4} className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    04
                  </div>
                  <h3 className="text-xl font-bold text-black">Merchant CRM & Automation</h3>
                </div>
                <ul className="space-y-3 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated WhatsApp order notifications & tracking links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Customer lifetime spend & VIP buyer auto-tagging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Win-back broadcasts for inactive shoppers after 30 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Centralized merchant customer database</span>
                  </li>
                </ul>
              </ScrollAnimate>
            </div>
          </div>

          {/* 4-Step Onboarding Blueprint */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="max-w-3xl mb-14 space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'خطة الإطلاق خلال 7 أيام' : 'The 7-Day Launch Blueprint'}
              </h2>
            </ScrollAnimate>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-zinc-900 text-white space-y-4">
                <span className="text-xs text-emerald-400 font-bold block">Days 1-2</span>
                <h4 className="text-lg font-bold">Brand Audit & Catalog</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We analyze your store inventory, target audience in Egypt, and gather product catalog items.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900 text-white space-y-4">
                <span className="text-xs text-emerald-400 font-bold block">Days 3-5</span>
                <h4 className="text-lg font-bold">Store & Pixel Build</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We construct your custom web store, configure COD checkout, and install Meta/TikTok tracking pixels.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900 text-white space-y-4">
                <span className="text-xs text-emerald-400 font-bold block">Days 5-6</span>
                <h4 className="text-lg font-bold">Reels Production</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our video crew shoots and edits your custom product Reels formatted specifically for high CTR ad performance.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900 text-white space-y-4">
                <span className="text-xs text-emerald-400 font-bold block">Day 7+</span>
                <h4 className="text-lg font-bold">Launch & Daily ROAS</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We switch on ad campaigns, capture orders, and optimize daily to scale your store sales velocity.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 border-t border-zinc-200/80">
            <ScrollAnimate direction="up" className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                {language === 'ar' ? 'الأسئلة الشائعة عن الخدمات' : 'Services & Delivery FAQs'}
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
            <div className="rounded-3xl bg-zinc-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {language === 'ar' ? 'جاهز لتكبير مبيعات محلك اليوم؟' : 'Ready to activate your done-for-you growth stack?'}
                </h3>
                <p className="text-sm text-zinc-400 font-normal mt-1">
                  Speak directly with our Cairo growth team to tailor our services to your retail inventory.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-tight hover:bg-zinc-200 transition-all rounded-full flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>{t.nav.contact}</span>
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
