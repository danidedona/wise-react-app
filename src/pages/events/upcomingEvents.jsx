import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../components/layoutWrapper";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const modules = import.meta.glob("./upcomingEventsData/*.jsx");
      const loadedEvents = [];

      for (const path in modules) {
        const mod = await modules[path]();
        console.log("Loaded event:", mod.default);
        loadedEvents.push(mod.default);
      }

      loadedEvents.sort((a, b) => a.index - b.index);
      setEvents(loadedEvents);
    };

    loadEvents();
  }, []);

  return (
    <LayoutWrapper>
      <h1 className="text-6xl font-semibold mb-12 text-center">
        Upcoming Events
      </h1>

      {events.length < 3 ? (
        <div className="flex flex-wrap justify-center gap-12 w-full max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-lightPink rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 text-center max-w-[360px] w-full"
            >
              <a href={event.link} className="w-full mb-4">
                <img
                  src={event.flier}
                  alt={event.title}
                  className="w-full max-h-[400px] object-contain rounded-md hover:scale-105 transition-transform duration-200"
                />
              </a>
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-md text-gray-700 mb-1">{event.date}</p>
              <p className="text-md text-gray-700 mb-4">{event.location}</p>

              {event.rsvpLink && (
                <a
                  href={event.rsvpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red text-white px-4 py-2 rounded-md font-semibold hover:bg-black transition"
                >
                  RSVP
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-lightPink rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 text-center"
            >
              <a href={event.link} className="w-full mb-4">
                <img
                  src={event.flier}
                  alt={event.title}
                  className="w-full max-h-[400px] object-contain rounded-md hover:scale-105 transition-transform duration-200"
                />
              </a>
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-md text-gray-700 mb-1">{event.date}</p>
              <p className="text-md text-gray-700 mb-4">{event.location}</p>

              {event.rsvpLink && (
                <a
                  href={event.rsvpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red text-white px-4 py-2 rounded-md font-semibold hover:bg-black transition"
                >
                  RSVP
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </LayoutWrapper>
  );
};

export default UpcomingEvents;
