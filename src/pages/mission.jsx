import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-4 sm:px-36 pt-20">
      {/* Top Section: Logo + Text + Logo */}
      <div className="flex items-center justify-center w-full mb-8">
        <img
          src="/molecule1.png" // Replace with your actual logo path
          alt="Molecule"
          className="h-24 mx-4"
        />
        <h1
          className="text-6xl font-semibold text-black"
          style={{ fontFamily: "'Atteron', serif" }}
        >
          Mission
        </h1>
        <img
          src="/molecule2.png" // Replace with your actual logo path
          alt="Molecule"
          className="h-24 mx-4"
        />
      </div>

      {/* Mission Text Block */}
      <div
        className="text-center max-w px-4 mt-4 text-4xl text-black mx-16"
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
    </div>
  );
};

export default Mission;
