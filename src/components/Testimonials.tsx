import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialsProps {
  variant?: 'default' | 'compact';
}

const Testimonials = ({ variant = 'default' }: TestimonialsProps) => {
  const testimonials = [
    {
      id: 1,
      name: "Eclaire SuperPastry",
      rating: 5,
      text: "This was my first time hiring a professional cleaner, and I had a wonderful experience! We needed a deep clean because we had family coming into town and had no extra time. The owner was very professional; he explained the entire process from start to finish and booked me over the phone. On the day of the cleaning, he even showed up with his team of cleaners and dropped off a business card. Everything was handled exactly as we wanted, and the owner even called to check on things. I've wanted to clean my stove/oven for so long, and they did a great job! I even recommended them to my sister. I will definitely book with them again in the future!",
    },
    {
      id: 2,
      name: "Rocio Mcgill",
      rating: 5,
      text: "This cleaning company exceeded my expectations. I am particular about the cleanliness and organization of my home. Remarkably, I did not need to provide any specific instructions, as the team executed the tasks flawlessly. I was thoroughly impressed.",
    },
    {
      id: 3,
      name: "June Hopson",
      rating: 5,
      text: "Best cleaning company, I ever work with when I walk through my house, I know it's going to be clean, it always looks amazing",
    },
    {
      id: 4,
      name: "Gary Kerbow",
      rating: 5,
      text: "I chose Pure Glint Clean for a deep clean of my house that had considerable dirt and dust build-up. Daniel, the owner, stood behind his iron clad guarantee completely. When I reached out with concerns, he was true to his word and personally ensured everything was corrected to my expectations. His commitment to customer satisfaction is outstanding. I am extremely pleased with the final results and would not hesitate to hire this company again!",
    },
  ];

  // For compact variant, show 3 reviews. For default, show all 4
  const displayedTestimonials = variant === 'compact' ? testimonials.slice(0, 3) : testimonials;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pureglintclean.com/#organization",
    "review": testimonials.map((testimonial) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5,
      },
      "reviewBody": testimonial.text,
    })),
  };

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Reviews
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See What Customers Are Saying About Us
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">5.0 Stars</span>
          </div>
        </div>

        <div className={`grid gap-8 ${variant === 'compact' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-2'}`}>
          {displayedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
