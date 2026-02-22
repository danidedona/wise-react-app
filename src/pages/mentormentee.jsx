import React from "react";
import LayoutWrapper from "../components/layoutWrapper";

const MentorMentee = () => {
  const events = [
    {
      title: "Mentor-Mentee Study Cafe",
      dates: "March 8th 2026, 3–5 PM",
      endDate: "2026-03-08",
      description:
        "Join us for our Mentor-Mentee Study Cafe! Drop by anytime between 3–5 PM in the Underground for donuts, coffee, and hot chocolate. This is a relaxed space to study together, catch up, and connect with your mentor or mentee.",
      info: [
        { label: "Location", value: "The Underground" },
        { label: "Time", value: "3:00–5:00 PM" },
        {
          label: "Food",
          value: "Donuts, coffee, and hot chocolate provided",
        },
        { label: "Who", value: "Open to all mentors and mentees" },
        { label: "RSVP", value: "No RSVP required — drop in anytime!" },
      ],
      image: "/images/temp-coffee.png",
    },
    {
      title: "WiSE × Ten One Tea House: Tea Talks 🧋",
      dates: "October 24th – 27th, 2025",
      endDate: "2025-10-27",
      description:
        "We’re so excited to kick off the semester with WiSE × Ten One Tea House: Tea Talks! 🧋 This is a fun opportunity to meet your mentor or mentee while enjoying free or discounted boba. The first 30 groups to sign up will receive free drinks, and everyone else who signs up by October 22nd will receive a 15% discount!",
      milestones: [
        { date: "October 17 (Friday, 12PM)", detail: "Sign-up form released" },
        { date: "October 21 (Tuesday)", detail: "Deadline to sign up" },
        {
          date: "October 22–23 (Wed–Thurs, 12–3PM)",
          detail: "Voucher pickup at the Blue Room",
        },
        {
          date: "October 24–27 (Fri–Mon)",
          detail: "Tea Talks at Ten One Tea House",
        },
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc50WtJnRMhaNQWh55Iirxgb0nnrIDIYFNTrj6CupCLO6efOQ/viewform",
      image: "/events/fall-2025-tea-talks/background.png",
    },
  ];

  return (
    <LayoutWrapper>
      <h1
        className="text-4xl sm:text-6xl font-semibold text-black mb-12 text-center"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        Mentor-Mentee Program
      </h1>

      {/* Intro */}
      <div
        className="text-center px-4 mt-4 text-lg sm:text-xl md:text-2xl text-black max-w-4xl mx-auto space-y-6"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        <p>
          WiSE’s Mentor-Mentee Program connects underclassmen with experienced
          students to provide academic, professional, and personal support. This
          program is a great way to build community within WiSE while learning
          from others’ experiences.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="mt-20 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Atteron', serif" }}
        >
          Upcoming Mentor-Mentee Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => {
            const isPast =
              event.endDate && new Date(event.endDate) < new Date();

            return (
              <div
                key={index}
                className="relative border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ isolation: "isolate" }}
              >
                {/* Past Event Banner */}
                {isPast && (
                  <div className="absolute top-4 right-[-45px] z-20 rotate-45 bg-[#f2c2c2] text-black text-[10px] sm:text-xs font-semibold py-1 px-10 shadow-md">
                    <span className="hidden sm:inline">Event Ended</span>
                    <span className="sm:hidden">Past Event</span>
                  </div>
                )}

                <div className={isPast ? "grayscale relative" : "relative"}>
                  {/* Grey wash overlay */}
                  {isPast && (
                    <div className="absolute inset-0 bg-gray-100/60 z-10 pointer-events-none"></div>
                  )}

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 space-y-4 relative z-0">
                    <h3
                      className="text-2xl font-semibold text-gray-800"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm">{event.dates}</p>
                    <p className="text-gray-700">{event.description}</p>

                    {/* Info List (Study Cafe style) */}
                    {event.info && (
                      <ul className="text-sm text-gray-700 space-y-2 mt-4">
                        {event.info.map((item, i) => (
                          <li key={i}>
                            <span className="font-semibold">{item.label}:</span>{" "}
                            {item.value}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Milestones (Tea Talks style) */}
                    {event.milestones && (
                      <ul className="text-sm text-gray-600 space-y-1 mt-4">
                        {event.milestones.map((m, i) => (
                          <li key={i}>
                            <span className="font-semibold">{m.date}:</span>{" "}
                            {m.detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Sign-up button only if formLink exists */}
                    {!isPast && event.formLink && (
                      <div className="mt-6 text-center">
                        <a
                          href={event.formLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#f2c2c2] hover:bg-[#eca7a7] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
                        >
                          Sign Up
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deadline Notice */}
      {/* <div className="max-w-2xl mx-auto bg-red text-white text-center rounded-lg py-4 px-6 mt-10 shadow-md">
        <p className="text-sm sm:text-base font-semibold">
          Mentor applications have been{" "}
          <span className="underline">extended</span>!
        </p>
        <p className="text-xs mt-1">
          Notifications for both mentors and mentees will be sent in early
          October.
        </p>
      </div> */}

      {/* Application Sections */}
      {/* <div className="max-w-5xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100 border border-gray-200 shadow-md rounded-xl p-8 flex flex-col justify-between opacity-70">
          <div>
            <h2
              className="text-2xl font-bold text-gray-500 mb-4 text-center"
              style={{ fontFamily: "'Lora', serif" }}
            >
              2025–2026 WiSE Mentee Application
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-center">
              Applications for mentees are now{" "}
              <span className="font-semibold">closed</span>. Thank you to
              everyone who applied!
            </p>
          </div>
          <div className="text-center mt-6">
            <span className="inline-block border-2 border-gray-400 text-gray-500 font-semibold px-6 py-3 rounded-lg cursor-not-allowed">
              Applications Closed
            </span>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-200 shadow-md rounded-xl p-8 flex flex-col justify-between opacity-70">
          <div>
            <h2
              className="text-2xl font-bold text-gray-500 mb-4 text-center"
              style={{ fontFamily: "'Lora', serif" }}
            >
              2025–2026 WiSE Mentor Application
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-center">
              Applications for mentors are now{" "}
              <span className="font-semibold">closed</span>. Thank you to
              everyone who applied!
            </p>
          </div>
          <div className="text-center mt-6">
            <span className="inline-block border-2 border-gray-400 text-gray-500 font-semibold px-6 py-3 rounded-lg cursor-not-allowed">
              Applications Closed
            </span>
          </div>
        </div>
      </div> */}
    </LayoutWrapper>
  );
};

export default MentorMentee;
