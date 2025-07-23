import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/img/slider/1.jpg";
import TrustindexWidget from "@/app/components/reviews";
import { FaCheckCircle, FaCar, FaCarSide, FaTruck } from 'react-icons/fa';

export default function PlanoPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <main>
          {/* Hero Section using Next.js Image Component */}
          <div className="hero min-h-[70vh] relative">
            <Image
              src={img1}
              alt="Premier auto glass replacement in Plano"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay opacity-50 bg-black"></div>
            <div className="hero-content text-center text-neutral-content relative">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl sm:text-5xl lg:text-7xl font-extrabold">
                  Premier Auto Glass Replacement in Plano
                </h1>
                <p className="mb-5 text-lg text-gray-200">
                  Your trusted local experts for high-quality auto glass replacement and repair services throughout Plano, TX.
                </p>
                <Link href="/contact" className="btn btn-primary btn-lg">
                    Request Service Now
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary tracking-wide uppercase">Plano's Top-Rated Glass Service</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Full-Service Auto Glass Solutions
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600">
                  Need professional **auto glass replacement in Plano**? Our certified technicians provide premier service for all types of vehicle glass. We are Plano's top choice for **windshield replacement**, side window repair, and more. For minor damage, our **auto glass repair** service is a quick and effective solution.
                </p>
              </div>

              {/* Services Section with DaisyUI Cards */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Windshield Replacement Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCar className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Windshield Replacement for All Vehicles</h3>
                    <p className="text-slate-600">
                      From sedans to SUVs, we provide flawless **windshield replacement in Plano**. We ensure your vehicle's safety systems are calibrated and your new glass is perfectly installed.
                    </p>
                  </div>
                </div>

                {/* Car Door & Side Window Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCarSide className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Car Door & Side Window Repair</h3>
                    <p className="text-slate-600">
                      Don't let a shattered window ruin your day. We offer fast **car window replacement in Plano**, including **passenger side door glass repair** and driver-side service.
                    </p>
                  </div>
                </div>

                {/* Back Windshield & Truck Glass Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaTruck className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Back Windshield & Truck Glass</h3>
                    <p className="text-slate-600">
                      Our expertise extends to larger vehicles. We handle **truck back glass replacement** and other specialty repairs to keep your truck or commercial vehicle in top shape.
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
                  The Mobile Service Advantage in Plano
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                  Experience the convenience of auto glass service that comes to you.
                </p>
              </div>
              <div className="mt-12">
                <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Service at Your Location</h4>
                      <p className="mt-2 text-base text-slate-600">Whether you're at home, the office, or shopping, our mobile team will meet you anywhere in Plano.</p>
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
                      <h4 className="text-lg leading-6 font-medium text-slate-800">OEM Quality Materials</h4>
                      <p className="mt-2 text-base text-slate-600">We use Original Equipment Manufacturer (OEM) or equivalent glass for a perfect fit and finish.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Insurance Billing Handled</h4>
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
