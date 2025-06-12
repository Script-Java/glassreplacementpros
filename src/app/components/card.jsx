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
              <Link className="text-gray-700" href={"tel:+19729007559"}>
                (972) 900-7559
              </Link>
            </span>
          </p>
        </div>
      </div>

<section className="w-full bg-base-100 py-10 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary border-b-2 border-black inline-block pb-4">
        Expert Auto & Residential Glass Services
      </h2>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 items-stretch">
      {/* Left Image */}
      <div className="w-full lg:w-5/12 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={img5}
          alt="Classic car glass repair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Cards */}
      <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Glass Replacement Pros",
            text: "At Glass Replacement Pros, we provide affordable, transparent pricing – you’ll never pay more than expected. With 20 years of experience in auto glass repair, windshield replacement, and residential glass services, we’ve built a trusted reputation for delivering top-quality glass solutions with no hidden fees. Whether you need a car window repair, a home window replacement, or custom glass installation, we are the go-to glass specialists in Dallas."
          },
          {
            title: "Upfront Pricing",
            text: "At Glass Replacement Pros, we believe in honest, upfront pricing – you’ll always see the total cost before we begin work. Whether you need auto glass repair, windshield replacement, or residential window glass repair, we provide transparent pricing with no surprises. With our expert knowledge and exceptional customer service, we’re proud to be the top choice for glass replacement in Dallas and surrounding areas."
          },
          {
            title: "Free Estimates",
            text: "At Glass Replacement Pros, we make auto and residential glass repair quick, efficient, and affordable. Get a free estimate upfront and complete your project without breaking the bank. With a trusted reputation for delivering the best auto glass repair and residential window replacement in the Greater Dallas area, we ensure high-quality service at competitive prices."
          },
          {
            title: "Certified Technicians",
            text: "At Glass Replacement Pros, we are a family-owned and operated company committed to providing top-quality auto and residential glass services. Our certified glass technicians are highly trained to deliver expert craftsmanship at affordable prices. With a focus on exceptional customer service, we take pride in being the go-to glass repair and replacement specialists in Dallas and beyond."
          },
          {
            title: "Fast & Efficient Service",
            text: "At Glass Replacement Pros, we provide fast, reliable, and top-rated glass services for your vehicle or home. Our expert technicians are dispatched on time, every time, ensuring prompt and professional service at your chosen date and time. Whether you need mobile auto glass repair, windshield replacement, or home window repair, we proudly serve Dallas and surrounding areas with guaranteed efficiency."
          },
          {
            title: "Lifetime Workmanship Guarantee",
            text: "We stand behind our work with a lifetime guarantee. Your safety, satisfaction, and peace of mind come first. Our commitment doesn't end after the job is done — if anything goes wrong due to workmanship, we’ll fix it at no extra cost. Whether it’s a windshield replacement or a residential window install, our guarantee ensures lasting results you can count on. With Glass Replacement Pros, you get more than a service."
          }
        ].map((card, index) => (
          <div key={index} className="bg-base-100 border border-base-300 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-primary mb-2">{card.title}</h3>
            <p className="text-base-content text-sm leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

    </div>
          <div className="flex items-center justify-center mt-20">
        <Link href={'/quote'} className="btn btn-primary text-xl p-4 uppercase hover:bg-black hover:text-primary">Get in Touch</Link>
        </div>
  </div>
</section>

<div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">
  {/* Image and Title Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-start space-y-6">
    <h2 className="text-4xl font-extrabold text-primary text-start">
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
  <div className="w-full md:w-1/2 flex flex-col justify-start pt-[76px] text-base-content space-y-5">
    <ul className="space-y-4 text-lg">
      {[
        "Free Estimates – Get a free auto glass repair or residential glass replacement estimate with no obligation.",
        "Licensed & Insured – We are a fully licensed and insured glass company, ensuring peace of mind.",
        "Background-Checked Technicians – Our certified glass specialists are vetted for safety and reliability.",
        "Certified & Trained Experts – Skilled auto glass specialists and residential glass technicians with professional certifications.",
        "Senior Discounts Available – Affordable pricing with special discounts for seniors.",
        "No Hidden Fees – Upfront pricing with no surprises or extra charges.",
        "Free Mobile Service – Our mobile auto glass repair and windshield replacement service come to you anywhere in Dallas and surrounding areas.",
        "Lifetime Warranty – We stand behind our work with a lifetime warranty on workmanship and materials.",
        "Fast Turnaround – Same-day or next-day service available to minimize your wait time.",
        "Locally Owned & Operated – Proudly serving the Dallas community with personalized, hometown service."
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
      <div className="w-full bg-base-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid ">
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
                <p className="text-md md:text-lg text-black">
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
