"use client";
import { useState, useEffect } from "react";
import logo from "../assets/logo-white.jpg";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTinyScreen, setIsTinyScreen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setIsMobileLocationsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTinyScreen(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const locations = ["Dallas", "Frisco", "McKinney", "Plano"];
  
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Auto Glass", href: "/auto" },
    { label: "Residential Glass", href: "/residential" },
    { label: "Blogs", href: "/blog" },
  ];

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
              <Link href="tel:9729007559" className="text-white hover:text-black">(972) 900-7559</Link>
            </li>
            <li className="btn btn-primary hover:bg-black hover:text-primary transition-colors">
              <Link href="/quote">CONTACT US</Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button className="btn btn-ghost hover:bg-primary hover:text-black z-50" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
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
        className={`fixed top-0 right-0 h-full w-96 bg-gray-700 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 pt-24 gap-2 text-white">
          {mainLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} onClick={toggleMenu} className="block p-4 rounded-md hover:bg-primary hover:text-white transition-colors">
                {label}
              </Link>
            </li>
          ))}
          
          <li>
            <button
              className="w-full flex justify-between items-center text-left p-4 rounded-md hover:bg-primary hover:text-white transition-colors"
              onClick={() => setIsMobileLocationsOpen((prev) => !prev)}
            >
              <span>Locations</span>
              {isMobileLocationsOpen ? <MdKeyboardArrowUp className="text-2xl" /> : <MdKeyboardArrowDown className="text-2xl" />}
            </button>
            {isMobileLocationsOpen && (
              <ul className="pt-2 flex flex-col">
                {locations.map((city) => (
                  <li key={city}>
                    <Link href={`/locations/${city.toLowerCase()}`} onClick={toggleMenu} className="block pl-8 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/quote" onClick={toggleMenu} className="block p-4 rounded-md hover:bg-primary hover:text-white transition-colors">
              CONTACT US
            </Link>
          </li>
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
