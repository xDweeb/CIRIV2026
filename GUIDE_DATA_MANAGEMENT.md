# CIRIV 2026 Data Management Guide

## 📋 Overview
This guide explains how to manage and update data in your CIRIV 2026 website, including committee members, translations, and content.

## 🏗️ Website Architecture

### Data Structure
```
src/
├── data/                          # Dynamic data files
│   ├── committee_scientifique.json    # Scientific committee members
│   └── committee_organisation.json    # Organizing committee members
├── content/                       # Multilingual content
│   ├── dates.[lang].json             # Important dates per language
│   └── committees.[lang].json        # Committee descriptions
├── i18n/                         # Translation system
│   └── ui.ts                         # UI text translations
└── components/                   # Reusable components
    ├── ComiteScientifique.astro      # Scientific committee with search
    └── ComiteOrganisation.astro      # Organizing committee with images
```

## 📊 Committee Management

### Scientific Committee (`committee_scientifique.json`)

**Current Structure:**
```json
[
  {
    "name": "Pr. Full Name",
    "role": "Institution, Department, Country"
  }
]
```

**To Add a New Member:**
1. Open `src/data/committee_scientifique.json`
2. Add new object to the array:
```json
{
  "name": "Dr. Jane Smith",
  "role": "Department of Chemistry, University of Example, USA"
}
```

**Features:**
- ✅ Real-time search functionality
- ✅ Responsive grid layout (1/2/3 columns)
- ✅ Multilingual support
- ✅ Dark/light mode compatible
- ✅ Fade-in animations

### Organizing Committee (`committee_organisation.json`)

**Current Structure:**
```json
[
  {
    "image": "/images/organisation/member-name.webp",
    "name": "Full Name",
    "role": "Position Title"
  }
]
```

**To Add a New Member:**
1. Add member photo to `/public/images/organisation/` (use .webp format)
2. Update the JSON file:
```json
{
  "image": "/images/organisation/new-member.webp",
  "name": "Dr. New Member",
  "role": "Conference Chair"
}
```

**Requirements:**
- Image format: .webp (recommended for performance)
- Image size: 400x400px recommended
- Responsive design: Works on all devices

## 🌍 Multilingual System

### Adding New Translations

**1. Update UI Translations (`src/i18n/ui.ts`):**
```typescript
export const ui = {
  fr: {
    'new.key': 'Texte en français'
  },
  en: {
    'new.key': 'Text in English'
  },
  ar: {
    'new.key': 'النص بالعربية'
  }
}
```

**2. Use in Components:**
```astro
---
import { useTranslations } from '../i18n/ui.ts';
const lang = Astro.currentLocale || 'fr';
const t = useTranslations(lang);
---

<h1>{t('new.key')}</h1>
```

### Language-Specific Content

**Important Dates (`src/content/dates.[lang].json`):**
```json
{
  "timeline": [
    {
      "date": "2026-03-15",
      "title": "Abstract Submission Deadline",
      "description": "Submit your research abstracts"
    }
  ]
}
```

## 🎨 Styling and Design

### Tailwind CSS Classes Used

**Committee Cards:**
- `bg-white dark:bg-slate-800` - Background colors
- `hover:shadow-lg` - Interactive effects
- `transition-all duration-300` - Smooth animations

**Search Functionality:**
- `focus:ring-2 focus:ring-blue-500` - Focus states
- `placeholder:text-slate-400` - Placeholder styling

### Responsive Breakpoints
- Mobile: `grid-cols-1` (default)
- Tablet: `md:grid-cols-2` (768px+)
- Desktop: `lg:grid-cols-3` (1024px+)

## 🔄 Form Integration

### Google Apps Script Integration

**Current Endpoint:** 
```
https://script.google.com/macros/s/AKfycbwLn7iQWrQUa2MIaLqR9kUQhvKnBqWjUDmKa-RqmKImQqrXaOjjkJaJC-jXZm4S_2az/exec
```

**Registration Forms:**
- `/fr/inscription.astro` - French registration
- `/en/inscription.astro` - English registration  
- `/ar/inscription.astro` - Arabic registration

**To Update Form Endpoint:**
Replace the `action` attribute in all three registration forms.

## 🚀 Performance Optimization

### Image Optimization
- Use `.webp` format for committee photos
- Optimize images to ~100KB or less
- Use responsive image loading

### Search Performance
- Client-side filtering for instant results
- Debounced search to reduce CPU usage
- Efficient string matching algorithms

## 📱 Responsive Design

### Grid Layouts
```css
/* Scientific Committee */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Organizing Committee */
grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
```

### RTL Support
Arabic language automatically applies RTL layout:
```css
[dir="rtl"] .search-input {
  text-align: right;
}
```

## 🔧 Advanced Customization

### Adding New Sections

**1. Create Data File:**
```json
// src/data/speakers.json
[
  {
    "name": "Speaker Name",
    "topic": "Presentation Topic",
    "bio": "Speaker biography"
  }
]
```

**2. Create Component:**
```astro
// src/components/Speakers.astro
---
import speakers from '../data/speakers.json';
---

<section class="py-12">
  {speakers.map(speaker => (
    <div class="speaker-card">
      <h3>{speaker.name}</h3>
      <p>{speaker.topic}</p>
    </div>
  ))}
</section>
```

**3. Import in Pages:**
```astro
---
import Speakers from '../../components/Speakers.astro';
---

<Speakers />
```

### Custom Search Implementation

**Add Search to Any Component:**
```typescript
// Search functionality
let searchTerm = '';
$: filteredItems = items.filter(item => 
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.description.toLowerCase().includes(searchTerm.toLowerCase())
);
```

## 📋 Maintenance Checklist

### Weekly Tasks
- [ ] Check for broken images in organizing committee
- [ ] Verify search functionality across languages
- [ ] Test responsive layouts on different devices

### Before Major Updates
- [ ] Backup current data files
- [ ] Test in development environment
- [ ] Verify translations are complete
- [ ] Check Google Apps Script endpoints

### Performance Monitoring
- [ ] Image optimization (keep under 100KB)
- [ ] Search response time (should be instant)
- [ ] Page load speeds
- [ ] Mobile responsiveness

## 🆘 Troubleshooting

### Common Issues

**1. Committee Member Not Showing:**
- Check JSON syntax (commas, brackets)
- Verify file path is correct
- Ensure no duplicate entries

**2. Search Not Working:**
- Check JavaScript console for errors
- Verify search input IDs match
- Test with simple search terms

**3. Images Not Loading:**
- Check file path: `/public/images/organisation/`
- Verify image format (.webp, .jpg, .png)
- Check file permissions

**4. Translation Missing:**
- Add to all three languages (fr, en, ar)
- Use exact key names
- Check for typos in translation keys

## 📞 Support Resources

### File Locations Quick Reference
```
Committee Data: src/data/committee_*.json
Translations: src/i18n/ui.ts
Components: src/components/Comite*.astro
Pages: src/pages/[lang]/comites.astro
Images: public/images/organisation/
```

### Useful Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Next Steps

1. **Add Member Photos**: Upload photos to `/public/images/organisation/`
2. **Test Across Languages**: Verify all three language versions
3. **Mobile Testing**: Check responsive design on various devices
4. **Performance Audit**: Use browser dev tools to check load times
5. **Content Updates**: Keep committee information current

This guide covers the essential aspects of managing your CIRIV 2026 website data. For specific technical questions or advanced customizations, refer to the Astro.js documentation or contact your development team.
