import React from "react";
import LayoutWrapper from "../../components/layoutWrapper";

const Events = () => {
  return (
    <LayoutWrapper>
      <h1
        className="text-4xl sm:text-6xl font-semibold text-black mb-12"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 items-start text-center">
        {/* Button 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/timeBack.png"
            alt="Molecule Logo"
            className="h-32 mb-4"
          />
          <a
            href="/past-events"
            className="bg-medPink text-black py-3 px-6 sm:px-8 rounded-xl text-2xl sm:text-4xl font-semibold hover:text-red transition"
          >
            Past Events
          </a>
        </div>

        {/* Button 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/calendar.png"
            alt="Molecule Logo"
            className="h-32 mb-4"
          />
          <a
            href="/upcoming-events"
            className="bg-medPink text-black py-3 px-6 sm:px-8 rounded-xl text-2xl sm:text-4xl font-semibold hover:text-red transition"
          >
            Upcoming Events
          </a>
        </div>

        {/* Button 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/letter.png"
            alt="Molecule Logo"
            className="h-32 mb-4"
          />
          <a
            href="/spring-conference-2025"
            className="bg-medPink text-black py-3 px-6 sm:px-8 rounded-xl text-2xl sm:text-4xl font-semibold hover:text-red transition"
          >
            Spring Conference 2025
          </a>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Events;
