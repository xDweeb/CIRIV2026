# CIRIV 2026 - Tarifs Page Design Improvement Brief

## 📋 Project Overview
**Website:** CIRIV 2026 International Congress (Research, Innovation & Valorization)
**Current Task:** Improve the "Tarifs & Paiement" (Fees & Payment) page design
**Framework:** Astro.js + Tailwind CSS
**Languages:** French, English, Arabic (RTL support)

## 🎨 Current Design System

### Brand Colors
- **Primary:** `#0F766E` (Teal)
- **Primary Dark:** `#0C6059` 
- **Accent:** `#14B8A6` (Light Teal)
- **Surface Light:** `#FFFFFF`
- **Surface Dark:** `#0B1220`

### Typography
- **Main Font:** Inter (system-ui fallback)
- **Arabic Font:** Cairo (for RTL text)
- **Headings:** Bold, brand-primary color
- **Body:** Slate colors with dark mode variants

### Design Patterns
- **Cards:** `rounded-xl shadow-md bg-white dark:bg-slate-800`
- **Buttons:** `bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-lg`
- **Tables:** Alternating row colors, hover effects
- **Spacing:** Container with `mx-auto px-4 py-12`
- **Animations:** `fade-in`, `slide-down`, `transition-all duration-300`

## 📱 Current Mobile Issues & Requirements

### Mobile Problems to Fix:
1. **Table responsiveness** - Current table may overflow on small screens
2. **Touch targets** - Copy buttons need larger tap areas
3. **Text readability** - Font sizes may be too small on mobile
4. **Spacing optimization** - Better mobile padding/margins
5. **Toast notifications** - Position better for mobile (currently top-right)

### Mobile Design Requirements:
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly:** Minimum 44px tap targets
- **Readable:** 16px minimum font size for body text
- **Stackable:** Cards and sections should stack nicely on mobile
- **Thumb-friendly:** Important actions within thumb reach

## 🌐 Multilingual Considerations
- **RTL Support:** Arabic version needs right-to-left layout
- **Text Expansion:** Arabic/French text can be 30% longer than English
- **Cultural Colors:** Green for success, red for warnings (universal)
- **Font Loading:** Cairo font for Arabic, fallbacks for others

## 🎯 Page Structure (Current)

### Section 1: Pricing Table
```
Category | Early Bird (before Feb 23) | Regular (after Feb 23)
Teachers-Researchers | 1200 MAD | 1500 MAD
PhD Students | 700 MAD | 900 MAD
Students | 400 MAD | 500 MAD
Professionals | 2000 MAD | 2500 MAD
```

### Section 2: Bank Information (RIB)
- Bank: BANK OF AFRICA
- RIB: 123 456 7890 0000 1234 5678 9012
- Account Holder: Association CIRIV
- Swift Code: BMCE MA MC
- Copy RIB button with clipboard functionality

### Section 3: Email Instructions
- Email: info@ciriv.org
- Copy email button
- Payment confirmation notice

## 🔧 Technical Stack
- **Framework:** Astro.js (Static Site Generator)
- **Styling:** Tailwind CSS
- **Icons:** Emoji + SVG (no icon library currently)
- **JavaScript:** Vanilla JS for clipboard functionality
- **Dark Mode:** `dark:` prefixed classes
- **Animations:** Tailwind keyframes + CSS transitions

## 🎨 Design Inspiration & Goals

### Current Style: 
- Clean, professional, academic
- Teal color scheme (trust, stability)
- Card-based layout
- Subtle shadows and rounded corners

### Improvement Goals:
1. **Enhanced Mobile UX** - Better phone/tablet experience
2. **Visual Hierarchy** - Clearer information prioritization  
3. **Interactive Elements** - More engaging buttons/actions
4. **Micro-animations** - Subtle hover/focus states
5. **Accessibility** - Better contrast, focus indicators
6. **Loading States** - Feedback for clipboard actions

## 📐 Layout Constraints
- **Max Width:** `container mx-auto` (responsive container)
- **Padding:** `px-4` minimum for mobile
- **Sections:** Separated by borders or spacing
- **Navigation:** Header/Footer must remain consistent
- **Toast Position:** Consider mobile-friendly placement

## 🎭 Suggested Improvements
1. **Card-based pricing** instead of table (mobile-first)
2. **Gradient backgrounds** for visual interest
3. **Better copy feedback** - animated confirmations
4. **Payment steps** - clearer process flow
5. **Visual icons** for categories/actions
6. **Sticky CTA** - prominent registration action
7. **Progress indicators** - payment process clarity

## 📋 Files to Focus On

### Primary File:
`src/pages/fr/tarifs.astro` (190 lines) - Main implementation

### Supporting Files:
- `tailwind.config.cjs` - Design tokens
- `src/i18n/ui.ts` - Translation keys (pricing.* and payment.*)
- `src/layouts/BaseLayout.astro` - Page structure

### Translation Keys Available:
```typescript
'pricing.title', 'pricing.registration', 'pricing.category'
'pricing.earlyBird', 'pricing.regular', 'pricing.teachers'
'pricing.phd', 'pricing.students', 'pricing.professionals'
'payment.title', 'payment.copyRib', 'payment.copyEmail'
'payment.ribCopied', 'payment.emailCopied'
'payment.instructions', 'payment.confirmation'
```

## 🚀 Success Criteria
- ✅ Excellent mobile experience (< 768px)
- ✅ Maintains brand consistency
- ✅ Improved visual hierarchy
- ✅ Better interactivity/feedback
- ✅ Accessibility compliant
- ✅ Multilingual/RTL compatible
- ✅ Fast loading (no heavy assets)

---

**Note:** Please maintain the existing Astro.js structure and Tailwind classes. Focus on mobile-first responsive design with enhanced visual appeal and better UX patterns.
