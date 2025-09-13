import React, { useState } from "react";

const Footer = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <footer className="bg-lightPink text-gray-700 px-6 py-6 mt-12 border-t-4 border-red">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Mobile condensed disclaimer */}
        <div className="block md:hidden text-[10px] leading-snug">
          {!showFull ? (
            <p>
              Content is generated independently by UCS/GSC recognized student
              organizations and does not necessarily reflect Brown University.{" "}
              <span
                onClick={() => setShowFull(true)}
                className="text-blue-600 underline cursor-pointer"
              >
                Read full disclaimer
              </span>
            </p>
          ) : (
            <p>
              The content of UCS/GSC recognized student organization websites is
              generated independently from Brown University. The statements,
              views, opinions, and information contained on the site are
              personal to those of the authors and student organization and do
              not necessarily reflect those of Brown University. The content on
              the site is not reviewed, approved, or endorsed by Brown
              University or its faculty or staff.{" "}
              <span
                onClick={() => setShowFull(false)}
                className="text-blue-600 underline cursor-pointer"
              >
                Show less
              </span>
            </p>
          )}
        </div>

        {/* Full disclaimer for medium+ screens */}
        <div className="hidden md:block space-y-4 text-xs leading-relaxed">
          <p>
            The content of UCS/GSC recognized student organization websites is
            generated independently from Brown University. The statements,
            views, opinions, and information contained on the site are personal
            to those of the authors and student organization and do not
            necessarily reflect those of Brown University. The content on the
            site is not reviewed, approved, or endorsed by Brown University or
            its faculty or staff.
          </p>
        </div>

        {/* Small footer note */}
        <p className="text-[10px] text-gray-500 text-center">
          © {new Date().getFullYear()} WiSE at Brown University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
