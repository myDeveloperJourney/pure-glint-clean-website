import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
            content: "Pure Glint Clean has been a game-changer for our family. Their attention to detail is incredible, and our house has never been cleaner. The team is professional, reliable, and trustworthy.",
      author: {
        name: "Sarah Johnson",
        role: "Homeowner",
        location: "North Fort Worth",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
    {
            content: "I've been using Pure Glint Clean for over a year now, and they consistently exceed my expectations. Their deep cleaning service is phenomenal - they get into every corner and leave my home sparkling.",
      author: {
        name: "Michael Chen",
        role: "Business Owner",
        location: "Keller, TX",
        imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
    {
            content: "As a busy working mom, Pure Glint Clean has given me my weekends back. Their team is efficient, friendly, and I completely trust them in my home. Worth every penny!",
      author: {
        name: "Jennifer Martinez",
        role: "Working Mom",
        location: "Southlake, TX",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
    {
            content: "The move-out cleaning service was exceptional. They made our old house look better than when we first bought it! The landlord was impressed and we got our full deposit back.",
      author: {
        name: "David Thompson",
        role: "Renter",
        location: "Fort Worth, TX",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
    {
            content: "Pure Glint Clean's team helped us prepare for our daughter's graduation party. They did an amazing job and our guests couldn't stop complimenting how beautiful our home looked.",
      author: {
        name: "Lisa Roberts",
        role: "Homeowner",
        location: "Grapevine, TX",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
    {
            content: "Their short-term rental cleaning service has been perfect for our Airbnb. Quick turnaround, consistent quality, and our guests always comment on how clean the space is.",
      author: {
        name: "Robert Kim",
        role: "Property Owner",
        location: "Colleyville, TX",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      rating: 5,
    },
  ];

  const stats = [
    { id: 1, name: "Happy Customers", value: "500+" },
    { id: 2, name: "5-Star Reviews", value: "98%" },
    { id: 3, name: "Customer Retention", value: "95%" },
    { id: 4, name: "Average Rating", value: "4.9/5" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Clients Speak For Themselves
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about Pure Glint Clean.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.name}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
        <blockquote className="text-gray-700 mb-6">
      &quot;{testimonial.content}&quot;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.author.role}</div>
                  <div className="text-xs text-gray-400">{testimonial.author.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Review */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-8 w-8 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-8">
              &quot;When it comes to residential cleaning, you need a company you can trust. Here at Pure Glint Clean, 
              we are capable of handling all types of properties from apartments to large homes and everything in-between. 
              Our customers consistently choose us because of our reliability, attention to detail, and exceptional customer service.&quot;
            </blockquote>
            <div className="text-lg font-medium text-blue-600">
              Why so many homes & businesses trust Pure Glint Clean
            </div>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            See More Reviews
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Check out our reviews on Google and see why we&apos;re Fort Worth&apos;s top-rated cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=pure+glint+clean+fort+worth+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Google Reviews
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;