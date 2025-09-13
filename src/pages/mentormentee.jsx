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

      {/* Intro Text */}
      <div
        className="text-center px-4 mt-4 text-lg sm:text-xl md:text-2xl text-black max-w-4xl mx-auto space-y-6"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        <p>
          Our Mentor-Mentee Program pairs underclassmen with experienced
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

      {/* Application Links Section */}
      <div className="max-w-4xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mentee Application */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 text-center">
          <h2
            className="text-xl sm:text-2xl font-bold text-red mb-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Mentee Application
          </h2>
          <p className="text-sm sm:text-base mb-4 text-gray-700">
            For underclassmen looking for guidance, support, and mentorship.
          </p>
          <a
            href="https://forms.gle/JqSuV6TqTbUpv6Eg8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-red text-red font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
          >
            Apply as a Mentee
          </a>
        </div>

        {/* Mentor Application */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 text-center">
          <h2
            className="text-xl sm:text-2xl font-bold text-red mb-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Mentor Application
          </h2>
          <p className="text-sm sm:text-base mb-4 text-gray-700">
            For upperclassmen eager to support, advise, and empower other WiSE
            members.
          </p>
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
    </LayoutWrapper>
  );
};

export default MentorMentee;
