import React from "react";
import LayoutWrapper from "../components/layoutWrapper";

const Mission = () => {
  return (
    <LayoutWrapper>
      {/* Top Section: Logo + Text + Logo */}
      <div className="flex flex-row items-center justify-center w-full mb-8 text-center gap-4 sm:gap-0">
        <img
          src="/images/molecule1.png"
          alt="Molecule"
          className="h-16 sm:h-24 mx-2"
        />
        <h1
          className="text-4xl sm:text-6xl font-semibold text-black"
          style={{ fontFamily: "'Atteron', serif" }}
        >
          Mission
        </h1>
        <img
          src="/images/molecule2.png"
          alt="Molecule"
          className="h-16 sm:h-24 mx-2"
        />
      </div>

      {/* Mission Text Block */}
      <div
        className="text-center px-4 mt-4 text-lg sm:text-xl md:text-2xl text-black max-w-4xl mx-auto"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        <p>
          Women in Science and Engineering (WiSE) is dedicated to fostering
          mentorship and networking opportunities for women in the fields of
          science and engineering. Our primary goal is to connect women with
          diverse and promising career-focused prospects in the sciences. We are
          committed to empowering and nurturing female leadership within these
          fields, advocating for equal representation and advancement. As the
          umbrella "Women in STEM" organization on campus, we aim to unite and
          support women from all scientific disciplines, creating a powerful
          community that strives for inclusivity and excellence in the world of
          STEM.
        </p>
      </div>
    </LayoutWrapper>
  );
};

export default Mission;
