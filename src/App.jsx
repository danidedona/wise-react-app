import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Mission from "./pages/mission";
import EBoard from "./pages/eboard";
import Events from "./pages/events/events";
import SpringConference from "./pages/springConference";
import Countdown from "./components/countdown";
import PastEvents from "./pages/events/pastEvents";
import SingleEvent from "./pages/events/singleEvent";
import UpcomingEvents from "./pages/events/upcomingEvents";
import Newsletter from "./pages/newsletter";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Show popup on home page
  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        setShowPopup(true);
        setShowOverlay(true);
      }, 2000);
    }
  }, [location.pathname]);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dismissPopup = () => {
    setShowPopup(false);
    setShowOverlay(false);
  };

  const shouldShowBanner =
    location.pathname !== "/spring-conference-2025" && !isMobile;

  return (
    <div
      className="bg-white min-h-screen text-black"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <Header />
      <main className="mt-32">
        {/* Overlay */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        )}

        {/* Popup */}
        {showPopup && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
            onClick={dismissPopup}
          >
            <div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded-lg z-50 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={dismissPopup}
                className="absolute top-2 right-2 text-xl text-black hover:text-red bg-white"
              >
                x
              </button>

              <p className="font-bold text-lg mb-6 text-center">
                Spring Conference Event Countdown!
              </p>
              <Countdown time="2025-04-19T15:00:00Z" />
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="/spring-conference-2025"
                  className="text-black px-4 py-2 rounded hover:text-red bg-lightPink mx-auto"
                >
                  See Spring Conference Details
                </a>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/eboard" element={<EBoard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/events/:slug" element={<SingleEvent />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route
            path="/spring-conference-2025"
            element={<SpringConference />}
          />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>

        {/* Banner after popup is dismissed */}
        {shouldShowBanner && !showPopup && (
          <div className="fixed bottom-4 right-4 bg-red text-white px-4 py-2 rounded shadow-lg transform transition-transform duration-200 hover:scale-105">
            <a
              href="/spring-conference-2025"
              className="text-xl text-white hover:text-white"
            >
              See Spring Conference Details!
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
