export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    services: string;
    whyPersona: string;
    about: string;
    pricing: string;
    contact: string;
    whatsapp: string;
  };
  missionVision: {
    badge: string;
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustText: string;
    stats: {
      salesGrowth: string;
      salesGrowthLabel: string;
      turnkey: string;
      turnkeyLabel: string;
      roi: string;
      roiLabel: string;
    };
  };
  problem: {
    title: string;
    subtitle: string;
    oldWayTitle: string;
    oldWayItems: string[];
    personaWayTitle: string;
    personaWayItems: string[];
  };
  features: {
    title: string;
    subtitle: string;
    ecommerce: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    ads: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    reels: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    crm: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
  };
  contactPage: {
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    storeNameLabel: string;
    storeNamePlaceholder: string;
    categoryLabel: string;
    categories: { sneakers: string; fashion: string; lifestyle: string; accessories: string };
    uploadLabel: string;
    uploadDrag: string;
    submitBtn: string;
    whatsappNotice: string;
    previewTitle: string;
    previewGenerating: string;
    previewSuccess: string;
    directContactTitle: string;
    officeCairo: string;
    officeAlex: string;
    whatsappAction: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    setupFeeLabel: string;
    monthlyRetainerLabel: string;
    popularTag: string;
    tiers: {
      starter: {
        name: string;
        desc: string;
        setupPrice: string;
        monthlyPrice: string;
        features: string[];
        cta: string;
      };
      growth: {
        name: string;
        desc: string;
        setupPrice: string;
        monthlyPrice: string;
        features: string[];
        cta: string;
      };
      enterprise: {
        name: string;
        desc: string;
        setupPrice: string;
        monthlyPrice: string;
        features: string[];
        cta: string;
      };
    };
  };
  footer: {
    tagline: string;
    rights: string;
    privacy: string;
    terms: string;
    egyptNote: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      whyPersona: "Why Persona",
      about: "Vision & Mission",
      pricing: "Pricing",
      contact: "Contact Us",
      whatsapp: "Contact WhatsApp",
    },
    missionVision: {
      badge: "OUR FOUNDATIONAL PURPOSE",
      missionTitle: "Our Mission",
      mission: "To democratize enterprise-grade digital infrastructure by equipping offline merchants with a singular, digital persona — bridging the gap between physical retail and advanced e-commerce, automated marketing, and operational management.",
      visionTitle: "Our Vision",
      vision: "To become the foundational operating system for modern retail in the MENA region, where any merchant can launch a fully automated, data-driven digital business ecosystem within days, eliminating the friction of fragmented software and manual marketing.",
    },
    hero: {
      badge: "Complete Growth Agency for Egyptian Retail Brands",
      headline: "Scale Your Retail Sales With an All-in-One Growth Partner",
      subheadline: "We build your high-converting online store, run targeted ad campaigns, and produce custom viral video Reels for your products — plus optional CRM to turn 1-time buyers into loyal repeat customers.",
      primaryCTA: "Contact Sales & Get Audit",
      secondaryCTA: "Explore Our Services",
      trustText: "Trusted by leading apparel, sneaker & lifestyle brands in Cairo & Alexandria",
      stats: {
        salesGrowth: "3.4x",
        salesGrowthLabel: "Average Sales Growth Velocity",
        turnkey: "100%",
        turnkeyLabel: "Done-For-You Execution",
        roi: "+240%",
        roiLabel: "Higher Ad Campaign ROI",
      },
    },
    problem: {
      title: "Stop Managing 4 Separate Freelancers and Agencies",
      subtitle: "Juggling web developers, ad media buyers, video editors, and customer retention tools creates chaos, delayed launches, and wasted budget.",
      oldWayTitle: "The Fragmented Agency Nightmare",
      oldWayItems: [
        "Paying 4 separate monthly retainers: Web developer + Ad manager + Video editor + CRM tool.",
        "Ad managers running campaigns to poorly converting websites with low ROI.",
        "Waiting weeks for freelancers to shoot and deliver product video Reels.",
        "Zero single point of accountability when sales drop.",
      ],
      personaWayTitle: "The Persona All-in-One Advantage",
      personaWayItems: [
        "One dedicated growth agency handling your web store, ad buying, and video content.",
        "Ads directly optimized to sell products on a mobile-friendly store built to convert.",
        "Consistent monthly stream of viral video Reels created specifically for your items.",
        "Optional integrated CRM to reactivate past buyers & maximize repeat purchases.",
      ],
    },
    features: {
      title: "The 4 Core Pillars Designed to Scale Your Store",
      subtitle: "Focus on managing your retail inventory while Persona powers your digital sales, marketing campaigns, and customer retention.",
      ecommerce: {
        tag: "Pillar 01",
        title: "E-Commerce Website",
        desc: "A stunning, mobile-optimized online store designed specifically to convert Egyptian retail visitors into paid customers 24/7.",
        bullets: [
          "Instant mobile page loading for Egyptian networks",
          "Seamless Cash on Delivery (COD) & local Egyptian payment options",
          "Clean product layout optimized for mobile buyers",
        ],
      },
      ads: {
        tag: "Pillar 02",
        title: "Ads & Media Buying",
        desc: "High-ROI advertising campaigns managed across Meta (Instagram/Facebook) and TikTok to bring ready-to-buy customers directly to your products.",
        bullets: [
          "Targeted audience reach tailored to Egyptian shoppers",
          "Continuous ad testing & daily campaign optimization",
          "Maximum return on ad spend (ROAS) guaranteed",
        ],
      },
      reels: {
        tag: "Pillar 03",
        title: "Custom Business Reels",
        desc: "Eye-catching, viral video Reels shot and produced specifically for your brand's clothing, footwear, or lifestyle products.",
        bullets: [
          "High-quality product video Reels tailored to your audience",
          "Trending music overlay, Arabic captions & visual styling",
          "Consistent content delivery ready for Instagram & TikTok",
        ],
      },
      crm: {
        tag: "Pillar 04",
        title: "Merchant CRM System",
        desc: "A customer relationship manager to track customer purchase history, automate WhatsApp follow-ups, and drive repeat orders.",
        bullets: [
          "Automated WhatsApp order confirmation & tracking",
          "Customer order history tracking & VIP shopper tagging",
          "Re-engagement campaigns for inactive shoppers",
        ],
      },
    },
    contactPage: {
      title: "Get in Touch With Our Growth Team",
      subtitle: "Ready to scale your retail brand? Send us your brand details or upload a product photo for a customized growth strategy.",
      formTitle: "Brand Consultation & Audit Form",
      nameLabel: "Store Owner / Manager Name",
      namePlaceholder: "e.g. Ahmed El-Sayed",
      phoneLabel: "Egyptian WhatsApp Number",
      phonePlaceholder: "e.g. 0100 123 4567",
      storeNameLabel: "Store / Brand Name",
      storeNamePlaceholder: "e.g. Cairo Kicks / Urban Thread",
      categoryLabel: "Retail Category",
      categories: {
        sneakers: "Sneakers & Footwear",
        fashion: "Apparel & Streetwear",
        lifestyle: "Lifestyle & Accessories",
        accessories: "Watches & Jewelry",
      },
      uploadLabel: "Storefront or Product Photo",
      uploadDrag: "Click or drop product photo here (JPG, PNG)",
      submitBtn: "Submit Inquiry & Open WhatsApp",
      whatsappNotice: "Our team will review your inquiry immediately and open a direct WhatsApp conversation with you.",
      previewTitle: "Brand Review Package",
      previewGenerating: "Analyzing store details & preparing custom strategy...",
      previewSuccess: "Audit package ready! Opening WhatsApp chat...",
      directContactTitle: "Direct Contact Information",
      officeCairo: "Cairo Headquarters: New Cairo Business District, Cairo, Egypt",
      officeAlex: "Alexandria Branch: Fouad Street, Alexandria, Egypt",
      whatsappAction: "Chat directly on WhatsApp Business (+20 100 000 0000)",
    },
    pricing: {
      title: "Transparent Investment. Maximum Business Growth.",
      subtitle: "Clear setup cost + fixed monthly retainer. Zero hidden fees. Pure ROI for your retail store.",
      setupFeeLabel: "One-Time Setup Fee",
      monthlyRetainerLabel: "Monthly Retainer",
      popularTag: "Most Popular for Retail Brands",
      tiers: {
        starter: {
          name: "Essential Store",
          desc: "Ideal for growing retail stores ready to launch their digital sales channel.",
          setupPrice: "14,999 EGP",
          monthlyPrice: "2,499 EGP / mo",
          features: [
            "Custom Mobile-Optimized Web Storefront",
            "Meta & TikTok Ad Campaign Setup",
            "10 Customized Product Reels / month",
            "Local Cash on Delivery & Paymob Setup",
            "Dedicated Account Support",
          ],
          cta: "Select Essential Plan",
        },
        growth: {
          name: "Complete Agency Package",
          desc: "Our most popular done-for-you growth solution: Web Store + Ad Management + Custom Reels + Optional CRM.",
          setupPrice: "24,999 EGP",
          monthlyPrice: "4,999 EGP / mo",
          features: [
            "Everything in Essential Plan",
            "Full Media Buying & Daily Ad Campaign Optimization",
            "25 Customized Product Reels / month",
            "Optional Merchant CRM & WhatsApp Automation",
            "Dedicated Growth Manager in Cairo",
            "Weekly Performance & ROI Reports",
          ],
          cta: "Claim Growth Package",
        },
        enterprise: {
          name: "Franchise & Multi-Branch",
          desc: "For multi-store retail chains requiring custom ad budgets, high volume Reels, and custom CRM workflows.",
          setupPrice: "Custom Quote",
          monthlyPrice: "Custom Retainer",
          features: [
            "Full Multi-Branch Store Management",
            "High Volume Custom Reels Production",
            "Enterprise Media Buying Strategy across all platforms",
            "Advanced Multi-Location CRM & WhatsApp Retargeting",
            "24/7 Priority Support & Strategy Sessions",
          ],
          cta: "Speak with Founder",
        },
      },
    },
    footer: {
      tagline: "Persona — The Complete Growth Agency for Modern Retail Brands in Egypt & MENA.",
      rights: "© 2026 Persona Technologies. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      egyptNote: "Proudly empowering retail brands across Cairo & Alexandria, Egypt.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      whyPersona: "لماذا بيرسونا",
      about: "الرؤية والرسالة",
      pricing: "الباقات والأسعار",
      contact: "تواصل معنا",
      whatsapp: "تواصل عبر واتساب",
    },
    missionVision: {
      badge: "هدفنا وهويتنا التأسيسية",
      missionTitle: "مهمتنا",
      mission: "تمكين تجار المحلات من الحصول على بنية تحتية رقمية احترافية عبر بناء هوية رقمية موحدة لكل تاجر — للربط بين البيع المباشر في المحل والتجارة الإلكترونية المتقدمة والتسويق المؤتمت والإدارة التشغيلية.",
      visionTitle: "رؤيتنا المستقبلية",
      vision: "أن نكون النظام التشغيلي الأساسي للتجارة والتجزئة الحديثة في منطقة الشرق الأوسط وشمال أفريقيا، حيث يستطيع أي تاجر إطلاق منظومة رقمية متكاملة ومؤتمتة في أيام معدودة، والقضاء على فوضى البرامج المشتتة والتسويق اليدوي.",
    },
    hero: {
      badge: "وكالة نمو متكاملة لعلامات التجزئة في مصر",
      headline: "زوّد مبيعات محلك التجاري مع شريك نمو متكامل",
      subheadline: "نصمم لك متجراً أونلاين سريعاً ومصمماً للبيع، ندير حملاتك الإعلانية الممولة باحترافية، وننتج فيديوهات ريلز مخصصة لمنتجاتك — بالإضافة لسيستم علاقات العملاء (CRM) الاختياري لزيادة المبيعات المتكررة.",
      primaryCTA: "تواصل معنا واحصل على فحص لبراندك",
      secondaryCTA: "استكشف خدماتنا",
      trustText: "نثق بنا أكبر علامات الملابس، الأحذية، واللايف ستايل في القاهرة والإسكندرية",
      stats: {
        salesGrowth: "3.4x",
        salesGrowthLabel: "معدل نمو المبيعات",
        turnkey: "100%",
        turnkeyLabel: "تنفيذ متكامل نيابة عنك",
        roi: "+240%",
        roiLabel: "زيادة في عوائد الإعلانات",
      },
    },
    problem: {
      title: "استغنِ عن التعامل مع 4 فريلانسرز وشركات منفصلة",
      subtitle: "التنقل بين مبرمج للموقع، ومسؤول إعلانات ممولة، ومونتير فيديوهات، وأدوات متابعة العملاء يسبب التشتت وهدر الميزانية بدون نتائج ملموسة.",
      oldWayTitle: "كابوس الشركات المستقلة المشتتة",
      oldWayItems: [
        "دفع 4 اشتراكات شهرياً: مبرمج موقع + مدير إعلانات + مصمم فيديوهات + سيستم عملاء.",
        "مسؤول الإعلانات يقود الزوار لموقع غير مصمم للبيع، مما يعطي عائد استثمار منخفض.",
        "الانتظار لأسابيع حتى يقوم الفريلانسر بتصوير ومونتاج فيديوهات الريلز.",
        "عدم وجود جهة واحدة مسؤولة عن تحقيق نمو المبيعات.",
      ],
      personaWayTitle: "ميزة بيرسونا الموحدة للنمو",
      personaWayItems: [
        "وكالة نمو واحدة مخصصة تتولى متجرك الأونلاين، إدارتك للإعلانات، وإنتاج الفيديوهات.",
        "إعلانات ممولة موجهة ومصممة خصيصاً للبيع المباشر على متجر موبايل سريع.",
        "توفير مستمر وفوري لفيديوهات ريلز مخصصة لمنتجاتك جاهزة للنشر والتسويق.",
        "سيستم CRM اختياري لإعادة تنشيط العملاء السابقين وزيادة الشراء المتكرر.",
      ],
    },
    features: {
      title: "الركائز الـ 4 الأساسية لتكبير وتطوير تجارتك",
      subtitle: "ركز على إدارة محلك ومخزونك، وسيب لبيرسونا إدارة مبيعاتك الأونلاين، إعلاناتك، ومتابعة عملاءك.",
      ecommerce: {
        tag: "الركيزة 01",
        title: "متجر إلكتروني احترافي (E-Commerce)",
        desc: "متجر أونلاين مصمم للمشتري المصري، يعمل بكتفاءة وسرعة فائقة على الموبايل لجمع الطلبات والمبيعات 24/7.",
        bullets: [
          "تحميل فوري على الموبايل لشبكات الاتصالات المصرية",
          "دعم كامل للدفع عند الاستلام (COD) وبوابات الدفع المصرية",
          "تصميم سلس ومريح للمشتري لإتمام الشراء بسهولة",
        ],
      },
      ads: {
        tag: "الركيزة 02",
        title: "إعلانات ممولة وإدارة الحملات (Ads & Media Buying)",
        desc: "إدارة إعلانات ممولة احترافية على فيسبوك، إنستجرام، وتيك توك لجلب زوار مستهدفين وجاهزين للشراء فوراً.",
        bullets: [
          "استهداف دقيق للجمهور المصري المهتم بمنتجاتك",
          "اختبار يومي للإعلانات لضمان أعلى عائد استثماري",
          "تحسين مستمر لتقليل تكلفة العميل وزيادة الأرباح",
        ],
      },
      reels: {
        tag: "الركيزة 03",
        title: "فيديوهات ريلز مخصصة لعملك (Custom Reels)",
        desc: "إنتاج فيديوهات ريلز قصيرة وجذابة مخصصة لمنتجات محلك (ملابس، أحذية، أو إكسسوارات) لجذب الانتباه وزيادة المبيعات.",
        bullets: [
          "فيديوهات احترافية عالية الجودة مخصصة لبراندك",
          "تركيب الموسيقى التريند والكتابة العربية الجذابة",
          "محتوى مستمر وجاهز للنشر على إنستجرام وتيك توك",
        ],
      },
      crm: {
        tag: "الركيزة 04",
        title: "سيستم متابعة العملاء (Merchant CRM)",
        desc: "نظام مخصص لإدارة علاقات وتاريخ مشتريات العملاء، وأتمتة رسائل الواتساب لضمان تكرار الشراء وتكبير القيمة الشرائية للعميل.",
        bullets: [
          "تأكيد الطلبات وتتبع الشحنات تلقائياً عبر الواتساب",
          "سجل كامل لمشتريات كل عميل وتصنيف العملاء المميزين",
          "حملات تذكير وإعادة استهداف للعملاء السابقين",
        ],
      },
    },
    contactPage: {
      title: "تواصل مع فريق النمو ببيرسونا",
      subtitle: "جاهز لتكبير مبيعاتك وتطوير براندك؟ أرسل لنا تفاصيل محلك أو ارفع صورة لمنتجك للحصول على استراتيجية نمو مخصصة.",
      formTitle: "نموذج استشارة وفحص البراند",
      nameLabel: "اسم صاحب المحل / المدير",
      namePlaceholder: "مثال: أحمد السيد",
      phoneLabel: "رقم الواتساب (المصري)",
      phonePlaceholder: "مثال: 0100 123 4567",
      storeNameLabel: "اسم المحل / العلامة التجارية",
      storeNamePlaceholder: "مثال: كايرو كيكس / كاي كلوثينج",
      categoryLabel: "نشاط المحل",
      categories: {
        sneakers: "أحذية وسنيكرز",
        fashion: "ملابس وموضة",
        lifestyle: "لايف ستايل وإكسسوارات",
        accessories: "ساعات ومجوهرات",
      },
      uploadLabel: "صورة للمحل أو أحد المنتجات",
      uploadDrag: "اضغط هنا أو اسحب صورة المنتج (JPG, PNG)",
      submitBtn: "إرسال الطلب وفتح محادثة الواتساب",
      whatsappNotice: "سيقوم فريقنا مراجعة طلبك فوراً وفتح محادثة مباشرة معك عبر الواتساب.",
      previewTitle: "ملف فحص البراند",
      previewGenerating: "جاري تحليل تفاصيل محلك وتجهيز عينة الفيديو المخصصة...",
      previewSuccess: "تم تجهيز عينة الفحص! جاري التحويل للواتساب...",
      directContactTitle: "معلومات التواصل المباشر",
      officeCairo: "المقر الرئيسي بالقاهرة: التجمع الخامس، القاهرة، مصر",
      officeAlex: "فرع الإسكندرية: شارع فؤاد، الإسكندرية، مصر",
      whatsappAction: "محادثة مباشرة عبر واتساب الأعمال (+20 100 000 0000)",
    },
    pricing: {
      title: "استثمار شفاف وشامل لتكبير مبيعات محلك",
      subtitle: "رسوم تجهيز واضحة + اشتراك شهري ثابت. بدون عمولات أو مصاريف خفية. عائد مضمون لعملك.",
      setupFeeLabel: "رسوم التجهيز (دفعة واحدة)",
      monthlyRetainerLabel: "الاشتراك الشهري",
      popularTag: "الباقة الأكثر طلباً للتجار",
      tiers: {
        starter: {
          name: "الباقة الأساسية للمتجر",
          desc: "مثالية لمحلات التجزئة التي تبدأ رحلتها الرقمية لإطلاق قناة مبيعات أونلاين ناجحة.",
          setupPrice: "14,999 جنيه",
          monthlyPrice: "2,499 جنيه / شهرياً",
          features: [
            "متجر إلكتروني مخصص ومناسب للموبايل",
            "تجهيز حملات الإعلانات الممولة على فيسبوك وتيك توك",
            "إنشاء 10 فيديوهات ريلز مخصصة لمنتجاتك شهرياً",
            "تفعيل الدفع عند الاستلام وبوابة الدفع الإلكتروني",
            "دعم فني ومتابعة مخصصة",
          ],
          cta: "اختر الباقة الأساسية",
        },
        growth: {
          name: "باقة النمو المتكاملة",
          desc: "الحل المتكامل الأكثر طلباً: متجر أونلاين + إدارة الإعلانات الممولة + فيديوهات ريلز + سيستم CRM اختياري.",
          setupPrice: "24,999 جنيه",
          monthlyPrice: "4,999 جنيه / شهرياً",
          features: [
            "جميع مميزات الباقة الأساسية",
            "إدارة كاملة للإعلانات الممولة وتحسين العائد يومياً",
            "إنشاء 25 فيديو ريلز مخصص لمنتجاتك شهرياً",
            "سيستم CRM اختياري وأتمتة الواتساب لخدمة العملاء",
            "مدير نمو مخصص لعلامتك التجارية بالقاهرة",
            "تقارير أسبوعية تفصيلية بالأرباح والعوائد",
          ],
          cta: "احصل على باقة النمو",
        },
        enterprise: {
          name: "سلاسل الفروع والفروكشايز",
          desc: "لسلاسل المحلات الكبرى التي تحتاج ميزانيات إعلانية كبيرة، حجم إنتاج ريلز ضخم، وسيستم CRM متقدم.",
          setupPrice: "عرض سعر مخصص",
          monthlyPrice: "اشتراك مخصص",
          features: [
            "إدارة متكاملة لسلاسل المحلات والفروع",
            "إنشاء أعداد ضخمة من الفيديوهات والريلز المخصصة",
            "استراتيجية ميديا بايينج متقدمة على جميع المنصات",
            "سيستم CRM متقدم لإعادة استهداف العملاء وتكرار الشراء",
            "دعم فني 24/7 وجلسات استراتيجية دورية",
          ],
          cta: "تحدث مع المؤسس مباشرة",
        },
      },
    },
    footer: {
      tagline: "بيرسونا — وكالة النمو المتكاملة لبراندات ومحلات التجزئة في مصر والشرق الأوسط.",
      rights: "© 2026 جميع الحقوق محفوظة لشركة بيرسونا.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      egyptNote: "نخدم بكل فخر أصحاب المحلات والبراندات في القاهرة والإسكندرية، مصر.",
    },
  },
};
