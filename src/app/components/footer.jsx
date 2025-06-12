"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white text-sm bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <FaPhone className="text-white" />
          <Link href="tel:9729007559">(972) 900-7559</Link>
        </div>
        <div className="flex items-center gap-2">
          <IoIosMail className="text-white" />
          <Link href="mailto:info@glassreplacementpros.com">
            info@glassreplacementpros.com
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationArrow className="text-white" />
          <span>Dallas, Texas</span>
        </div>
      </div>

      <div className="bg-[#1f1f1f] flex flex-col justify-center items-center py-4">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <Link href="/" className="text-primary font-medium">WELCOME</Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/auto">AUTO GLASS</Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/residential">RESIDENTIAL GLASS</Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link href="/quote">REQUEST FREE QUOTE</Link>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 text-xs">
        &copy; {currentYear}, GLASS REPLACEMENT PROS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
