import React from "react";
import Countdown from "../components/countdown";
import LayoutWrapper from "../components/layoutWrapper";

const SpringConference = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-screen px-4 sm:px-10 md:px-20 lg:px-36 sm:pt-2 md:pt-20 lg:pt-20"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl font-bold text-black">
          Women in Science & Engineering Presents
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pt-6 sm:pt-10 font-bold text-red">
          2026 Spring Conference
        </h1>

        <p className="mt-6 sm:mt-10 text-base sm:text-lg text-black">
          We are close to the 2026 Women in Science and Engineering Spring
          Conference!
        </p>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-black">
          This event is designed to empower, connect, and inspire women pursuing
          careers in science and engineering. It's an excellent opportunity for
          undergraduate and graduate students to connect with professionals,
          faculty, and peers in STEM.
        </p>

        {/* Quick Link to RSVP */}
        <a
          href="#rsvp"
          className="inline-block mt-8 bg-lightPink text-black px-8 py-3 rounded-full font-bold text-lg hover:text-red transition-colors"
        >
          Register Now
        </a>
      </div>

      <section className="mt-10 text-xl font-semibold text-center text-red">
        <p className="mb-6">Get ready as we count down to the Conference...</p>
        <Countdown time="2026-04-11T17:30:00Z" />
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
              <strong>Date:</strong> Saturday, April 11, 2026
            </p>
            <p className="mb-2">
              <strong>Time:</strong> 5:30 PM - 8:00 PM
            </p>
            <p className="mb-2">
              <strong>Location:</strong> Petteruti Lounge + Leung Gallery
            </p>
            <p className="mb-2">
              <strong>Attire:</strong> Business Casual
            </p>
            <p className="mb-2">Free dinner and merch will be provided!</p>
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
              ["5:30 - 6:00 PM", "Doors Open"],
              ["6:00 - 6:15 PM", "Opening Keynote Speaker"],
              ["6:15 - 7:00 PM", "Dinner"],
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
              ["7:00 - 7:45 PM", "Structured Networking"],
              ["7:45 - 8:00 PM", "Closing Keynote Speaker: Dean Megan Russel"],
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

      {/* RSVP Section */}
      <section id="rsvp" className="w-full max-w-2xl mb-20 mx-auto px-4">
        <h2 className="text-4xl font-bold text-red mb-4 text-center">RSVP</h2>
        <p className="text-center mb-8 text-black italic">
          Please fill out the form below to secure your spot.
        </p>

        {/* Container for the form */}
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe8K-kBrXnu4r3aesyn9irjKLMWrqqdXsaxQO-BtHrk-0zHqQ/viewform?embedded=true"
            width="100%"
            height="1300" // Increased height to show the whole form
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no" // This tells the browser not to show a scrollbar inside the frame
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* <section className="w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0"> */}
      {/* LEFT - Faculty */}
      {/* <div className="bg-lightPink p-8 px-20 w-full">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-black mb-6">
                Faculty in Attendance
              </h2> */}
      {/* Future of Tech and Sustainability */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Future of Tech and Sustainability
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Nicole Nugent</p>
                    <p className="text-sm text-gray-700">
                      Assistant Professor, Psychiatry and Human Behavior
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Michael Donohue</p>
                    <p className="text-sm text-gray-700">
                      Assoc. Professor of Engineering, Director of Masters
                      Programs
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Joy Zeng</p>
                    <p className="text-sm text-gray-700">
                      Adjunct Assistant Professor, Engineering
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* Power of Representation */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Power of Representation
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Phyllis Dennery</p>
                    <p className="text-sm text-gray-700">
                      Pediatrician-in-Chief, Hasbro Children’s
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Kathi Fisler</p>
                    <p className="text-sm text-gray-700">
                      Professor (Research), Co-Director of CS Undergrad Studies
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Tejal Desai</p>
                    <p className="text-sm text-gray-700">
                      Dean of Engineering, Professor of Engineering
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Li Qiong Wang</p>
                    <p className="text-sm text-gray-700">
                      Distinguished Senior Lecturer, Chemistry
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* Navigating Medical School */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Navigating Medical School
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Alaa Elnajjar</p>
                    <p className="text-sm text-gray-700">
                      Child & Adolescent Psychiatrist, Bradley Hospital
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Anwen Lin</p>
                    <p className="text-sm text-gray-700">
                      Medical Student, Alpert Medical School
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Elyse Sauber</p>
                    <p className="text-sm text-gray-700">Medical Student</p>
                  </li>
                </ul>
              </div> */}

      {/* Non-Traditional STEM Careers */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Non-Traditional STEM Careers
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Malabika Sarker</p>
                    <p className="text-sm text-gray-700">
                      Assoc. Dean of Global Engagement
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Adina Badea</p>
                    <p className="text-sm text-gray-700">[Role Not Provided]</p>
                  </li>
                </ul>
              </div> */}

      {/* Global Perspectives */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Global Perspectives
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Dr. Margot Martinez-Moreno</p>
                    <p className="text-sm text-gray-700">Brown Neurosurgery</p>
                  </li>
                  <li>
                    <p className="font-medium">Peipei Zhou</p>
                    <p className="text-sm text-gray-700">
                      Asst. Professor, Computer Engineering
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* Empowering Women to Lead in STEM */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Empowering Women to Lead in STEM
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Dr. Patricia Sullivan</p>
                    <p className="text-sm text-gray-700">Brown Neurosurgery</p>
                  </li>
                  <li>
                    <p className="font-medium">Joy Zeng</p>
                    <p className="text-sm text-gray-700">
                      Adjunct Assistant Professor, Engineering
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* STEM Education */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  STEM Education
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Michael Donohue</p>
                    <p className="text-sm text-gray-700">
                      Assoc. Professor of Engineering
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Karla Kaun</p>
                    <p className="text-sm text-gray-700">
                      Professor, Neuroscience
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* Building STEM Communities */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Building STEM Communities
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Kimberly Turner</p>
                    <p className="text-sm text-gray-700">
                      Postdoctoral Research Fellow in International and Public
                      Affairs
                    </p>
                  </li>
                </ul>
              </div> */}

      {/* Mental Health & Building Resiliency */}
      {/* <div className="mb-6">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Mental Health & Building Resiliency
                </h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <p className="font-medium">Alaa Elnajjar</p>
                    <p className="text-sm text-gray-700">
                      Child & Adolescent Psychiatrist, Bradley Hospital
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Nicole Nugent</p>
                    <p className="text-sm text-gray-700">
                      Assistant Professor, Psychiatry and Human Behavior
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

      {/* RIGHT - Student Groups + Thank You */}
      {/* <div className="bg-red text-white w-full p-8 px-20 flex flex-col gap-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">
                Participating Student Groups
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Association for Women in Mathematics –{" "}
                  <a
                    href="mailto:awm@brown.edu"
                    className="underline text-white hover:text-lightPink"
                  >
                    awm@brown.edu
                  </a>
                </li>
                <li>
                  American Medical Women's Association –{" "}
                  <a
                    href="mailto:brown-amwa@brown.edu"
                    className="underline text-white hover:text-lightPink"
                  >
                    brown-amwa@brown.edu
                  </a>
                </li>
                <li>Women Build @ Brown</li>
              </ul>
            </div> */}

      {/* Thank You Card */}
      {/* <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-md text-center md:mt-32">
              <h3 className="text-2xl font-bold text-red mb-4">Thank You</h3>
              <p className="text-md mb-2">
                Thank you to all our amazing faculty and graduate students who
                have been a wonderful source of support and inspiration to women
                at Brown.
              </p>
              <p className="text-md">
                Thank you to all our student groups who have put in the time and
                effort to support and create welcoming spaces for women in STEM
                at Brown.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SpringConference;
