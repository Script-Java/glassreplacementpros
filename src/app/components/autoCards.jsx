import Image from "next/image";
import img1 from "../assets/img/auto/1.jpg";
import img2 from "../assets/img/auto/2.jpg";
import img3 from "../assets/img/auto/3.jpg";
import img4 from "../assets/img/auto/4.jpg";
import img5 from "../assets/img/auto/5.jpg";
import img6 from "../assets/img/auto/6.jpg";
import img7 from "../assets/img/auto/7.jpg";
import img8 from "../assets/img/auto/8.jpg";
import img9 from "../assets/img/auto/9.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const slides = [
  {
    image: img3,
    title: "Same-Day Windshield Replacement – Get Back on the Road Fast",
    description: `A cracked or shattered windshield is not just an inconvenience—it is a safety hazard. At Glass Replacement Pros, we offer same-day windshield replacement services to ensure you drive safely.

Why Choose Our Windshield Replacement Service?
High-quality OEM and aftermarket windshields
Fast, professional installation by certified technicians
Affordable pricing with free estimates
Windshield recalibration for ADAS-equipped vehicles
`
  },
  {
    image: img5,
    title: "Side Window Replacement – Quick & Secure Repairs",
    description: `A broken side window can leave your vehicle vulnerable to weather and theft. Our side window replacement service ensures a fast, secure fix with high-quality glass and expert installation.

Our Side Window Services Include:
Complete replacement for shattered or damaged side windows
Precision installation using manufacturer-approved glass
Quick turnaround to restore your vehicle’s security
Mobile service available for added convenience`
  },
  {
    image: img6,
    title: "Rear Window Replacement – Restoring Visibility & Safety",
    description: `A damaged rear window can compromise visibility and weaken your car’s structural integrity. We provide professional rear window replacement with durable glass and expert craftsmanship.

Why Choose Our Rear Window Replacement?
Factory-grade glass to match your vehicle’s specifications
Expert installation to restore safety and function
Defrost and heating elements reconnected for optimal performance
Hassle-free service with mobile and in-shop options`
  },
];

const AutoCard = () => {
  return (
    <section className="w-full">
            <div className="w-full bg-primary text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl uppercase font-bold mb-6 leading-tight">
            Auto Glass – Affordable & Premium Options for Your Vehicle

          </h1>
          <p className="text-xl md:text-xl uppercase font-bold mx-auto leading-relaxed">
At Glass Replacement Pros, we provide affordable aftermarket and premium auto glass for cars, trucks, and SUVs in Dallas and surrounding areas. Whether you need a windshield replacement, side window repair, or back glass replacement, we have high-quality options to fit your budget.            <br />
            <br />
            <span className="font-bold text-3xl">
              Call us today at{" "}
              <Link className="underline" href={"tel:+19729007559"}>
                (972) 900-7559
              </Link>
            </span>
          </p>
        </div>
      </div>
    <div className="w-full max-w-7xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Image and Title Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        <h2 className="text-4xl font-extrabold text-primary border-t-2 border-primary pt-4 text-start">
          Your Trusted Auto Glass Pros
        </h2>
        <div className="relative h-[700px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={img9}
            alt="Green classic car glass repair"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* List Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-base-content space-y-5">
        <ul className="space-y-4 text-lg">
          {[
            "Free Estimates – Get a free auto glass repair or residential glass replacement estimate with no obligation.",
            "Licensed & Insured – We are a fully licensed and insured glass company, ensuring peace of mind.",
            "Background-Checked Technicians – Our certified glass specialists are vetted for safety and reliability.",
            "Certified & Trained Experts – Skilled auto glass specialists and residential glass technicians with professional certifications.",
            "Senior Discounts Available – Affordable pricing with special discounts for seniors.",
            "No Hidden Fees – Upfront pricing with no surprises or extra charges.",
            "Free Mobile Service – Our mobile auto glass repair and windshield replacement service come to you anywhere in Dallas and surrounding areas."
          ].map((text, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-[2px] w-5 h-5 shrink-0" />
              <span>{text}</span>
            </li>

          ))}
        </ul>
      </div>
    </div>

   

      {/* Content Section */}

  
<div className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto space-y-24">
    {slides.map((slide, i) => (
      <div
        key={i}
        className={`flex flex-col-reverse md:flex-row ${
          i % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-center gap-10`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {slide.title}
          </h2>
          <div className="text-base-content text-md md:text-lg whitespace-pre-line leading-relaxed">
            {slide.description.split('\n').map((line, index) => (
              <p key={index} className="mb-2">
                {line.startsWith('-') || line.startsWith('•') || line.includes(':')
                  ? <span className="pl-2">• {line.trim()}</span>
                  : line}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-96 relative rounded-2xl shadow-xl overflow-hidden">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    ))}
  </div>
</div>
          <section className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Mobile Auto Glass Service",
        text: (
          <>
            <span className="">At Need auto glass repair but can't make it to a shop? Glass Replacement Pros brings the service to you. Whether you're at home, work, or dealing with unexpected damage on the road, our mobile glass experts arrive on time, ready to restore your vehicle’s safety.

We specialize in windshield repairs and replacements, car window and side glass replacement, and emergency auto glass services across Dallas and surrounding areas. With our fast and hassle-free mobile service, you can get your vehicle’s glass repaired without disrupting your day.

Schedule your mobile auto glass service today and let us come to you.</span>.
          </>
        ),
      },
      {
        title: "Free Auto Glass Estimate",
        text: (
          <>
Looking for an affordable auto glass repair or replacement? At Glass Replacement Pros, we provide free, no-obligation quotes so you know exactly what to expect before we begin. Whether you need a windshield replacement, car window repair, or mobile auto glass service, our team ensures upfront pricing with no hidden fees.

Contact us today to get your free auto glass estimate and schedule your service with Dallas’s trusted glass experts.          </>
        ),
      },
      {
        title: "DFW Auto Glass Pros",
        text: (
          <>
With two decades of experience in auto, truck, and SUV glass repair and replacement, Glass Replacement Pros is the name you can trust in Dallas and surrounding areas. We believe in honest pricing, so you’ll never pay more than expected—no hidden fees, no surprises.

Our reputation is built on quality workmanship and reliable service, making us the go-to choice for auto and residential glass replacement in the Greater Dallas Metroplex.

Call today for expert glass repair backed by 20 years of experience!          </>
        ),
      },
    ].map((card, idx) => (
      <div
        key={idx}
        className="border border-primary p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="w-10 h-1 bg-primary mb-4"></div>
        <h3 className="text-2xl font-extrabold mb-4 text-primary">
          {card.title}
        </h3>
        <p className="text-base font-semibold leading-relaxed text-black">
          {card.text}
        </p>
      </div>
    ))}
  </div>
</section>

    </section>
  );
};

export default AutoCard;
