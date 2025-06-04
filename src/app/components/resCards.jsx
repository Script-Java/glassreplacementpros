import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const slides = [
  {
    image: img1,
    title: "Residential Glass Repair & Replacement in Dallas",
    description: `High-Quality Home Window & Glass Solutions
At Glass Replacement Pros, we specialize in residential glass repair, replacement, and installation for homeowners in Dallas and surrounding areas. Whether you're looking to upgrade your windows for energy efficiency, enhance your home’s curb appeal, or repair broken glass, our team ensures precision craftsmanship and premium materials for long-lasting results. We offer a wide range of services, from replacing cracked or fogged windows to installing custom glass features that complement your home’s design. Our expert technicians work with attention to detail, ensuring each project is completed efficiently and with the highest standard of quality. With our commitment to customer satisfaction, we guarantee reliable, affordable solutions tailored to meet your specific needs.`
  },
  {
    image: img2,
    title: "Comprehensive Residential Glass Services",
    description: `We offer a comprehensive range of residential glass solutions designed to enhance the beauty, safety, and functionality of your home. Whether you're looking to upgrade your windows, replace damaged glass, or add custom features, our team is equipped to handle all your glass needs with precision and care. From home window repair and replacement for single and double-pane glass to tempered glass for sliding doors and exterior windows, we ensure that each installation is durable and stylish.

Our services also include custom shower doors for a modern bathroom transformation, glass tabletops for dining tables, coffee tables, and desktops, as well as storm window replacements and garage door glass repair. We also provide custom mirrors, cut to size, with a variety of framed options to suit your design preferences. No matter the project, we’re committed to delivering high-quality glass solutions that elevate your home’s aesthetic and improve its functionality.`
  },
  {
    image: img3,
    title: "Energy-Efficient Window Replacement",
    description: `Upgrading to energy-efficient windows is a smart investment for your home, offering a variety of benefits that enhance both comfort and savings. At Glass Replacement Pros, we provide double-pane, triple-pane, and Low-E glass options designed to improve insulation, reduce heat transfer, and make your home more energy-efficient. These windows are crafted to keep your home comfortable year-round, all while lowering your energy bills.

Energy-efficient windows not only help reduce your monthly utility costs, but they also increase the overall value of your home. They offer excellent noise reduction, creating a quieter indoor environment, and protect your furniture and flooring from UV damage that causes fading. With enhanced insulation and energy savings, upgrading to energy-efficient windows is an easy way to improve both the comfort and longevity of your home.`
  },
];

const AutoCard = () => {
  return (
    <section className="w-full text-black">
                  <div className="w-full bg-primary text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl uppercase font-bold mb-6 leading-tight">
            Professional Home Window Installation & Replacement


          </h1>
          <p className="text-xl md:text-xl uppercase font-bold mx-auto leading-relaxed">
At Glass Replacement Pros, we provide expert window installation for new home construction as well as replacement windows for existing homes. Whether you're upgrading for energy efficiency, enhanced curb appeal, or repairing damaged glass, our team ensures precision installation and high-quality materials for long-lasting results.

            <br />
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
                <p className="text-md md:text-lg text-black">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Heading */}
        <div className="flex-1">
          <div className="border-l-4 border-primary pl-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-base-content">
              HOME WINDOW & GLASS <br /> EXPERTS
            </h2>
          </div>
        </div>

        {/* Right Services List */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-base-content">
            HOME WINDOW SERVICES
          </h3>
          <ul className="space-y-4 text-base-content text-sm md:text-base">
            {[
              "Tempered glass for sliding doors and exterior windows",
              "Glass shower doors for a modern bathroom upgrade",
              "Custom-cut glass for desktops, coffee tables, and dining tables",
              "Storm window replacements and garage door glass repairs",
              "Mirrors cut to size, including framed options from our catalog",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
      
    <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Home Window Experts",
            text: (
              <>
                At <span className="font-semibold text-primary">Glass Replacement Pros</span>, we specialize in <span className="font-semibold">residential window replacement and repair</span> across <span className="font-semibold">Dallas and surrounding areas</span>. Our <span className="font-semibold">certified technicians</span> take the time to assess your home’s <span className="font-semibold">window and glass needs</span>, providing a <span className="font-semibold">free, no-obligation estimate</span> to ensure the best solution for your home.
              </>
            ),
          },
          {
            title: "Full-Service Window Installation",
            text: (
              <>
                With years of experience in <span className="font-semibold">home glass replacement</span>, we offer <span className="font-semibold">professional installation</span> for both <span className="font-semibold">new home construction</span> and <span className="font-semibold">existing window replacements</span>. Whether you're upgrading for <span className="font-semibold">energy efficiency</span> or replacing <span className="font-semibold">damaged glass</span>, our team delivers <span className="font-semibold">high-quality craftsmanship</span> with durable materials.
              </>
            ),
          },
          {
            title: "Smart Investment for Your Home",
            text: (
              <>
                Choosing <span className="font-semibold text-primary">Glass Replacement Pros</span> means investing in <span className="font-semibold">top-quality residential glass and windows</span>. We offer a <span className="font-semibold">wide range of product options</span>, including <span className="font-semibold">windows, doors, siding, and outdoor glass solutions</span>, ensuring a <span className="font-semibold">perfect fit for your home and budget</span>.
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
            <p className="text-base leading-relaxed">
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
