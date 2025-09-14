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

        <p>
          Applications for the {new Date().getFullYear()}–
          {new Date().getFullYear() + 1} academic year are now open! Both
          mentors and mentees are welcome to apply.
        </p>
      </div>

      {/* Deadline Notice */}
      <div className="max-w-2xl mx-auto bg-red text-white text-center rounded-lg py-4 px-6 mt-10 shadow-md">
        <p className="text-sm sm:text-base font-semibold">
          Applications close on{" "}
          <span className="underline">September 26, 2025 at 11:59 PM</span>.
        </p>
        <p className="text-xs mt-1">
          Notifications will be sent by early October.
        </p>
      </div>

      {/* Application Sections */}
      <div className="max-w-5xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mentee Application */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2
              className="text-2xl font-bold text-red mb-4 text-center"
              style={{ fontFamily: "'Lora', serif" }}
            >
              2025–2026 WiSE Mentee Application
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              The WiSE Mentee program is intended for first/second years
              interested in STEM at Brown, as well as transfer applicants
              adjusting to campus. As a mentee, you’ll receive support from a
              WiSE Mentor throughout the year, helping you succeed academically
              and personally.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              All information you provide will remain confidential. Reporting
              data will be anonymized to preserve your privacy.
            </p>
            <p className="text-sm text-gray-600 italic">
              Please contact{" "}
              <a
                href="mailto:WiSE@Brown.edu"
                className="underline hover:text-red"
              >
                WiSE@Brown.edu
              </a>{" "}
              with any questions.
            </p>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://forms.gle/JqSuV6TqTbUpv6Eg8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-red text-red font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
            >
              Apply as a Mentee
            </a>
          </div>
        </div>

        {/* Mentor Application */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2
              className="text-2xl font-bold text-red mb-4 text-center"
              style={{ fontFamily: "'Lora', serif" }}
            >
              2025–2026 WiSE Mentor Application
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              Sophomores, juniors, seniors, and graduate students are invited to
              apply! As a mentor, you will serve as direct support for WiSE
              mentees, helping them navigate their first years at Brown while
              building a trusting and empowering relationship.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              All information you provide will remain confidential. Reporting
              data will be anonymized to preserve your privacy.
            </p>
            <p className="text-sm text-gray-600 italic">
              Please contact{" "}
              <a
                href="mailto:WiSE@Brown.edu"
                className="underline hover:text-red"
              >
                WiSE@Brown.edu
              </a>{" "}
              with any questions.
            </p>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://forms.gle/rYftgX7aUVp497c26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-red text-red font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
            >
              Apply as a Mentor
            </a>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default MentorMentee;
