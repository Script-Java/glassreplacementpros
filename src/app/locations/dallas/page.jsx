import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/img/slider/1.jpg";
import TrustindexWidget from "@/app/components/reviews";
import { FaCheckCircle, FaCar, FaCarSide, FaTruck } from 'react-icons/fa';

export default function DallasPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <main>
          {/* Hero Section using Next.js Image Component */}
          <div className="hero min-h-[70vh] relative">
            <Image
              src={img1}
              alt="Dallas auto glass replacement services"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay opacity-50 bg-black"></div>
            <div className="hero-content text-center text-neutral-content relative">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl sm:text-5xl lg:text-7xl font-extrabold">
                  Expert Auto Glass Replacement in Dallas
                </h1>
                <p className="mb-5 text-lg text-gray-200">
                  Fast, reliable, and mobile auto glass services for all Dallas drivers. From windshield repairs to full replacements, we come to you.
                </p>
                <Link href="/contact" className="btn btn-primary btn-lg">
                    Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary tracking-wide uppercase">Your Local Dallas Glass Experts</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Comprehensive Auto Glass Repair & Replacement
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600">
                  If you're looking for fast and reliable **auto glass replacement in Dallas**, you've come to the right place. A damaged windshield or window compromises your safety. We provide expert **auto glass repair in Dallas** for all makes and models, ensuring your vehicle is safe and your view is clear.
                </p>
              </div>

              {/* Services Section with DaisyUI Cards */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Windshield Replacement Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCar className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Windshield Replacement & Repair</h3>
                    <p className="text-slate-600">
                      Whether it's a small chip or a large crack, we handle all **windshield replacement in Dallas**. We assess the damage to see if a cost-effective **windshield repair** is possible, saving you time and money.
                    </p>
                  </div>
                </div>

                {/* Side and Back Glass Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCarSide className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Side & Back Window Replacement</h3>
                    <p className="text-slate-600">
                      A broken car window is a security risk. We offer prompt **side window replacement** and **back glass replacement in Dallas** for driver side, passenger side, and quarter glass panels.
                    </p>
                  </div>
                </div>

                {/* Truck & Specialty Glass Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaTruck className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Truck & Specialty Vehicle Glass</h3>
                    <p className="text-slate-600">
                      We're equipped for more than just cars. We provide expert **truck windshield replacement** and repair for all sizes, from pickups to semi-trucks, to keep your commercial vehicles on the road.
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
                  The Dallas Leader in Mobile Auto Glass Service
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                  We make auto glass service easy and convenient.
                </p>
              </div>
              <div className="mt-12">
                <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Mobile Service to You</h4>
                      <p className="mt-2 text-base text-slate-600">We come to your home, office, or anywhere in Dallas, saving you a trip to the shop.</p>
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
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Quality OEM Glass</h4>
                      <p className="mt-2 text-base text-slate-600">We use Original Equipment Manufacturer (OEM) or equivalent glass for a perfect fit and finish.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Insurance Claim Experts</h4>
                      <p className="mt-2 text-base text-slate-600">We work directly with all major insurance providers to make your claim process seamless and stress-free.</p>
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
