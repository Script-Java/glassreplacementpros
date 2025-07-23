import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/img/slider/1.jpg";
import TrustindexWidget from "@/app/components/reviews";
import { FaCheckCircle, FaCar, FaCarSide, FaTruck } from 'react-icons/fa';

export default function FriscoPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <main>
          {/* Hero Section using Next.js Image Component */}
          <div className="hero min-h-[70vh] relative">
            <Image
              src={img1}
              alt="Mobile windshield replacement in Frisco"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay opacity-50 bg-black"></div>
            <div className="hero-content text-center text-neutral-content relative">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl sm:text-5xl lg:text-7xl font-extrabold">
                  Mobile Windshield Replacement in Frisco, TX
                </h1>
                <p className="mb-5 text-lg text-gray-200">
                  Dealing with a cracked windshield? We offer professional mobile service that comes directly to you anywhere in Frisco.
                </p>
                <Link href="/contact" className="btn btn-primary btn-lg">
                    Schedule Your Service
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary tracking-wide uppercase">Your Frisco Auto Glass Specialists</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Convenient & Reliable Auto Glass Services
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600">
                  For top-quality **windshield replacement in Frisco**, our mobile service offers unmatched convenience. Whether you're at home or work, our team provides expert **auto glass replacement** to get you back on the road safely. For smaller cracks, ask about our efficient **auto glass repair in Frisco**.
                </p>
              </div>

              {/* Services Section with DaisyUI Cards */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Windshield Replacement Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCar className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Fast Windshield Replacement</h3>
                    <p className="text-slate-600">
                      Our primary service is fast and reliable **windshield replacement in Frisco**. We use high-quality glass and adhesives to ensure your new windshield is as safe as the original.
                    </p>
                  </div>
                </div>

                {/* Side and Back Glass Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaCarSide className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Door, Vent & Quarter Glass</h3>
                    <p className="text-slate-600">
                      We handle all types of **car window repair in Frisco**. This includes **side window repair**, vent glass, and quarter glass replacement to secure your vehicle and protect it from the elements.
                    </p>
                  </div>
                </div>

                {/* Truck & Specialty Glass Card */}
                <div className="card bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body items-center text-center">
                    <FaTruck className="text-primary text-5xl mb-4" />
                    <h3 className="card-title text-2xl font-bold text-slate-900">Back Glass & Truck Glass</h3>
                    <p className="text-slate-600">
                      Need a **back windshield repair** or new glass for your truck? Our technicians are skilled in **truck glass repair in Frisco**, ensuring a perfect fit for any vehicle, large or small.
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
                  The Preferred Choice for Auto Glass in Frisco
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                  We are dedicated to providing Frisco residents with superior service and quality.
                </p>
              </div>
              <div className="mt-12">
                <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">We Come to You in Frisco</h4>
                      <p className="mt-2 text-base text-slate-600">Our mobile service covers the entire Frisco area, providing repairs at your location for ultimate convenience.</p>
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
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Premium Quality Glass</h4>
                      <p className="mt-2 text-base text-slate-600">We use Original Equipment Manufacturer (OEM) or equivalent glass for a perfect fit and finish.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-success mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-slate-800">Insurance Accepted</h4>
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
