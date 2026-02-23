import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Testimonials variant="default" />
        <Pricing />
        <Process />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
