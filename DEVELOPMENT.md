# دليل التطوير | Development Guide

## 🛠️ إعداد بيئة التطوير | Development Environment Setup

### 1. متطلبات النظام | System Requirements
```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git >= 2.0.0
```

### 2. استنساخ المشروع | Clone Project
```bash
git clone https://github.com/MohandAdris/fitam-landing-page.git
cd fitam-landing-page
npm install
```

### 3. تشغيل الخادم المحلي | Start Development Server
```bash
npm run dev
# الموقع متاح على: http://localhost:5173
```

## 📁 هيكل الملفات التفصيلي | Detailed File Structure

```
src/
├── App.jsx                 # المكون الرئيسي مع جميع الأقسام
├── App.css                # الأنماط الرئيسية والخطوط
├── main.jsx               # نقطة دخول React
├── assets/                # الموارد الثابتة
│   ├── fonts/            # خطوط Fatimah Arabic
│   │   ├── FatimahArabicRegular.otf
│   │   ├── FatimahArabicBold.otf
│   │   ├── FatimahArabicLight.otf
│   │   ├── FatimahArabicMedium.otf
│   │   └── FatimahArabicBlack.otf
│   ├── images/           # الصور والرسوم
│   │   ├── fitam-logo-official.png
│   │   ├── hero-background.png
│   │   ├── expert-portrait.png
│   │   ├── success-journey.png
│   │   └── wellness-icons.png
└── components/           # مكونات واجهة المستخدم
    └── ui/              # مكونات Shadcn/ui
        ├── button.jsx
        ├── card.jsx
        ├── input.jsx
        └── label.jsx
```

## 🎨 نظام التصميم | Design System

### الألوان الأساسية | Primary Colors
```css
:root {
  --fitam-primary: #009b88;      /* الأخضر الزمردي */
  --fitam-primary-dark: #007a6b; /* الأخضر الداكن */
  --fitam-secondary: #d7f9f4;    /* الأزرق الفاتح */
  --fitam-gray: #7c7c7c;         /* الرمادي */
}
```

### الخطوط | Typography
```css
/* الخط الأساسي */
font-family: 'Fatimah Arabic', 'Noto Sans Arabic', sans-serif;

/* أحجام الخطوط */
.text-6xl { font-size: 3.75rem; }  /* العناوين الرئيسية */
.text-4xl { font-size: 2.25rem; }  /* العناوين الفرعية */
.text-xl  { font-size: 1.25rem; }  /* النصوص العادية */
```

### المسافات | Spacing
```css
.p-6   { padding: 1.5rem; }      /* حشو متوسط */
.p-12  { padding: 3rem; }        /* حشو كبير */
.mb-8  { margin-bottom: 2rem; }  /* هامش سفلي */
.gap-8 { gap: 2rem; }            /* فجوة بين العناصر */
```

## 🔧 المكونات الرئيسية | Main Components

### 1. قسم البطل | Hero Section
```javascript
// الموقع: App.jsx (السطر 329-419)
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
  {/* اللوغو */}
  <img src={fitamLogo} alt="فطام.نت" className="w-80 h-auto mx-auto mb-6" />
  
  {/* العنوان الرئيسي */}
  <h1 className="text-6xl lg:text-8xl font-black mb-4 leading-tight">
    <span className="block bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-900 bg-clip-text text-transparent">
      {currentContent.hero.title}
    </span>
  </h1>
  
  {/* الإحصائيات */}
  <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
    {/* بطاقات الإحصائيات */}
  </div>
</section>
```

### 2. قسم الخدمات | Services Section
```javascript
// الموقع: App.jsx (السطر 421-480)
<section className="py-24 relative">
  {/* شبكة الخدمات */}
  <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {currentContent.services.items.map((service, index) => (
      <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* محتوى البطاقة */}
      </Card>
    ))}
  </div>
</section>
```

### 3. نموذج التواصل | Contact Form
```javascript
// الموقع: App.jsx (السطر 656-827)
<form onSubmit={handleSubmit} className="space-y-8">
  <div className="grid md:grid-cols-2 gap-6">
    <Input
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500"
    />
  </div>
</form>
```

## 🌐 نظام اللغات | Language System

### إضافة لغة جديدة | Adding New Language
```javascript
// في App.jsx
const content = {
  ar: { /* المحتوى العربي */ },
  he: { /* المحتوى العبري */ },
  en: { /* المحتوى الإنجليزي الجديد */
    hero: {
      title: 'Take Control of Your Health',
      subtitle: 'Quit Smoking with Fitam',
      description: 'A transformative journey...'
    }
  }
}

// إضافة زر اللغة الجديدة
<button onClick={() => setLanguage('en')}>English</button>
```

### دعم RTL | RTL Support
```css
/* في App.css */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
```

## 🎭 الرسوم المتحركة | Animations

### إعداد Framer Motion | Framer Motion Setup
```javascript
import { motion, AnimatePresence } from 'framer-motion'

// متغيرات الحركة
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}
```

### الحركات المخصصة | Custom Animations
```css
/* في App.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}
```

## 📱 التصميم المتجاوب | Responsive Design

### نقاط التوقف | Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* الهواتف الكبيرة */
md: 768px   /* الأجهزة اللوحية */
lg: 1024px  /* أجهزة الكمبيوتر المحمولة */
xl: 1280px  /* الشاشات الكبيرة */
2xl: 1536px /* الشاشات الضخمة */
```

### أمثلة الاستجابة | Responsive Examples
```javascript
// أحجام النصوص المتجاوبة
<h1 className="text-4xl md:text-6xl lg:text-8xl">

// الشبكات المتجاوبة
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// المسافات المتجاوبة
<div className="p-6 md:p-12 lg:p-16">
```

## 🔍 تحسين الأداء | Performance Optimization

### تحسين الصور | Image Optimization
```javascript
// استخدام lazy loading
<img loading="lazy" src={image} alt="description" />

// تحسين أحجام الصور
// استخدم WebP للمتصفحات الحديثة
// ضغط الصور قبل الاستخدام
```

### تحسين الخطوط | Font Optimization
```css
/* في App.css */
@font-face {
  font-family: 'Fatimah Arabic';
  src: url('./assets/FatimahArabicRegular.otf') format('opentype');
  font-display: swap; /* تحسين التحميل */
}
```

## 🧪 الاختبار | Testing

### اختبار المتصفحات | Browser Testing
```bash
# اختبار على متصفحات مختلفة
- Chrome (الأحدث)
- Firefox (الأحدث)
- Safari (الأحدث)
- Edge (الأحدث)
```

### اختبار الأجهزة | Device Testing
```bash
# اختبار على أحجام شاشات مختلفة
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px)
```

## 🚀 النشر | Deployment

### بناء المشروع | Build Project
```bash
npm run build
# ينتج مجلد dist/ مع الملفات المحسنة
```

### متغيرات البيئة | Environment Variables
```bash
# إنشاء ملف .env
VITE_API_URL=https://api.fitam.net
VITE_CONTACT_EMAIL=info@fitam.net
```

### إعداد CI/CD | CI/CD Setup
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
```

## 🐛 استكشاف الأخطاء | Troubleshooting

### مشاكل شائعة | Common Issues

#### 1. مشكلة الخطوط
```bash
# إذا لم تظهر الخطوط العربية
# تأكد من وجود ملفات الخطوط في src/assets/
# تحقق من مسارات الخطوط في App.css
```

#### 2. مشكلة RTL
```css
/* إذا لم يعمل RTL بشكل صحيح */
html[dir="rtl"] {
  direction: rtl;
}
```

#### 3. مشكلة الرسوم المتحركة
```javascript
// إذا لم تعمل الحركات
// تأكد من تثبيت framer-motion
npm install framer-motion
```

## 📚 موارد إضافية | Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🤝 المساهمة | Contributing

### خطوات المساهمة | Contribution Steps
1. Fork المستودع
2. إنشاء فرع جديد: `git checkout -b feature/amazing-feature`
3. Commit التغييرات: `git commit -m 'Add amazing feature'`
4. Push للفرع: `git push origin feature/amazing-feature`
5. إنشاء Pull Request

### معايير الكود | Code Standards
- استخدم أسماء متغيرات واضحة
- اكتب تعليقات بالعربية والإنجليزية
- اتبع معايير Prettier للتنسيق
- اختبر التغييرات قبل الإرسال

---

<div align="center">
  <p><strong>دليل التطوير لمنصة فطام.نت</strong></p>
  <p><em>للمطورين، بواسطة المطورين</em></p>
</div>
