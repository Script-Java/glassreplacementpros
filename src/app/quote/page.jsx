import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";

export default function QuotePage() {
  return (
    <div className="">
      <Navbar />

     <section className="py-20 my-20 px-6 text-center max-w-6xl mx-auto">
  <h1 className="text-5xl font-extrabold mb-6 text-primary">Free Glass Quote</h1>
  <p className="text-lg mb-4 text-neutral-content">
    Thank you for choosing Glass Replacement Pros for your auto and residential glass needs.
  </p>
  <p className="mb-10 text-base-content">
    We proudly provide fast, mobile, and affordable glass services across the Dallas-Fort Worth area. Whether it’s a cracked windshield, a shattered home window, or a custom glass installation, our certified team is ready to help.
  </p>

  <div className="bg-base-100 rounded-xl shadow-xl p-8 text-left text-[17px] space-y-6 border border-base-300">
    <p>
      With skilled technicians at <span className="font-semibold text-primary">Glass Replacement Pros</span>, you can expect top-tier workmanship, friendly service, and reliable results every time. We back all our services with a lifetime workmanship guarantee.
    </p>

    <div>
      <h2 className="text-2xl font-bold text-primary mb-2">Why Choose Glass Replacement Pros?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>We Come to You:</strong> Mobile service across DFW—no need to leave your location.</li>
        <li><strong>Top-Quality Materials:</strong> We use glass that meets or exceeds OEM standards.</li>
        <li><strong>Experienced Team:</strong> Over 20 years of hands-on glass repair and replacement expertise.</li>
        <li><strong>Customer-First Service:</strong> Clear communication, honest pricing, and satisfaction guaranteed.</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-primary mb-2">What We Offer:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Mobile Windshield Repair & Replacement</li>
        <li>Residential Glass & Window Solutions</li>
        <li>Emergency Glass Repair & Same-Day Service</li>
        <li>Custom Glass Projects for Homes & Offices</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-primary mb-2">How It Works:</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Submit Your Info:</strong> Use the quote form below to tell us about your needs.</li>
        <li><strong>Get a Quick Reply:</strong> We’ll follow up with pricing and appointment details.</li>
        <li><strong>Enjoy Stress-Free Service:</strong> We fix your glass on-site—fast and professionally.</li>
      </ol>
    </div>

    <p className="text-lg font-semibold">
      Ready to get started? Fill out the form below and let <span className="text-primary">Glass Replacement Pros</span> take care of your glass with confidence.
    </p>
  </div>
</section>

      <QuoteForm />
      <Footer />
    </div>
  );
}