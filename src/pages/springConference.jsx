import React from "react";
import Countdown from "../components/countdown";
import LayoutWrapper from "../components/layoutWrapper";

const SpringConference = () => {
  return (
    <LayoutWrapper>
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl font-bold text-black">
          Women in Science & Engineering Presents
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pt-6 sm:pt-10 font-bold text-red">
          2025 Spring Conference
        </h1>

        <p className="mt-6 sm:mt-10 text-base sm:text-lg text-black">
          We are one week away from 📣 2025 Women in Science and Engineering
          Spring Conference 🧬!
        </p>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-black">
          This event is designed to empower, connect, and inspire women pursuing
          careers in science and engineering. It's an excellent opportunity for
          undergraduate and graduate students to connect with professionals,
          faculty, and peers in STEM.
        </p>
      </div>

      <section className="mt-10 text-xl font-semibold text-center text-red">
        <p className="mb-6">Get ready as we count down to the Conference...</p>
        <Countdown time="2025-04-19T15:00:00Z" />
      </section>

      <section className="bg-red w-screen p-8 mb-14 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto items-center">
          <div className="flex justify-center md:justify-center items-center h-full">
            <h2 className="text-7xl font-semibold text-white text-center">
              Event Details
            </h2>
          </div>
          <div className="text-white text-lg text-left">
            <p className="mb-2">
              <strong>Date:</strong> Saturday, April 19, 2025
            </p>
            <p className="mb-2">
              <strong>Time:</strong> 3:00 PM - 7:30 PM
            </p>
            <p className="mb-2">
              <strong>Location:</strong> Hazeltine Commons, Barus & Holley
            </p>
            <p className="mb-2">
              <strong>Dress Code:</strong> Business Casual
            </p>
            <p className="mb-2">
              🍜 Dinner will be provided + 🤫 FREE Merch + BIRB raffle
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 mb-12 max-w-7xl">
        <h2 className="text-4xl font-bold text-red mb-10 text-center">
          Program Schedule
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black text-lg">
          <div className="space-y-6">
            {[
              ["2:00 - 3:00 PM", "Setup"],
              ["3:00 - 3:15 PM", "Arrival"],
              [
                "3:15 - 3:30 PM",
                "Opening Keynote – Michelle Vick (Postdoctoral Researcher in Physics)",
              ],
              ["3:45 - 4:30 PM", "Academic Staff Panels"],
              [
                "4:45 - 5:30 PM",
                '"In Conversation With..." Sessions in Barus & Holley breakout rooms',
              ],
            ].map(([time, description], i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="w-[160px] text-right text-xl font-bold shrink-0">
                  {time}
                </span>
                <p className="flex-1">{description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {[
              ["5:30 - 8:00 PM", "Networking Dinner"],
              ["5:45 - 6:30 PM", "Structured Networking"],
              ["6:30 - 7:00 PM", "Dinner"],
              ["7:00 - 7:30 PM", "Closing Keynote & Raffle"],
            ].map(([time, description], i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="w-[160px] text-right text-xl font-bold shrink-0">
                  {time}
                </span>
                <p className="flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-screen mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* LEFT - Faculty */}
          <div className="bg-lightPink p-8 px-20 w-full">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-black mb-6">
                Faculty in Attendance
              </h2>
              <p className="text-lg text-black">TBD</p>
            </div>
          </div>

          {/* RIGHT - Student Groups */}
          <div className="bg-red p-8 px-20 w-full flex flex-col justify-between">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Participating Student Groups
              </h2>
              <ul className="list-disc list-inside text-lg text-white space-y-2 mb-10">
                <li>Association for Women in Mathematics</li>
                <li>American Medical Women's Association</li>
                <li>Women Build @ Brown</li>
              </ul>
            </div>

            {/* Thank You Card */}
            <div className="flex justify-center mt-auto">
              <div className="bg-white text-black p-6 rounded-lg shadow max-w-xl w-full text-center mt-6 mb-2">
                <h3 className="text-2xl font-bold text-red mb-3">Thank You</h3>
                <p className="text-base text-left mb-2">
                  Thank you to all our amazing faculty and graduate students who
                  have been a wonderful source of support and inspiration to
                  women at Brown.
                </p>
                <p className="text-base text-left">
                  Thank you to all our student groups who have put in the time
                  and effort to support and create welcoming spaces for women in
                  STEM at Brown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default SpringConference;
