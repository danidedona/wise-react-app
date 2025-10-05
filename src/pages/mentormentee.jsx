import React from "react";
import LayoutWrapper from "../components/layoutWrapper";

const MentorMentee = () => {
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
      <div className="max-w-5xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mentee Application (Closed) */}
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

        {/* Mentor Application (Still Open) */}
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
      </div>
    </LayoutWrapper>
  );
};

export default MentorMentee;
