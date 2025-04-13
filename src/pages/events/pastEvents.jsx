import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper";

const PastEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      // Dynamically import all .jsx files inside pastEventsData
      const modules = import.meta.glob("./pastEventsData/*.jsx");
      const loadedEvents = [];

      for (const path in modules) {
        const mod = await modules[path]();
        loadedEvents.push(mod.default); // Each file must export a default object
      }

      // Sort by index (lower index = more recent = further left)
      loadedEvents.sort((a, b) => a.index - b.index);

      setEvents(loadedEvents);
    };

    loadEvents();
  }, []);

  return (
    <LayoutWrapper>
      <h1 className="text-6xl font-semibold mb-12">Past Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {events.map((event, index) => (
          <Link
            to={event.link}
            key={index}
            className="w-[300px] h-[380px] bg-lightPink rounded-3xl rounded-t-[100px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image = 4/5 height (304px) */}
            <img
              src={event.coverImage}
              alt={event.title}
              className="h-[304px] w-full object-cover rounded-t-[100px]"
            />

            {/* Text = 1/5 height (76px) */}
            <div className="h-[76px] flex items-center justify-center px-4">
              <p className="text-lg font-medium text-black text-center hover:text-red leading-tight">
                {event.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default PastEvents;
