import React from "react";

const EBoard = () => {
  const teamMembers = [
    {
      name: "Helen Chow '26",
      title: "Co-President",
      image: "/people/helen.jpg",
    },
    {
      name: "Aiai Calmer '26",
      title: "Co-President",
      image: "/people/aiai.jpg",
    },
    {
      name: "Jessica Ding",
      title: "Events Chair",
      image: "/people/jessica.jpg",
    },
    { name: "Rita Li", title: "Planning Committee", image: "/people/rita.jpg" },
    {
      name: "Sarah Wafa",
      title: "Planning Committee",
      image: "/people/sarah.jpg",
    },
    {
      name: "Farah Yahaya",
      title: "Mentor-Mentee Coordinator",
      image: "/farah.jpg",
    },
    {
      name: "Medha Gereddy",
      title: "Financial Liason",
      image: "/people/medha.jpg",
    },
    {
      name: "Moe Shishido",
      title: "Financial Liason",
      image: "/people/moe.jpg",
    },
    {
      name: "Fara Odunlami",
      title: "Financial Liason",
      image: "/people/fara.jpg",
    },
    {
      name: "Amelia Allen '27",
      title: "Communications",
      image: "/people/amelia.png",
    },
    {
      name: "Tatiana Sy",
      title: "Communications",
      image: "/people/tatiana.jpg",
    },
    { name: "Lisa Miyazaki", title: "Newsletter", image: "/people/lisa.jpg" },
    {
      name: "Daniela DeDona",
      title: "Website Developer",
      image: "daniela.png",
    },
    {
      name: "Kaylee DeGennaro '28",
      title: "First Year Rep",
      image: "/people/kaylee.jpg",
    },
    {
      name: "Lavanya Garg '28",
      title: "Freshman Rep",
      image: "/people/lavanya.jpg",
    },
  ];

  // Manual row slicing
  const rows = [
    teamMembers.slice(0, 2),
    teamMembers.slice(2, 6),
    teamMembers.slice(6, 9),
    teamMembers.slice(9, 13),
    teamMembers.slice(13, 15),
  ];

  return (
    <div
      className="flex flex-col items-center w-screen min-h-screen px-4 sm:px-36 pt-20"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      <h1 className="text-6xl font-semibold text-black mb-12">
        Meet the E-Board
      </h1>

      <div className="flex flex-col gap-12 w-full items-center">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex gap-8 flex-wrap justify-center ${
              row.length === 2
                ? "max-w-[360px]"
                : row.length === 3
                ? "max-w-[560px]"
                : row.length === 4
                ? "max-w-[760px]"
                : row.length === 5
                ? "max-w-[960px]"
                : ""
            }`}
          >
            {row.map((member, j) => (
              <div
                key={j}
                className="flex flex-col items-center w-[140px] sm:w-[160px]"
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
                <p className="text-center text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EBoard;
