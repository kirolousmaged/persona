'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, Upload, CheckCircle2, Loader2, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t, language } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [category, setCategory] = useState('sneakers');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setErrorMsg(language === 'ar' ? 'يرجى إدخال رقم الواتساب' : 'Please enter your WhatsApp number');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Egyptian Retail Merchant',
          phone,
          store_name: storeName,
          category,
          image_url: imagePreview || '',
          source: 'contact_page',
        }),
      });

      setTimeout(() => {
        setIsSubmitting(false);
        setIsGenerated(true);

        setTimeout(() => {
          const message = language === 'ar'
            ? `مرحباً بيرسونا، أنا ${name || 'تاجر'} لصاحب محل (${storeName || 'براند'}). قمت برفع طلب الفحص والاستشارة لعلامتي التجارية ورقمي هو: ${phone}. أود مناقشة خطة النمو وتحديد موعد.`
            : `Hello Persona, I am ${name || 'Store Owner'} from (${storeName || 'Brand'}). I just submitted a consultation request for my phone: ${phone}. I would like to discuss a growth plan for my store.`;

          const waUrl = `https://wa.me/201000000000?text=${encodeURIComponent(message)}`;
          window.open(waUrl, '_blank');
        }, 1200);
      }, 1500);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('Submission error. Redirecting to WhatsApp fallback...');
    }
  };

  const directWhatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(
    language === 'ar'
      ? 'مرحباً بيرسونا، أود التواصل المباشر للاستفسار عن خدمات النمو والتسويق.'
      : 'Hello Persona, I would like to get in touch directly to inquire about your retail growth services.'
  )}`;

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        <Header />

        <main className="flex-1 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Page Title */}
            <ScrollAnimate direction="up" className="max-w-3xl mb-16 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                {t.contactPage.title}
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl font-normal leading-relaxed">
                {t.contactPage.subtitle}
              </p>
            </ScrollAnimate>

            <div className="max-w-3xl mx-auto">
              {/* Form Container */}
              <ScrollAnimate direction="up" delay={0.1} className="rounded-3xl bg-zinc-50 border border-zinc-200/80 p-8 sm:p-12 shadow-sm">
                <h2 className="text-2xl font-bold text-black tracking-tight mb-6">
                  {t.contactPage.formTitle}
                </h2>

                {isGenerated ? (
                  <div className="py-12 rounded-2xl bg-emerald-50 p-6 text-center space-y-4 border border-emerald-200">
                    <div className="w-14 h-14 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {t.contactPage.previewSuccess}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600">
                      Opening official Persona WhatsApp Business channel...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-700 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                          {t.contactPage.nameLabel}
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.contactPage.namePlaceholder}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                          {t.contactPage.phoneLabel} <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t.contactPage.phonePlaceholder}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                          {t.contactPage.storeNameLabel}
                        </label>
                        <input
                          type="text"
                          value={storeName}
                          onChange={(e) => setStoreName(e.target.value)}
                          placeholder={t.contactPage.storeNamePlaceholder}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                          {t.contactPage.categoryLabel}
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                        >
                          <option value="sneakers">{t.contactPage.categories.sneakers}</option>
                          <option value="fashion">{t.contactPage.categories.fashion}</option>
                          <option value="lifestyle">{t.contactPage.categories.lifestyle}</option>
                          <option value="accessories">{t.contactPage.categories.accessories}</option>
                        </select>
                      </div>
                    </div>

                    {/* Photo Upload Area */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                        {t.contactPage.uploadLabel}
                      </label>
                      <div className="relative border border-dashed border-zinc-300 rounded-2xl bg-white p-4 text-center hover:border-zinc-500 transition-colors cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        {imagePreview ? (
                          <div className="flex items-center justify-center gap-3">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-14 h-14 object-cover rounded-xl border border-zinc-300"
                            />
                            <div className="text-left text-xs font-mono">
                              <p className="text-emerald-700 font-bold">✓ Image attached</p>
                              <p className="text-zinc-500">Ready for review</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-3 text-zinc-500">
                            <Upload className="w-6 h-6 mb-1 text-zinc-400" />
                            <span className="text-xs font-mono text-zinc-600">
                              {t.contactPage.uploadDrag}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-colors rounded-full flex items-center justify-center gap-2 shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{t.contactPage.previewGenerating}</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 fill-white" />
                            <span>{t.contactPage.submitBtn}</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] font-mono text-zinc-500 mt-3 text-center">
                        {t.contactPage.whatsappNotice}
                      </p>
                    </div>
                  </form>
                )}
              </ScrollAnimate>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
