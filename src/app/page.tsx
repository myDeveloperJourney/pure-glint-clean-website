import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />    
        <BookingForm />
        <Testimonials variant="default" />
        <Pricing />
        {/* <Process /> */}
      </main>
      <Footer />
    </div>
  );
}
