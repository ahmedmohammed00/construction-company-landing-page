# إليت فينيش - Elite Finish

موقع تصميم داخلي وتشطيبات عصرية مبني بـ Next.js و Tailwind CSS

## المميزات

- ✨ تصميم عصري وأنيق باللغة العربية
- 📱 متجاوب مع جميع الأجهزة
- 🎨 واجهة مستخدم جميلة مع تأثيرات بصرية
- 📧 تكامل مع EmailJS لإرسال رسائل البريد الإلكتروني
- ⚡ سريع ومحسن للأداء
- 🔧 مبني بـ Next.js 14 و TypeScript
- 🚫 لا يعتمد على CDN - جميع الأصول محلية

## التقنيات المستخدمة

- **Next.js 14** - إطار عمل React
- **TypeScript** - لكتابة كود آمن ومنظم
- **Tailwind CSS 3.4** - لإطار عمل CSS
- **Font Awesome** - للأيقونات (محلي)
- **Google Fonts** - خطوط عربية (Cairo, Tajawal)
- **EmailJS** - لإرسال رسائل البريد الإلكتروني


### المتطلبات الأساسية

- Node.js 18+ 
- npm أو yarn

### خطوات التثبيت

1. استنسخ المشروع:
```bash
git clone <repository-url>
cd elite-finish
```

2. ثبت التبعيات:
```bash
npm install
# أو
yarn install
```

3. شغل المشروع في وضع التطوير:
```bash
npm run dev
# أو
yarn dev
```

4. افتح المتصفح على:
```
http://localhost:3000
```

### بناء المشروع للإنتاج

```bash
npm run build
npm start
```

## هيكل المشروع

```
elite-finish/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── emailjs.ts
│   ├── globals.css
│   ├── fonts.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## تكوين EmailJS

لتكوين EmailJS، اتبع الخطوات التالية:

### 1. إنشاء حساب EmailJS
- اذهب إلى [EmailJS.com](https://www.emailjs.com/)
- أنشئ حساب جديد
- أضف خدمة البريد الإلكتروني (Gmail, Outlook, etc.)

### 2. إنشاء قالب البريد الإلكتروني
- أنشئ قالب جديد في EmailJS
- استخدم المتغيرات التالية في القالب:
  - `{{user_name}}` - اسم المستخدم
  - `{{user_email}}` - بريد المستخدم الإلكتروني
  - `{{user_phone}}` - رقم هاتف المستخدم
  - `{{project_type}}` - نوع المشروع
  - `{{message}}` - تفاصيل المشروع

### 3. تحديث الإعدادات
قم بتعديل ملف `app/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID', // معرف الخدمة
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // معرف القالب
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // المفتاح العام
}
```

### مثال لقالب البريد الإلكتروني:
```
مرحباً!

تم استلام طلب استشارة جديد:

الاسم: {{user_name}}
البريد الإلكتروني: {{user_email}}
رقم الهاتف: {{user_phone}}
نوع المشروع: {{project_type}}

تفاصيل المشروع:
{{message}}

شكراً لكم!
```

## الأقسام

1. **القسم الرئيسي (Hero)** - عرض الشركة والخدمات
2. **الخدمات** - عرض الخدمات المقدمة
3. **المعرض** - عرض المشاريع السابقة
4. **العملية** - شرح خطوات العمل
5. **التواصل** - نموذج الاتصال مع تكامل EmailJS
6. **التذييل** - معلومات الشركة والروابط

## التخصيص

### الألوان
يمكنك تخصيص الألوان من خلال تعديل ملف `tailwind.config.ts`:

```typescript
colors: {
  'primary': '#1a1a1a',
  'accent': '#d4af37',
  'light': '#f8f9fa'
}
```

### الخطوط
يتم استخدام خطوط عربية محسنة:

```css
font-family: 'Cairo', 'Tajawal', 'Segoe UI', 'Tahoma', 'Arial', sans-serif;
```

### الأيقونات
جميع الأيقونات محلية من Font Awesome:

```bash
npm install @fortawesome/fontawesome-free
```

## المميزات التقنية

- **لا يعتمد على CDN**: جميع الأصول محلية لضمان السرعة والموثوقية
- **خطوط عربية محسنة**: Cairo و Tajawal للعرض الأمثل للنص العربي
- **أيقونات محلية**: Font Awesome مثبت محلياً
- **تحسين الأداء**: تحميل سريع بدون اعتماد على خدمات خارجية
- **تكامل EmailJS**: إرسال رسائل بريد إلكتروني آمنة وموثوقة

## المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد للميزة
3. Commit التغييرات
4. Push إلى الفرع
5. إنشاء Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.
