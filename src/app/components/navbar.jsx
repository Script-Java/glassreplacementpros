"use client";
import { useState } from "react";
import logo from "../assets/logo-white.jpg"; // Adjust the path as necessary
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black">
      <nav className="flex max-w-7xl mx-auto justify-between items-center p-4 relative">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="w-40" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-4">
        <li className="btn btn-ghost text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="btn btn-ghost text-white">
          <Link href="/auto">Auto</Link>
        </li>
        <li className="btn btn-ghost text-white">
          <Link href="/residential">Residential</Link>
        </li>
        <li className="btn btn-outline text-white">
          <Link href={'tel:+19729007559'}>(972) 900-7559</Link>
        </li>
        <li className="btn btn-primary">
          <Link href="/quote">Free Quote</Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button className="lg:hidden btn btn-ghost" onClick={toggleMenu}>
        <MdOutlineMenu className="text-2xl" />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute z-50 bg-black top-full left-0 w-full shadow-lg lg:hidden">
          <ul className="flex flex-col items-center justify-center p-4 gap-2">
            <li className="btn btn-ghost">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="btn btn-ghost">
              <Link href="/auto" onClick={() => setIsOpen(false)}>
                Auto
              </Link>
            </li>
            <li className="btn btn-ghost">
              <Link href="/residential" onClick={() => setIsOpen(false)}>
                Residential
              </Link>
            </li>
            <li className="btn w-36 btn-outline">
              <Link href="tel:+19729007559" onClick={() => setIsOpen(false)}>
                (972) 900-7559
              </Link>
            </li>
            <li className="btn w-36 btn-primary">
              <Link href="/quote" onClick={() => setIsOpen(false)}>
                Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </header>
  );
};

export default Navbar;
