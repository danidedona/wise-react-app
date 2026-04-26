import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Mission from "./pages/mission";
import EBoard from "./pages/eboard/eboard";
import Events from "./pages/events/events";
import SpringConference from "./pages/springConference";
import Countdown from "./components/countdown";
import PastEvents from "./pages/events/pastEvents";
import SingleEvent from "./pages/events/singleEvent";
import UpcomingEvents from "./pages/events/upcomingEvents";
import Newsletter from "./pages/newsletter";
import MentorMentee from "./pages/mentormentee";
import EBoardApplications from "./pages/eboardapplications";

const App = () => {
  // -----------------------------------------------------------
  // CURRENT POPUP
  // -----------------------------------------------------------
  // const [showPopup, setShowPopup] = useState(false);
  // const [showOverlay, setShowOverlay] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const location = useLocation();

  // // Show popup on home page
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setTimeout(() => {
  //       setShowPopup(true);
  //       setShowOverlay(true);
  //     }, 2000);
  //   }
  // }, [location.pathname]);

  // // Detect screen size
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 640);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const dismissPopup = () => {
  //   setShowPopup(false);
  //   setShowOverlay(false);
  // };

  // const shouldShowBanner = location.pathname !== "/eboard-applications";

  // -----------------------------------------------------------
  // CURRENT POPUP
  // -----------------------------------------------------------

  // // ----------- FOR GALA -----------
  // const [showPopup, setShowPopup] = useState(false);
  // const [showOverlay, setShowOverlay] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const location = useLocation();

  // // Show popup on home page
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setTimeout(() => {
  //       setShowPopup(true);
  //       setShowOverlay(true);
  //     }, 2000);
  //   }
  // }, [location.pathname]);

  // // Detect screen size
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 640);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const dismissPopup = () => {
  //   setShowPopup(false);
  //   setShowOverlay(false);
  // };

  // const shouldShowBanner =
  //   location.pathname !== "/spring-conference-2026" && !isMobile;
  // // ----------- FOR GALA -----------

  return (
    <div
      className="bg-white min-h-screen text-black flex flex-col"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <Header />
      <main className="mt-32 flex-grow">
        {/* ----------- FOR GALA ----------- */}
        {/* Overlay */}
        {/* {showOverlay && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        )} */}

        {/* Popup */}
        {/* {showPopup && (
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
              <Countdown time="2026-04-11T17:30:00Z" />
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="/spring-conference-2026"
                  className="text-black px-4 py-2 rounded hover:text-red bg-lightPink mx-auto"
                >
                  See Spring Conference Details
                </a>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8K-kBrXnu4r3aesyn9irjKLMWrqqdXsaxQO-BtHrk-0zHqQ/viewform"
                  className="text-black px-4 py-2 rounded hover:text-red bg-lightPink mx-auto"
                >
                  RSVP
                </a>
              </div>
            </div>
          </div>
        )} */}
        {/* ----------- FOR GALA ----------- */}

        {/* ----------- FOR CURRENT POPUP ----------- */}
        {/* {showPopup && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            onClick={dismissPopup}
          >
            <div
              className="bg-white text-black p-6 rounded-xl z-50 shadow-2xl max-w-5xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
    
              <button
                onClick={dismissPopup}
                className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red bg-white/70"
              >
                ×
              </button>

              <h2
                className="text-2xl sm:text-3xl font-bold text-center text-red mb-6"
                style={{ fontFamily: "'Lora', serif" }}
              >
                WiSE Announcements
              </h2>

       
              <div className="bg-lightPink rounded-lg shadow-md overflow-hidden flex flex-col">
              
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold text-red mb-2">
                    E-Board Applications
                  </h3>
                  <p className="text-md text-gray-700 mb-3">
                    Applications for Fall 2025 are open! Join WiSE leadership
                    and help organize events, manage outreach, and build
                    community. Positions available include:
                  </p>
                  <ul className="text-sm text-gray-700 text-left mb-4 list-disc list-inside">
                    <li>President / Vice President</li>
                    <li>Treasurer</li>
                    <li>Events Chair</li>
                    <li>Outreach Chair</li>
                    <li>Mentor-Mentee Coordinator</li>
                    <li>Communications / Social Media</li>
                  </ul>
                  <a
                    href="/eboard-applications"
                    className="mt-auto inline-block border-2 border-red text-red font-semibold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* ----------- FOR CURRENT POPUP ----------- */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/eboard" element={<EBoard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentormentee" element={<MentorMentee />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/events/:slug" element={<SingleEvent />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route
            path="/spring-conference-2026"
            element={<SpringConference />}
          />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/eboard-applications" element={<EBoardApplications />} />
        </Routes>

        {/* ----------- FOR CURRENT POPUP ----------- */}
        {/* {shouldShowBanner && !showPopup && (
          <div
            className="fixed bottom-4 right-4 bg-red text-white 
                  px-3 py-1 sm:px-4 sm:py-2 
                  rounded shadow-lg transform transition-transform duration-200 hover:scale-105 z-50"
          >
            <a
              href="/eboard-applications"
              className="text-sm sm:text-xl text-white hover:text-white"
            >
              E-Board Applications Open! Apply Now →
            </a>
          </div>
        )} */}

        {/* ----------- FOR CURRENT POPUP ----------- */}

        {/* ----------- FOR GALA ----------- */}
        {/* Banner after popup is dismissed */}
        {/* {shouldShowBanner && !showPopup && (
          <div className="fixed bottom-4 right-4 bg-red text-white px-4 py-2 rounded shadow-lg transform transition-transform duration-200 hover:scale-105">
            <a
              href="/spring-conference-2026"
              className="text-xl text-white hover:text-white"
            >
              See Spring Conference Details!
            </a>
          </div>
        )} */}
        {/* ----------- FOR GALA ----------- */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
