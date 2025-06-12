import img1 from "../assets/img/badge.png";
import Image from "next/image";

export default function Areas() {
  return (
    <section className="bg-primary mt-10 text-black py-16">
      <h2 className="text-center text-4xl font-bold uppercase mb-8">Greater Dallas Mobile Service</h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-white pb-6 lg:pb-0 lg:pr-8">

          <div>
            <p className="text-lg leading-relaxed">
              At Glass Replacement Pros, our experienced professionals are dedicated to
              providing top-quality auto glass repair and replacement services
              in Dallas. We use the highest-grade glass and state-of-the-art
              tools to ensure every job is completed with precision and to our
              customers' full satisfaction.
              <br /><br />
                          At Glass Replacement Pros, we take pride in delivering expert auto and residential glass services across Dallas and surrounding area.

            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left mt-auto">
            {[
              "Dallas", "Plano", "Frisco", "McKinney", "Celina", "Prosper", "The Colony", "Allen",
              "Lewisville", "Little Elm", "Coppell", "Flower Mound", "Grapevine", "South Lake", "Addison", "Farmers Branch",
              "Richardson", "Garland", "Sachse", "Wylie", "Rock Wall", "Mesquite", "Highland Park", "University Park",
              "Irving", "Duncanville", "Desoto", "Lancaster", "Carrollton", "Rowlett", "Cedar Hill", "Princeton",
            ].map((city, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="text-lg text-white">→</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
