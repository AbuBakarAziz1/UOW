# Missing Pages - To Be Created

## Status: These pages are referenced in sidebar but don't exist yet

### About Section:
- [ ] `/about/campus` - Campus life, student activities, clubs
- [ ] `/about/facilities` - Library, labs, sports, hostels

### Admissions Section:
- [ ] `/admissions/deadlines` - Important admission dates, semester schedule
- [ ] `/admissions/scholarships` - Merit-based, need-based scholarships
- [ ] `/admissions/contact` - Admissions office contact, counselor info

### Academics Section:
- [ ] `/academics/undergraduate` - All UG programs overview
- [ ] `/academics/graduate` - All graduate programs overview
- [ ] `/academics/departments` - Can redirect to `/departments`
- [ ] `/academics/faculty` - Faculty directory, profiles
- [ ] `/academics/calendar` - Academic calendar, exam schedule

### Research Section:
- [ ] `/research/centers` - Research centers and labs
- [ ] `/research/publications` - Faculty publications, journals
- [ ] `/research/opportunities` - Research opportunities for students
- [ ] `/research/funding` - Research grants, funding sources

### News Section:
- [ ] `/news/events` - Events calendar, upcoming events
- [ ] `/news/announcements` - Official announcements
- [ ] `/news/press` - Press releases, media coverage

---

## Quick Template for Creating Pages

Use this template structure for each missing page:

```tsx
import type { Metadata } from 'next';
import InnerPageLayout from '../components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Page Title | University of Wah',
  description: 'Page description here...',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://uowedupk.vercel.app/path',
  },
  alternates: {
    canonical: 'https://uowedupk.vercel.app/path',
  },
};

export default function PageName() {
  return (
    <InnerPageLayout section="section-name">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gradient-to-r from-theme-blue to-theme-orange">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Page Title
            </h1>
            <p className="text-xl">Subtitle or description</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Your content here */}
          <h2>Section Heading</h2>
          <p>Content paragraph...</p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
```

---

## Priority Order for Creation:

### HIGH PRIORITY (Do First):
1. `/admissions/deadlines` - Students need this immediately
2. `/admissions/scholarships` - Important for applicants
3. `/academics/undergraduate` - Most visited
4. `/academics/calendar` - Essential information
5. `/about/campus` - Helps prospective students

### MEDIUM PRIORITY:
6. `/about/facilities`
7. `/academics/graduate`
8. `/academics/faculty`
9. `/research/centers`
10. `/news/events`

### LOW PRIORITY (Can wait):
11. `/admissions/contact` - Can use main contact page
12. `/research/publications`
13. `/research/opportunities`
14. `/research/funding`
15. `/news/announcements`
16. `/news/press`
17. `/academics/departments` - Can just redirect to /departments

---

## SEO NOTE:

❌ **DON'T** leave these as 404 pages
✅ **DO** create placeholder pages with:
- Basic information
- "Content coming soon" message
- Links to related pages
- Contact information

Even a simple page is better than 404 for SEO!

---

## Bulk Creation Option:

If you want, I can create all these pages with placeholder content right now. They'll have:
- Proper SEO metadata
- Professional layout
- "Coming soon" or basic content
- Links to contact/homepage
- Ready to be filled with real content later

Just say "create all missing pages" and I'll do it!

---

## Alternative: Redirect Pages

For pages you don't want to create yet, you can add redirects in `next.config.ts`:

```typescript
async redirects() {
  return [
    {
      source: '/academics/departments',
      destination: '/departments',
      permanent: true,
    },
    // Add more redirects...
  ];
}
```

This is better than 404 for SEO!
