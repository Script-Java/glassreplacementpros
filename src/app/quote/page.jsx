import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";
import Image from "next/image";
import img1 from "../assets/img/quote/1.jpg"; // Adjust the path as necessary

export default function QuotePage() {
  return (
    <div className="">
      <Navbar />
    <div className="relative w-full h-[400px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Static Background Image */}
      <Image
        src={img1}
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Title in the center */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl uppercase font-bold">REQUEST FREE QUOTE</h1>
      </div>
    </div>

    <section className="bg-primary text-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          PROVIDING SUPERIOR GLASS AND WINDOW SERVICE IN DFW!
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Thank you for your interest in our glass repair and replacement services.
        </p>
        <p className="text-lg md:text-xl mb-4">
          We are a fast, reliable, with the best mobile glass service provider in DFW.
        </p>
        <p className="text-lg md:text-xl">
          Our certified technicians are waiting to replace your glass. We only use
          top-quality glass, providing 100% guaranteed workmanship.
        </p>
      </div>
    </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}