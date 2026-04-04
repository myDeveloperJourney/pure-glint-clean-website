export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pureglintclean.com/#organization",
    "name": "Pure Glint Clean",
    "image": "https://pureglintclean.com/team-professional.jpg",
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
      "https://www.facebook.com/people/Pure-Glint-Clean/61581037222808",
      "https://www.instagram.com/pureglintclean",
      "https://maps.app.goo.gl/y8SzuMuhrPcmL1xa7"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": 4
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Eclaire SuperPastry" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "This was my first time hiring a professional cleaner, and I had a wonderful experience! We needed a deep clean because we had family coming into town and had no extra time. The owner was very professional; he explained the entire process from start to finish and booked me over the phone. On the day of the cleaning, he even showed up with his team of cleaners and dropped off a business card. Everything was handled exactly as we wanted, and the owner even called to check on things. I've wanted to clean my stove/oven for so long, and they did a great job! I even recommended them to my sister. I will definitely book with them again in the future!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rocio Mcgill" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "This cleaning company exceeded my expectations. I am particular about the cleanliness and organization of my home. Remarkably, I did not need to provide any specific instructions, as the team executed the tasks flawlessly. I was thoroughly impressed."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "June Hopson" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "Best cleaning company, I ever work with when I walk through my house, I know it's going to be clean, it always looks amazing"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Gary Kerbow" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "I chose Pure Glint Clean for a deep clean of my house that had considerable dirt and dust build-up. Daniel, the owner, stood behind his iron clad guarantee completely. When I reached out with concerns, he was true to his word and personally ensured everything was corrected to my expectations. His commitment to customer satisfaction is outstanding. I am extremely pleased with the final results and would not hesitate to hire this company again!"
      }
    ]
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
        "name": "Work with Us",
        "item": "https://pureglintclean.com/work-with-us"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
