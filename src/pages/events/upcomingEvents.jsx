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

      // Sort: lower index = appears earlier
      loadedEvents.sort((a, b) => a.index - b.index);
      setEvents(loadedEvents);
    };

    loadEvents();
  }, []);

  const renderEventCard = (event, index) => (
    <div
      key={index}
      className="bg-lightPink rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 text-center max-w-[360px] w-full"
    >
      <div className="aspect-square w-full max-w-[300px] overflow-hidden rounded-md">
        <img
          src={event.flier}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>

      {/* Optional fields */}
      {event.date && <p className="text-md text-gray-700">{event.date}</p>}
      {event.time && <p className="text-md text-gray-700">{event.time}</p>}
      {event.location && (
        <p className="text-md text-gray-700 mb-4">{event.location}</p>
      )}

      {/* Custom Button */}
      {event.buttonLink && event.buttonTitle && (
        <a
          href={event.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-red text-red font-semibold px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
        >
          {event.buttonTitle}
        </a>
      )}
    </div>
  );

  return (
    <LayoutWrapper>
      <h1 className="text-6xl font-semibold mb-12 text-center">
        Upcoming Events
      </h1>

      {events.length < 3 ? (
        <div className="flex flex-wrap justify-center gap-12 w-full max-w-7xl">
          {events.map((event, index) => renderEventCard(event, index))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
          {events.map((event, index) => renderEventCard(event, index))}
        </div>
      )}
    </LayoutWrapper>
  );
};

export default UpcomingEvents;
