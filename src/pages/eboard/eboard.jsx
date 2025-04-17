import React from "react";
import { useState } from "react";
import LayoutWrapper from "../../components/layoutWrapper";
import MemberOverlay from "./memberOverlay";

const EBoard = () => {
  const teamMembers = [
    {
      name: "Helen Chow",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Neuroscience, Entrepreneurship",
      hometown: "San Francisco, CA",
      blurb:
        "I've been part of WiSE throughout my undergrad, serving as mentor, Website & Newsletter Chair, and now co-President! I've loved sharing my passion for science and forming stronger connections with other women in STEM. Outside of WiSE, I am on the executive board of Chinese Students Association and Brown Pre-Dental Society. I love playing bridge, snowboarding, and sailing with my family and friends.",
      email: "helen_chow@brown.edu",
      linkedin: "https://www.linkedin.com/in/helen-chow-539b93202/",
      title: "Co-President",
      image: "/people/helen/helen.jpg",
      extraPhotos: [],
    },
    {
      name: "Aiai Calmer",
      pronouns: "",
      graduation: "",
      concentration: "Neuroscience, History",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Co-President",
      image: "/people/aiai/aiai.jpg",
      extraPhotos: [],
    },

    {
      name: "Jessica Ding",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Neuroscience, Philosophy",
      hometown: "Dallas, TX",
      blurb:
        "Hey everyone! I'm Jessica (CO 2026), the Events Chair for WiSE! I'm from Dallas, TX and am concentrating in neuroscience and philosophy. I joined WiSE in my freshman year and have loved getting to connect with other women in STEM on campus <3 In my free time, I enjoy eating Sichuan food, playing Catan, and going to concerts!",
      email: "jessica_ding@brown.edu",
      linkedin: "www.linkedin.com/in/jessica-ding-235788229",
      title: "Events Chair",
      image: "/people/jessica/jessica.png",
      extraPhotos: [],
    },
    {
      name: "Rita Li",
      pronouns: "",
      graduation: "",
      concentration: "",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Planning Committee",
      image: "/people/rita/rita.png",
      extraPhotos: [],
    },
    {
      name: "Sarah Wafa",
      pronouns: "",
      graduation: "",
      concentration: "",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Planning Committee",
      image: "/people/sarah/sarah.jpg",
      extraPhotos: [],
    },
    {
      name: "Farah Yahaya",
      pronouns: "",
      graduation: "",
      concentration: "Cognitive Neuroscience, Literary Arts",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Mentor-Mentee Coordinator",
      image: "/people/farah/farah.jpg",
      extraPhotos: [],
    },
    {
      name: "Medha Gereddy",
      pronouns: "",
      graduation: "",
      concentration: "Chemical Physics",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Financial Liason",
      image: "/people/medha/medha.jpg",
      extraPhotos: [],
    },
    {
      name: "Moe Shishido",
      pronouns: "",
      graduation: "",
      concentration: "",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Financial Liason",
      image: "/people/moe/moe.png",
      extraPhotos: [],
    },
    {
      name: "Fara Odunlami",
      pronouns: "",
      graduation: "",
      concentration: "Engineering",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Financial Liason",
      image: "/people/fara/fara.jpg",
      extraPhotos: [],
    },
    {
      name: "Amelia Allen",
      pronouns: "she/her",
      graduation: "2027",
      concentration: "Biomedical Engineering",
      hometown: "Oakland, CA",
      blurb:
        "Hi!! I’m a sophomore from Oakland, CA. I’m a BME concentrator. I enjoy going to concerts, TV, and crafts. I have been a WiSE mentor for 2 years, Eboard member for 1 year, and mentor for 1 year.  ",
      email: "amelia_allen@brown.edu",
      linkedin: "www.linkedin.com/in/amelia-allen27 ",
      title: "Communications",
      image: "/people/amelia/amelia.jpg",
      extraPhotos: [],
    },
    {
      name: "Tatiana Sy",
      pronouns: "",
      graduation: "",
      concentration: "Design Engineering",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Communications",
      image: "/people/tatiana/tatiana.jpg",
      extraPhotos: [],
    },
    {
      name: "Lisa Miyazaki",
      pronouns: "",
      graduation: "",
      concentration: "Biology, Public Health",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Newsletter",
      image: "/people/lisa/lisa.jpeg",
      extraPhotos: [],
    },
    {
      name: "Daniela DeDona",
      pronouns: "she/they",
      graduation: "2026",
      concentration: "Computer Science, Cognitive Science",
      hometown: "Mahopac, NY",
      blurb:
        "Hi all! I'm a junior from the middle of nowhere, NY. I'm a CS^2 concentrator (computer and cognitive science). Besides stem, I adore listening to music, ballroom dance, and the outdoors! I have been an active member of WiSE for 3 years and a mentor for 1. I cant wait to share the experience of being a WiSE member with you all!",
      email: "daniela_dedona@brown.edu",
      linkedin: "https://www.linkedin.com/in/daniela-dedona/",
      title: "Website Developer",
      image: "/people/daniela/daniela.png",
      extraPhotos: [],
    },
    {
      name: "Kaylee DeGennaro",
      pronouns: "",
      graduation: "",
      concentration: "Physics",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "First Year Rep",
      image: "/people/kaylee/kaylee.jpg",
      extraPhotos: [],
    },
    {
      name: "Lavanya Garg",
      pronouns: "",
      graduation: "",
      concentration: "Computational Biology",
      hometown: "",
      blurb: "",
      email: "",
      linkedin: "",
      title: "Freshman Rep",
      image: "/people/lavanya/lavanya.jpg",
      extraPhotos: [],
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <LayoutWrapper>
      <h1
        className="text-4xl sm:text-6xl font-semibold text-black mb-12"
        style={{ fontFamily: "'Atteron', serif" }}
      >
        Meet the E-Board
      </h1>

      {/* Mobile: 2-column grid | Desktop: custom flex rows */}
      <div className="block md:hidden grid grid-cols-2 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[140px] sm:w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedMember(member)}
          >
            <div className="bg-red p-1.5 rounded-xl w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[180px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-center font-semibold mt-3">{member.name}</h3>
            <p className="text-center text-red text-sm">{member.title}</p>
          </div>
        ))}
      </div>

      {/* Desktop only: manual rows */}
      <div className="hidden md:flex flex-col gap-12 w-full items-center">
        {[2, 4, 3, 4, 2]
          .reduce(
            (acc, len) => {
              const row = teamMembers.slice(acc.offset, acc.offset + len);
              acc.offset += len;
              acc.rows.push(row);
              return acc;
            },
            { rows: [], offset: 0 }
          )
          .rows.map((row, i) => (
            <div
              key={i}
              className={`flex gap-8 justify-center ${
                row.length === 2
                  ? "max-w-[360px]"
                  : row.length === 3
                  ? "max-w-[560px]"
                  : row.length === 4
                  ? "max-w-[760px]"
                  : ""
              }`}
            >
              {row.map((member, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="bg-red p-1.5 rounded-xl w-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[180px] object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-center font-semibold mt-3">
                    {member.name}
                  </h3>
                  <p className="text-center text-red text-sm">{member.title}</p>
                </div>
              ))}
            </div>
          ))}
      </div>

      {selectedMember && (
        <MemberOverlay
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </LayoutWrapper>
  );
};

export default EBoard;
