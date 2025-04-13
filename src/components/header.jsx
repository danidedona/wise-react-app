import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mission", label: "About/Mission" },
    { path: "/eboard", label: "Meet the Team" },
    { path: "/events", label: "Events" },
    { path: "/newsletter", label: "Newsletter" },
  ];

  return (
    <header className="bg-lightPink">
      {/* Top Header */}
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:pt-4 md:pb-0 fixed top-0 left-0 right-0 z-20 bg-lightPink">
        {/* Logo (Left) */}
        <div className="flex justify-start basis-1/4">
          <img
            src="/WiSELogo.png"
            alt="WiSE Logo"
            className="h-8 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Title (Center) */}
        <div className="flex justify-center basis-1/2 px-2 text-center">
          <h1
            className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-semibold text-red whitespace-nowrap"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Women in Science and Engineering
          </h1>
        </div>

        {/* Contact + Hamburger (Right) */}
        <div className="flex justify-end items-center gap-4 basis-1/4">
          <a
            href="/contact"
            className="hidden sm:inline-block text-sm sm:text-base text-black px-2 py-2 hover:text-red transition"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Contact
          </a>

          {/* Hamburger icon (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden text-black bg-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex w-full fixed top-[85px] z-10 bg-lightPink border-b-4 border-red shadow-sm justify-center space-x-6 px-4 py-2">
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-base sm:text-lg ${
              location.pathname === item.path ? "text-red" : "text-black"
            } hover:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Dropdown Menu - Mobile */}
      {menuOpen && (
        <div className="md:hidden fixed top-[60px] w-full bg-lightPink border-b border-red z-10 shadow-md px-4 py-4 space-y-3 pt-6">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base ${
                location.pathname === item.path ? "text-red" : "text-black"
              } hover:text-red transition-colors duration-200`}
              style={{ fontFamily: "'Lora', serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
