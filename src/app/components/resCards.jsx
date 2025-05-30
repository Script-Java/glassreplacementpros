import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";

import Link from "next/link";

const slides = [
  {
    image: img2,
    title: "Glass Shower Doors: Long-Lasting Beauty and Durability",
    description:
      "Upgrade your bathroom with sleek, frameless glass shower doors that offer modern aesthetics and long-term durability. Our high-quality glass and expert installation ensure a watertight seal and stunning finish for years to come.",
  },
  {
    image: img3,
    title: "Energy-Efficient Window Replacements",
    description:
      "Reduce energy costs and enhance indoor comfort with our insulated window glass replacements. Designed to block heat in summer and retain warmth in winter, these windows combine performance with beautiful clarity.",
  },
  {
    image: img1,
    title: "Custom Glass Backsplashes & Cabinet Glass",
    description:
      "Bring a unique touch to your kitchen or bath with custom-cut glass backsplashes and cabinet inserts. Easy to clean and visually striking, our designs are tailored to elevate your space with a modern, polished look.",
  },
];

const AutoCard = () => {
  return (
    <section className="w-full">
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
