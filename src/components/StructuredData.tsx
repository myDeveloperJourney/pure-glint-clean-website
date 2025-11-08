import Script from 'next/script'

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pureglintclean.com/#organization",
    "name": "Pure Glint Clean",
    "image": "https://pureglintclean.com/cleaning-crew-two.jpg",
    "logo": "https://pureglintclean.com/pure_glint.svg",
    "url": "https://pureglintclean.com",
    "telephone": "+18174057858",
    "priceRange": "$$",
    "email": "contact@pureglintclean.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Fort Worth",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8207,
      "longitude": -97.3621
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.8207,
        "longitude": -97.3621
      },
      "geoRadius": "25000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/pureglintclean",
      "https://www.instagram.com/pureglintclean"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Cleaning Service",
    "provider": {
      "@id": "https://pureglintclean.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "North Fort Worth",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Cleaning Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Standard Recurring Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Weekly House Cleaning",
                "description": "Complete dusting, sweeping, mopping, vacuuming, full bathroom and kitchen cleaning"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Deep Cleaning Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Deep House Cleaning",
                "description": "Comprehensive deep cleaning including tile/grout scrubbing, window cleaning, baseboard cleaning, inside appliance cleaning"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Move In/Out Cleaning",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Move In/Out Cleaning Service",
                "description": "Thorough cleaning for move-ins or move-outs including appliance cleaning, basement and garage sweeping, cabinet and drawer cleaning"
              }
            }
          ]
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pureglintclean.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://pureglintclean.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Booking",
        "item": "https://pureglintclean.com/booking"
      }
    ]
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
