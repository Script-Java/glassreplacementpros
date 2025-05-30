import Image from "next/image";
import img1 from "../assets/img/cards/1.jpg";
import img2 from "../assets/img/cards/2.jpg";
import img3 from "../assets/img/cards/3.jpg";
import img4 from "../assets/img/cards/4.jpg";
import img5 from "../assets/img/img1.jpg";
import img6 from "../assets/img/img10.jpg";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const slides = [
  {
    image: img1,
    title: "Mobile Glass Techs – Ready to Dispatch",
    description:
      "Glass Replacement Pros brings same-day service right to your doorstep. Whether you're at home, at work, or stranded roadside, our expert mobile glass technicians are equipped with the tools and materials needed to repair or replace your glass fast. We handle everything from cracked windshields to home window damage—getting you back to safety without delay.",
  },
  {
    image: img2,
    title: "Auto Glass Experts",
    description:
      "As Dallas’ trusted auto glass professionals, we specialize in everything from windshield repair to full glass replacements for all vehicle types. Our certified technicians provide mobile service for side windows, rear glass, and quarter panels. We ensure quick, precise, and hassle-free repairs that meet OEM standards—so you’re always safe on the road.",
  },
  {
    image: img3,
    title: "Residential Glass Repair & Installation",
    description:
      "From single-pane window repairs to full home glass upgrades, Glass Replacement Pros delivers top-tier residential service. We specialize in cracked or foggy window replacements, custom mirrors, shower enclosures, sliding doors, and more. Count on our team for clean installs, energy-efficient solutions, and long-lasting results.",
  },
];


const Card = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-primary text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl uppercase font-bold mb-6 leading-tight">
            Innovative . Reliable . Honest
          </h1>
          <p className="text-2xl md:text-4xl uppercase font-bold mx-auto leading-relaxed">
            Most Affordable Prices in Dallas and Surrounding Areas!
            <br />
            <span className="font-bold">
              Call today:{" "}
              <Link className="underline" href={"tel:+19729007559"}>
                (972) 900-7559
              </Link>
            </span>
          </p>
        </div>
      </div>

      <section className="w-full bg-base-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary border-t-2 border-primary inline-block pt-4">
              Expert Auto & Residential Glass Services
            </h2>
          </div>

          <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Image
                src={img5}
                alt="Classic car glass repair"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
            </div>

            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Glass Replacement Pros
                </h3>
                <p>
                  With over 20 years of experience, we deliver top-tier auto and
                  residential glass solutions without hidden fees. Count on our
                  team for reliable service and expert workmanship in Dallas.
                </p>
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl text-primary font-bold mb-2">Upfront Pricing</h3>
                <p>
                  No surprises—just honest, clear pricing. We provide estimates
                  before work begins so you know exactly what to expect. Trusted
                  service throughout Dallas and nearby areas.
                </p>
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl text-primary font-bold mb-2">Free Estimates</h3>
                <p>
                  We make expert glass repair and replacement affordable with
                  complimentary quotes. Enjoy professional results without the
                  high cost.
                </p>
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl text-primary font-bold mb-2">
                  Certified Glass Technicians
                </h3>
                <p>
                  Our certified experts bring skill, precision, and care to
                  every job. Family-owned and customer-focused, we’re proud to
                  serve Dallas with exceptional service.
                </p>
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl text-primary font-bold mb-2">
                  Fast & Efficient Glass Services
                </h3>
                <p>
                  Need service today? Our mobile fleet is ready to dispatch with
                  same-day solutions. We get your vehicle or home back in shape
                  quickly and efficiently.
                </p>
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
                <h3 className="text-xl text-primary font-bold mb-2">
                  Fast & Efficient Glass Services
                </h3>
                <p>
                  Need service today? Our mobile fleet is ready to dispatch with
                  same-day solutions. We get your vehicle or home back in shape
                  quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="w-full max-w-7xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Image and Title Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        <h2 className="text-4xl font-extrabold text-primary border-t-2 border-primary pt-4 text-start">
          WHY CHOOSE US?
        </h2>
        <div className="relative h-[700px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={img6}
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

      {/* Services Section */}
      <div className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-20">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="w-full md:w-1/2 h-96 relative rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {slide.title}
                </h2>
                <p className="text-md md:text-lg text-white">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
