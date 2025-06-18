"use client";
import { useState, useEffect } from "react";
import logo from "../assets/logo-white.jpg";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTinyScreen, setIsTinyScreen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsTinyScreen(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black shadow-md top-0 z-50 w-full relative">
      <div className="flex max-w-7xl mx-auto justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Right Side Buttons + Hamburger */}
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex items-center gap-4">
            <li className="btn btn-outline text-white hover:text-black hover:bg-white transition-colors">
              <Link href="tel:9729007559" className="text-white">(972) 900-7559</Link>
            </li>
            <li className="btn btn-primary hover:bg-black hover:text-primary transition-colors">
              <Link href="/quote">CONTACT US</Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button className="btn btn-ghost hover:bg-primary hover:text-black z-20" onClick={toggleMenu}>
            {isOpen ? (
              <MdClose className="text-3xl text-white" />
            ) : (
              <MdOutlineMenu className="text-3xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Buttons Under Logo/Hamburger */}
      {isTinyScreen && (
        <div className="flex flex-col items-center gap-4 pb-4 px-4 lg:hidden">
          <Link href="tel:9729007559" className="btn btn-outline w-full text-white hover:text-primary hover:bg-white">
            (972) 900-7559
          </Link>
          <Link href="/quote" className="btn btn-primary w-full">
            CONTACT US
          </Link>
        </div>
      )}

      {/* Sidebar Menu - Slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-700 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <button className="text-2xl btn btn-ghost text-white hover:bg-primary hover:text-black" onClick={toggleMenu}>
            <MdClose />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-4 text-white">
          {[ 
            { label: "Home", href: "/" },
            { label: "Auto Glass", href: "/auto" },
            { label: "Residential Glass", href: "/residential" },
            { label: "Blogs", href: "/blog" },
            { label: "Online Quote", href: "/quote" },
          ].map(({ label, href }) => (
            <li key={label} className="btn btn-ghost text-left hover:bg-primary hover:text-white transition-colors">
              <Link href={href} onClick={toggleMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 opacity-20 bg-black z-30" onClick={toggleMenu} />
      )}
    </nav>
  );
};

export default Navbar;
