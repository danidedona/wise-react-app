import React, { useState, useEffect } from "react";
import Countdown from "../components/countdown";

const NetworkingGala = () => {
  return (
    <div
      className="flex flex-col items-center w-screen min-h-screen px-4 sm:px-36 pt-20 text-black"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">
          Women in Science & Engineering Presents
        </h1>
        <h1 className="text-8xl pt-10 font-bold text-red">
          2025 Networking Gala
        </h1>

        <p className="mt-10 text-lg text-black">
          Join us for an enriching event designed to empower, connect, and
          inspire women at Brown pursuing careers in STEM.
        </p>

        <p className="mt-5 text-lg text-black">
          As an end-of-year celebration, as well as an opportunity to connect
          with graduate students and faculty further along in their careers,
          this gala <br /> will feature a keynote, dinner, and structured social
          networking hour for your professional development— and most
          importantly, to have fun!
        </p>
      </div>

      <section className="mt-10 text-xl font-semibold text-center text-red ">
        <p className="mb-6">Get ready as we count down to the Gala...</p>
        <Countdown time="2025-04-19T15:00:00Z" />
      </section>

      <section className="bg-red w-full p-8 mt-12">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-white">Event Details</h2>
          <div className="text-white text-lg">
            <p className="mb-2">
              <strong>When:</strong> Friday, April 19, 2025 from 3:00 - 8:00 PM
            </p>
            <p className="mb-2">
              <strong>Where:</strong> Hazeltine Commons, ERC Building
            </p>
            <p className="mb-2">
              <strong>Dress Code:</strong> Semi-formal/Formal
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Event Highlights
        </h2>
        <ul className="list-none text-lg text-black">
          <li>Keynote Speaker: Dr. Louise Manfredi</li>
          <li>Dinner on us!</li>
          <li>Networking opportunities for professional development</li>
          <li>Connect with WiSE mentors and mentees</li>
          <li>FREE exclusive merch (first come, first serve)</li>
          <li>4 BIRBS up for grabs!!</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">Program</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-black">
              6:00 PM - Doors Open
            </h3>
            <p className="text-lg text-black">
              Welcome Reception: Begin the evening with welcome drinks and
              appetizers, mingling with attendees in a relaxed setting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              6:30 PM - Opening Remarks
            </h3>
            <p className="text-lg text-black">
              A brief introduction to the evening's goals and the significant
              impact of faculty support and mentorship on student careers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              7:00 PM - Keynote Address
            </h3>
            <p className="text-lg text-black">
              Hear from Dr. Louise Manfredi, our highly distinguished Associate
              Professor of the Practice of Engineering. She is passionate about
              sustainable design engineering, circular economy, and professional
              identity formation, among other interests.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              8:00 PM - Structured Speed Networking
            </h3>
            <p className="text-lg text-black">
              Participate in speed networking sessions, offering a unique
              opportunity to connect with students, share your wisdom, and
              potentially find mentees.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              9:00 PM - Reception & Informal Networking
            </h3>
            <p className="text-lg text-black">
              Conclude the evening with an open networking session, where you
              can engage in deeper conversations, share insights, and offer
              guidance to our future leaders.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              10:00 PM - Event Close
            </h3>
            <p className="text-lg text-black">
              The event officially concludes, but feel free to stay and continue
              networking informally.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Faculty in Attendance
        </h2>
        <ul className="list-none text-lg text-black">
          <li>
            Adina Badea - Assistant Professor of Pathology and Laboratory
            Medicine
          </li>
          <li>
            Amanda Jamieson - Esther Elizabeth Brintzenhoff Associate Professor
            of Molecular Microbiology and Immunology, Pathobiology Graduate
            Program Co-Director
          </li>
          <li>Amy Greenwald - Professor of Computer Science</li>
          <li>Anarina Murillo - Assistant Professor of Biostatistics</li>
          <li>
            Brenda Rubenstein - Associate Professor of Chemistry, Associate
            Professor of Physics
          </li>
          <li>
            Ece Uzun - Assistant Professor of Pathology and Laboratory Medicine
          </li>
          <li>Elena Oancea - Professor of Medical Science</li>
          <li>
            Eunyoung Cho - Associate Professor of Dermatology, Associate
            Professor of Epidemiology
          </li>
          <li>
            Ingrid Daubar - Associate Professor of Earth, Environmental, and
            Planetary Sciences (Research)
          </li>
          <li>
            Karianne Bergen - Assistant Professor of Earth, Environmental, and
            Planetary Sciences and Data Science, Assistant Professor of Computer
            Science
          </li>
          <li>Kathi Fisler - Professor of Computer Science (Research)</li>
          <li>
            Louise Manfredi - Associate Professor of the Practice of Engineering
          </li>
          <li>Monica Linden - Distinguished Senior Lecturer in Neuroscience</li>
          <li>Peihan Miao - Assistant Professor of Computer Science</li>
          <li>
            Seda Salap-Ayca - Assistant Professor of the Practice of Earth,
            Environmental, and Planetary Sciences
          </li>
          <li>
            Stephanie Barak - Associate Professor of Pathology and Laboratory
            Medicine, Clinician Educator
          </li>
          <li>
            Suchitra Kamle - Assistant Professor of Molecular Microbiology and
            Immunology (Research)
          </li>
          <li>Theresa Raimondo - Assistant Professor of Engineering</li>
          <li>Xan Chacko - Lecturer in Science, Technology, and Society</li>
          <li>Ying Ma - Assistant Professor of Biostatistics</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Participating Student Groups
        </h2>
        <ul className="list-none text-lg text-black">
          <li>
            American Medical Women's Association -{" "}
            <a href="mailto:brown-amwa@brown.edu">brown-amwa@brown.edu</a>
          </li>
          <li>
            Women in Physics -{" "}
            <a href="mailto:brownwip@gmail.com">brownwip@gmail.com</a>
          </li>
          <li>
            Women in Computer Science -{" "}
            <a href="mailto:wics@lists.cs.brown.edu">wics@lists.cs.brown.edu</a>
          </li>
          <li>
            Society of Women Engineers -{" "}
            <a href="mailto:swe@brown.edu">swe@brown.edu</a>
          </li>
        </ul>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-black mb-6">Thank You</h2>
        <p className="text-lg text-black">
          Thank you to all our amazing faculty and graduate students who have
          been a wonderful source of support and inspiration to women at Brown.
        </p>
        <p className="text-lg text-black">
          Thank you to all our student groups who have put in the time and
          effort to support and create welcoming spaces for women in STEM at
          Brown.
        </p>
      </section>
    </div>
  );
};

export default NetworkingGala;
