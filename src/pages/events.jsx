import React from "react";

const Events = () => {
  return (
    <div
      className="flex flex-col items-center w-screen min-h-screen px-4 sm:px-36 pt-20"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <h1 className="text-6xl font-semibold text-black mb-12">Events</h1>

      {/* Button Container */}
      <div className="flex items-center justify-center gap-24">
        {/* Button 1 */}
        <div className="relative flex flex-col items-center">
          <div className="mb-4">
            <img
              src="/images/longplaceholder.jpg"
              alt="Molecule Logo"
              className="h-32"
            />
          </div>
          <a
            href="/past-events"
            className="flex items-center justify-center bg-medPink text-black py-3 px-8 rounded-xl text-4xl font-semibold hover:text-red"
          >
            Past Events
          </a>
        </div>

        {/* Button 2 */}
        <div className="relative flex flex-col items-center">
          <div className="mb-4">
            <img
              src="/images/longplaceholder.jpg"
              alt="Molecule Logo"
              className="h-32"
            />
          </div>
          <a
            href="/upcoming-events"
            className="flex items-center justify-center bg-medPink text-black py-3 px-8 rounded-xl text-4xl font-semibold hover:text-red"
          >
            Upcoming Events
          </a>
        </div>

        {/* Button 3 */}
        <div className="relative flex flex-col items-center">
          <div className="mb-4">
            <img
              src="/images/longplaceholder.jpg"
              alt="Molecule Logo"
              className="h-32"
            />
          </div>
          <a
            href="/gala-2025"
            className="flex items-center justify-center bg-medPink text-black py-3 px-8 rounded-xl text-4xl font-semibold hover:text-red"
          >
            Gala 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
