"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../assets/img/slider/1.jpg";
import img2 from "../assets/img/slider/2.jpg";
import img3 from "../assets/img/slider/3.jpg";
import img4 from "../assets/img/slider/4.jpg";

import Link from "next/link";

const slides = [img1, img2, img3, img4];

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
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 max-w-7xl">
          Transparent Pricing & Trusted Glass Experts in Auto Glass and Residential
        </h2>
        <p className="text-white text-lg md:text-xl my-4 max-w-7xl">
When it comes to auto glass repair and replacement, trust and transparency are essential. With a commitment to transparent pricing and trusted glass experts, customers can feel confident knowing they are getting high-quality service without hidden fees or unexpected costs. Whether it's a minor chip or a full windshield replacement, skilled professionals ensure precision, durability, and safety. Backed by years of experience and the latest technology, these experts provide reliable solutions tailored to each vehicle’s needs. Get the clarity and protection your car deserves with a team dedicated to excellence and honest service.

        </p>
        <Link className="btn btn-primary hover:text-primary hover:bg-black p-6 text-xl mt-10" href={'/quote'}>GET YOUR ONLINE QUOTE TODAY</Link>
      </div>
    </div>
  );
};

export default Slider;
