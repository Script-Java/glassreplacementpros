"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../assets/img/slider/1.jpg";

import Link from "next/link";

const slides = [img1];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with fade */}
      {slides.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Static Text Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Transparent Pricing & Trusted Glass Experts
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
          When it comes to auto glass repair and replacement, trust and transparency are essential. With a commitment to transparent pricing and trusted glass experts, customers can feel confident knowing they are getting high-quality service without hidden fees or unexpected costs.
        </p>
        <Link className="btn btn-primary hover:text-primary hover:bg-black p-6 text-xl" href={'/quote'}>GET A FREE ESTIMATE</Link>
      </div>
    </div>
  );
};

export default Slider;
