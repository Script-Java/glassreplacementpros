'use client';

import Image from 'next/image';
import img1 from '../assets/img/res/slider/1.jpg';

export default function ResSlider() {
  return (
    <div className="relative w-full h-[400px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Static Background Image */}
      <Image
        src={img1}
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Title in the center */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl uppercase font-bold">Residential Glass Repair & Replacement in Dallas</h1>
      </div>
    </div>
  );
}
