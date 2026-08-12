import React, { useEffect } from 'react';
import { getSeoMetadata } from '../data/seoPageMetadata';

export default function SeoHeadManager({ activePage, activeCategoryId, activeSubServiceId }) {
  useEffect(() => {
    const metaData = getSeoMetadata({ activePage, activeCategoryId, activeSubServiceId });

    if (metaData) {
      const canonicalUrl = `https://www.digiworq.com${metaData.path || '/'}`;
      const combinedKeywords = [
        metaData.mainKeyword,
        ...(metaData.targetedKeywords || []),
        'Digiworq',
        'Bangalore Digital Agency',
        'Top Digital Marketing Agency in Bangalore'
      ].filter(Boolean).join(', ');

      // 1. Update Document Title
      document.title = metaData.metaTitle;

      // Helper to update or create meta tags
      const setMetaTag = (attrName, attrVal, content) => {
        let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attrName, attrVal);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      // 2. Primary Meta Tags
      setMetaTag('name', 'description', metaData.metaDescription);
      setMetaTag('name', 'keywords', combinedKeywords);
      setMetaTag('name', 'author', 'Digiworq Marketing and Technology Solutions');
      setMetaTag('name', 'publisher', 'Digiworq');
      setMetaTag('name', 'copyright', 'Digiworq');
      setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      setMetaTag('name', 'googlebot', 'index, follow');

      // 3. Update Canonical Link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;

      // 4. OpenGraph Social Meta Tags
      setMetaTag('property', 'og:site_name', 'Digiworq');
      setMetaTag('property', 'og:locale', 'en_IN');
      setMetaTag('property', 'og:type', activePage === 'blog' ? 'article' : 'website');
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:title', metaData.metaTitle);
      setMetaTag('property', 'og:description', metaData.metaDescription);
      setMetaTag('property', 'og:image', 'https://www.digiworq.com/digiworq-logo.png');
      setMetaTag('property', 'og:image:alt', metaData.mainKeyword || 'Digiworq Digital Marketing and Technology Solutions');

      // 5. Twitter Card Meta Tags
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:site', '@digiworq');
      setMetaTag('name', 'twitter:creator', '@digiworq');
      setMetaTag('name', 'twitter:url', canonicalUrl);
      setMetaTag('name', 'twitter:title', metaData.metaTitle);
      setMetaTag('name', 'twitter:description', metaData.metaDescription);
      setMetaTag('name', 'twitter:image', 'https://www.digiworq.com/digiworq-logo.png');

      // 6. Dynamic JSON-LD Schema.org Structured Data
      const baseOrganizationSchema = {
        "@type": ["ProfessionalService", "Organization", "LocalBusiness"],
        "@id": "https://www.digiworq.com/#organization",
        "name": "Digiworq Marketing and Technology Solutions",
        "alternateName": "Digiworq",
        "url": "https://www.digiworq.com",
        "logo": "https://www.digiworq.com/digiworq-logo.png",
        "image": "https://www.digiworq.com/digiworq-logo.png",
        "telephone": "+919611489001",
        "email": "info@digiworq.com",
        "priceRange": "$$",
        "currenciesAccepted": "INR, USD",
        "paymentAccepted": "Cash, Credit Card, UPI, Net Banking, Bank Wire",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4/20, 1st B Main Road, 1st N Block, Near Ganapathi Temple Extension, Rajajinagar",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560010",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9856,
          "longitude": 77.5539
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Bangalore" },
          { "@type": "State", "name": "Karnataka" },
          { "@type": "Country", "name": "India" }
        ],
        "sameAs": [
          "https://www.facebook.com/DigiworqMarketingandTechnologySolutions/",
          "https://www.instagram.com/digiworqsolutions/",
          "https://in.linkedin.com/company/digiworq",
          "https://www.youtube.com/@digiworqmarketingtechnolog5334",
          "https://wa.me/919611489001"
        ]
      };

      const websiteSchema = {
        "@type": "WebSite",
        "@id": "https://www.digiworq.com/#website",
        "url": "https://www.digiworq.com",
        "name": "Digiworq",
        "description": "Best Digital Marketing, Website Development & Creative Branding Agency in Bangalore",
        "publisher": { "@id": "https://www.digiworq.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.digiworq.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      // Breadcrumbs schema generator
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.digiworq.com"
        }
      ];

      if (activePage === 'service') {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 2,
          "name": activeCategoryId ? activeCategoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "Services",
          "item": `https://www.digiworq.com/services${activeCategoryId ? `/${activeCategoryId}` : ''}`
        });

        if (activeSubServiceId) {
          breadcrumbItems.push({
            "@type": "ListItem",
            "position": 3,
            "name": metaData.mainKeyword || activeSubServiceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            "item": canonicalUrl
          });
        }
      } else if (activePage && activePage !== 'home') {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 2,
          "name": activePage.charAt(0).toUpperCase() + activePage.slice(1),
          "item": canonicalUrl
        });
      }

      const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": breadcrumbItems
      };

      const schemaGraph = [baseOrganizationSchema, websiteSchema, breadcrumbSchema];

      // Add Service specific schema if on a service page
      if (activePage === 'service' || (metaData.path && metaData.path.startsWith('/services/'))) {
        schemaGraph.push({
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": metaData.mainKeyword || metaData.metaTitle,
          "serviceType": metaData.mainKeyword,
          "provider": { "@id": "https://www.digiworq.com/#organization" },
          "description": metaData.metaDescription,
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "Custom",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          }
        });
      }

      const fullJsonLd = {
        "@context": "https://schema.org",
        "@graph": schemaGraph
      };

      // Inject / Update JSON-LD Script in head
      let schemaScript = document.getElementById('digiworq-jsonld-schema');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'digiworq-jsonld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(fullJsonLd, null, 2);

      // 7. Synchronize Browser Address Bar URL if needed
      if (metaData.path && window.location.pathname !== metaData.path) {
        window.history.pushState({ path: metaData.path }, metaData.metaTitle, metaData.path);
      }
    }
  }, [activePage, activeCategoryId, activeSubServiceId]);

  return null;
}
