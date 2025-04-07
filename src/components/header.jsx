import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // This hook gives you access to the current route

  return (
    <header>
      {/* Top Header (Logo and Title) */}
      <div className="flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-10 pb-10 bg-lightPink border-b-4 border-red">
        {/* Logo (Fixed size, no resize) */}
        <div className="flex-none">
          <img
            src="/WiSELogo.png" // Replace with the actual path to your logo
            alt="WiSE Logo"
            className="h-24"
          />
        </div>

        {/* Title (Centered) */}
        <div
          className="flex-grow text-center font-semibold text-red text-5xl"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Women in Science and Engineering
        </div>

        {/* Contact Button (Top right) */}
        <div className="flex-none">
          <a
            href="/contact" // Replace with the correct URL for your contact page
            className="text-black px-4 py-2 inline-block pb-6 hover:text-red"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Navigation Bar (Fixed at the top, under the header) */}
      <nav className="px-2 py-2 mt-10 w-full fixed top-16 left-0 z-10">
        <div className="flex justify-center space-x-6">
          <Link
            to="/"
            className={`text-lg ${
              location.pathname === "/" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Home
          </Link>
          <Link
            to="/mission"
            className={`text-lg ${
              location.pathname === "/mission" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            About/Mission
          </Link>
          <Link
            to="/eboard"
            className={`text-lg ${
              location.pathname === "/eboard" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Meet the Team
          </Link>
          <Link
            to="/events"
            className={`text-lg ${
              location.pathname === "/events" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Events
          </Link>
          <Link
            to="/resources"
            className={`text-lg ${
              location.pathname === "/resources" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Resources
          </Link>
          <Link
            to="/news"
            className={`text-lg ${
              location.pathname === "/news" ? "text-red" : "text-black"
            } hover:text-red active:text-red transition-colors duration-300`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            News
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
