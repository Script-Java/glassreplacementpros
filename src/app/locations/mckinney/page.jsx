import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/img/slider/1.jpg";
import TrustindexWidget from "@/app/components/reviews";
import { FaCheckCircle, FaCar, FaCarSide, FaTruck } from 'react-icons/fa';

export default function McKinneyPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <main>
          {/* Hero Section using Next.js Image Component */}
          <div className="hero min-h-[70vh] relative">
            <Image
              src={img1}
              alt="Local auto glass repair in McKinney"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay opacity-50 bg-black"></div>
            <div className="hero-content text-center text-neutral-content relative">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl sm:text-5xl lg:text-7xl font-extrabold">
                  Your Local Choice for Auto Glass Repair in McKinney
                </h1>
                <p className="mb-5 text-lg text-gray-200">
                  From small chips to major cracks, we provide fast, affordable, and reliable auto glass repair services across McKinney, TX.
                </p>
                <Link href="/contact" className="btn btn-primary btn-lg">
                    Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary tracking-wide uppercase">McKinney's Trusted Glass Repair Team</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Specializing in Windshield Repair & Replacement
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600">
                  For fast and affordable **auto glass repair in McKinney**, trust our local experts. We can fix chips and cracks quickly, often saving you the cost of a full replacement. We also provide complete **auto glass replacement in McKinney**, from **windshield replacement** to side and back glass, all with our quality guarantee.
                </p>
              </div>

              {/* Services Section with DaisyUI Cards */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Windshield Repair Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCar className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Windshield Chip & Crack Repair</h3>
                    <p className="text-slate-600">
                      Our specialty is **windshield repair in McKinney**. Fixing small chips early can prevent a full replacement, maintaining your vehicle's factory seal and saving you money.
                    </p>
                  </div>
                </div>

                {/* Full Glass Replacement Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCarSide className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Full Glass Replacement</h3>
                    <p className="text-slate-600">
                      When a repair isn't enough, we offer expert **car window replacement in McKinney**. This includes side windows, back glass, and full **windshield replacement**.
                    </p>
                  </div>
                </div>

                {/* Mobile Service Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaTruck className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Mobile Service in McKinney</h3>
                    <p className="text-slate-600">
                      Can't come to us? Our mobile team provides convenient **auto glass repair** and **truck windshield replacement** anywhere you are in McKinney.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-slate-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Why McKinney Drivers Choose Us
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                  Our commitment to quality and convenience sets us apart.
                </p>
              </div>
              <div className="mt-12">
                <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Repair-First Philosophy</h4>
                      <p className="mt-2 text-base text-slate-600">We always try to repair your existing glass first, providing an honest assessment to save you money.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Certified Technicians</h4>
                      <p className="mt-2 text-base text-slate-600">Our team is highly trained and certified, ensuring a safe and proper installation every time.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Lifetime Warranty</h4>
                      <p className="mt-2 text-base text-slate-600">We stand by our work with a lifetime warranty on all our repairs and replacements for your peace of mind.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Residential Glass Repair</h4>
                      <p className="mt-2 text-base text-slate-600">From accidental breaks to weather damage, we provide fast and reliable residential glass repair to secure your home and restore your peace of mind quickly.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </main>
      </div>
      <TrustindexWidget />
      <Footer />
    </>
  );
}
