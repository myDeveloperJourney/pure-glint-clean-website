import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function GetQuote() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <BookingForm redirectOnSuccess="/success" />
      </main>
      <Footer />
    </div>
  );
}
