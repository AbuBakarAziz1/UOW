import React from 'react';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://uowedupk.site/#organization",
    "name": "University of Wah",
    "alternateName": ["UOW", "UW", "University of Wah Pakistan"],
    "url": "https://uowedupk.site",
    "logo": "https://uowedupk.site/theme/images/logo.png",
    "description": "Leading public sector university in Wah Cantt, Taxila (near Rawalpindi & Islamabad) offering undergraduate and postgraduate programs in Computer Science, Engineering, Basic Sciences, Management, and Social Sciences.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main G.T Road",
      "addressLocality": "Wah Cantt",
      "addressRegion": "Punjab",
      "postalCode": "47040",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-51-9314892",
      "contactType": "Admissions",
      "email": "info@uow.edu.pk",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.facebook.com/uowofficial",
      "https://twitter.com/uowofficial",
      "https://www.linkedin.com/school/university-of-wah"
    ],
    "foundingDate": "2009",
    "areaServed": [
      {
        "@type": "City",
        "name": "Wah Cantt"
      },
      {
        "@type": "City",
        "name": "Taxila"
      },
      {
        "@type": "City",
        "name": "Rawalpindi"
      },
      {
        "@type": "City",
        "name": "Islamabad"
      },
      {
        "@type": "Country",
        "name": "Pakistan"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://uowedupk.site/#website",
    "url": "https://uowedupk.site",
    "name": "University of Wah",
    "description": "Official website of University of Wah",
    "publisher": {
      "@id": "https://uowedupk.site/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://uowedupk.site/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
