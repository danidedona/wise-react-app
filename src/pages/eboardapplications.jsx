import React from "react";
import LayoutWrapper from "../components/layoutWrapper";

export default function EBoardApplications() {
  return (
    <LayoutWrapper>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* LEFT COLUMN — 1/4 width */}
        <div className="md:col-span-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-red">
            Positions Available
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Freshman Representative</li>
            <li>Mentor-Mentee Coordinator</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Interested in leadership opportunities with WiSE? Explore these open
            positions and see how you can get involved.
          </p>

          <a
            href="https://docs.google.com/document/d/1Rlxxc9jC-mThVECLfyKnhp1GcILM3wVTY6Z1wxdg20A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-red text-red font-semibold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-red hover:text-white"
          >
            View Full Role Descriptions
          </a>
        </div>

        {/* RIGHT COLUMN — 3/4 width */}
        <div className="md:col-span-3 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-red">
            Application Form
          </h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdFbP_dVTRCX0cQXt3wSE7oR4JgtXlqlClThNStRwJEtUgDhg/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="E-Board Application Form"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </LayoutWrapper>
  );
}
