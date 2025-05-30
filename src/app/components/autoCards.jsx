import Image from "next/image";
import img1 from "../assets/img/auto/1.jpg";
import img2 from "../assets/img/auto/2.jpg";
import img3 from "../assets/img/auto/3.jpg";
import img4 from "../assets/img/auto/4.jpg";
import img5 from "../assets/img/auto/5.jpg";
import img6 from "../assets/img/auto/6.jpg";
import img7 from "../assets/img/auto/7.jpg";
import img8 from "../assets/img/auto/8.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const slides = [
  {
    image: img3,
    title: "Your Single Source for Glass Maintenance Services",
    description:
      "From stone chips to major cracks, our certified technicians restore clarity and structural integrity using the latest repair techniques and industry-leading materials. We get you back on the road with safety and speed.",
  },
  {
    image: img5,
    title: "Comprehensive Windshield Repair & Replacement",
    description:
      "Enhance your living space with custom-designed glass solutions for showers, mirrors, tabletops, and more. Our residential services combine elegant craftsmanship with energy-efficient materials tailored to your home.",
  },
  {
    image: img6,
    title: "Truck & Commercial Vehicle Auto Glass Services",
    description:
      "Unexpected damage? We’ve got your back. Our mobile emergency glass team reaches you quickly, delivering rapid and reliable service to secure your vehicle or home—day or night, rain or shine.",
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

   

      {/* Content Section */}

  
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
          <section className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Certified Auto Glass Technicians",
        text: (
          <>
            At <span className="font-semibold text-primary">Glass Replacement Pros</span>, our team of <span className="font-semibold">certified technicians</span> specializes in <span className="font-semibold">auto glass repair and replacement</span> for all makes and models. From <span className="font-semibold">windshield chips</span> to <span className="font-semibold">full replacements</span>, we guarantee <span className="font-semibold">fast, professional service</span> throughout <span className="font-semibold">Dallas and the surrounding areas</span>.
          </>
        ),
      },
      {
        title: "Same-Day Mobile Service",
        text: (
          <>
            Need a <span className="font-semibold">windshield replaced fast?</span> We offer <span className="font-semibold">same-day, mobile auto glass service</span> that comes to your location—whether you’re at home, work, or on the road. Our technicians use <span className="font-semibold">OEM-quality materials</span> and <span className="font-semibold">advanced tools</span> to ensure safe, long-lasting results with <span className="font-semibold">zero hassle</span>.
          </>
        ),
      },
      {
        title: "Trusted by DFW Drivers",
        text: (
          <>
            For over two decades, <span className="font-semibold text-primary">Glass Replacement Pros</span> has been the go-to source for <span className="font-semibold">auto glass repairs and replacements</span> in North Texas. From <span className="font-semibold">windshields to side and rear glass</span>, our <span className="font-semibold">honest pricing</span> and <span className="font-semibold">lifetime workmanship guarantee</span> make us the preferred choice for drivers across the region.
          </>
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
        <p className="text-base leading-relaxed text-neutral-content">
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
