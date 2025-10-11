import React, { useState } from "react";
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
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Neuroscience, History",
      hometown: "Highland, MD",
      blurb:
        "Aiai has been a part of WiSE for her entire undergraduate career and thinks of WiSE as her second home. She loves organizing programming that connects women in STEM across campus and mentoring underclasssmen 1-1 as a part of the mentor-mentee program. Aiai is excited to work with everyone on the E-Board again and continue fostering relationships for underserved communities in science fields. You can find Aiai TAing for NEUR1030 and walking her adorable dog Gigi.",
      email: "aiai_calmer@brown.edu",
      linkedin: "https://www.linkedin.com/in/aiaicalmer/",
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
      title: "Communications",
      image: "/people/jessica/jessica.png",
      extraPhotos: [],
    },
    {
      name: "Rita Li",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "APMA-Econ, Cognitive Science",
      hometown: "Woodbury, MN",
      blurb:
        "Rita is a sophomore from Minnesota, and this is her third semester at WiSE. A fun fact about her is that she spent half her life growing up in China. In her free time, she enjoys playing tennis, going on after-meal walks, and karaoke.",
      email: "rita_li@brown.edu",
      linkedin: "www.linkedin.com/in/rita-li-176b16324",
      title: "Events",
      image: "/people/rita/rita.png",
      extraPhotos: [],
    },
    {
      name: "Fara Odunlami",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Cognitive Neuroscience, Literary Arts",
      hometown: "Morristown, NJ",
      blurb:
        "Fara is a senior from New Jersey, studying Computer Science, Enginering and Literary Arts. This is her third year on the finance team for WISE and she's excited to get to know the new members! She loves reading, writing, and live music.",
      email: "",
      linkedin: "https://www.linkedin.com/in/fara-odunlami/",
      title: "Financial Liaison",
      image: "/people/fara/fara.png",
      extraPhotos: [],
    },
    {
      name: "Medha Gereddy",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Chemical Physics",
      hometown: "Mechanicsburg, PA",
      blurb:
        "Medha is a senior from central PA studying Chemical Physics at Brown, and she has been a member of WiSE's finance/sponsorship team for three years. She plans on pursuing a PhD in physical/quantum chemistry or nanoengineering and is involved in physics and chemistry research at Brown. She is also a sophomore transfer and always willing to give advice to other TRUE students, especially those who are more undecided about their path at Brown.",
      email: "medha_gereddy@brown.edu",
      linkedin: "",
      title: "Sponsorship Liaison",
      image: "/people/medha/medha.jpg",
      extraPhotos: [],
    },
    {
      name: "Momo (Moe) Shishido",
      pronouns: "she/her",
      graduation: "2027",
      concentration: "Biochemistry and Molecular Biology",
      hometown: "Japan, Thailand, and Hong Kong",
      blurb:
        "Momo is a junior from Japan, Thailand and Hong Kong studying Biochemistry and Molecular Biology and has been a part of WiSE since her sophomore year. In her free time, she loves to go restaurant/cafe hopping in Providence, go to concerts and have movie nights:)",
      email: "moe_shishido@brown.edu",
      linkedin: "https://www.linkedin.com/in/moe-s1118/",
      title: "Financial Liaison + Treasurer",
      image: "/people/moe/moe.jpg",
      extraPhotos: [],
    },
    {
      name: "Amelia Allen",
      pronouns: "she/her",
      graduation: "2027",
      concentration: "Biomedical Engineering",
      hometown: "Oakland, CA",
      blurb:
        "Hi!! I’m a junior from Oakland, CA. I’m a BME concentrator. I enjoy going to concerts, TV, and crafts. This is my second year on the WiSE EB team!",
      email: "amelia_allen@brown.edu",
      linkedin: "www.linkedin.com/in/amelia-allen27",
      title: "Communications",
      image: "/people/amelia/amelia.jpg",
      extraPhotos: [],
    },
    {
      name: "Lisa Miyazaki",
      pronouns: "she/her",
      graduation: "2026",
      concentration: "Public Health, Biology",
      hometown: "Hawai’i",
      blurb:
        "Lisa is a senior from Hawai'i studying Biology and Public Health. Outside of school, Lisa enjoys trying new restaurants and coffee shops. She is excited for another amazing year with WiSE!",
      email: "lisa_miyazaki@brown.edu",
      linkedin: "",
      title: "Communications + Newsletter",
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
        "Daniela is a senior from New York, concentrating in Computer Science and Cognitive Science (CS²). Outside of STEM, she loves going to concerts, ballroom dancing, and spending time outdoors. She has been an active member of WiSE since her freshman year and is excited to share the experience of being a WiSE member with others!",
      email: "daniela_dedona@brown.edu",
      linkedin: "https://www.linkedin.com/in/daniela-dedona/",
      title: "Website Developer",
      image: "/people/daniela/daniela.png",
      extraPhotos: [],
    },
    {
      name: "Lavanya Garg",
      pronouns: "she/her",
      graduation: "2028",
      concentration: "Computational Biology and Behavioral Decision Sciences",
      hometown: "India and the Philippines",
      blurb:
        "Lavanya is a sophmore from India and the Philippines studying comp bio and maybe behavioral decision sciences. This is her second year on the eb!",
      email: "lavanya_garg@brown.edu",
      linkedin: "www.linkedin.com/in/lavanya-garg-2005-lg",
      title: "Events",
      image: "/people/lavanya/lavanya.jpg",
      extraPhotos: [],
    },
    {
      name: "Hilary Nguyen",
      pronouns: "she/her",
      graduation: "2027",
      concentration: "Biochemistry and Molecular Biology, Pre-Pharmacy track",
      hometown: "San Diego, CA",
      blurb:
        "Hilary is a junior from San Diego, CA studying Biochemistry on the pre-pharmacy track. Hilary has been involved in WiSE since freshman year, serving as a mentor and now the Mentor-Mentee Coordinator. Outside of WiSE, she enjoys spending time in lab running experiments and chatting with her lab mates, and she also loves to sew, cook/bake, sing, and dance.",
      email: "hilary_nguyen@brown.edu",
      linkedin: "https://www.linkedin.com/in/hilary-nguyen-866615261/",
      title: "Mentor-Mentee Coordinator",
      image: "/people/hilary/hilary.jpg",
      extraPhotos: [],
    },
    {
      name: "Ricci Waksman",
      pronouns: "she/her",
      graduation: "2028",
      concentration: "Biomedical Engineering, Entrepreneurship",
      hometown: "South Africa",
      blurb:
        "Ricci is a sophomore from Johannesburg, South Africa studying Biomedical Engineering and Entrepreneurship. In her free time she loves to play the New York Times Games, crochet, and go for boba with friends!",
      email: "ricci_waksman@brown.edu",
      linkedin: "www.linkedin.com/in/ricci-waksman-144b78370",
      title: "Mentor-Mentee Coordinator",
      image: "/people/ricci/ricci.jpg",
      extraPhotos: [],
    },
    {
      name: "Sophia Milausnic",
      pronouns: "she/her",
      graduation: "2029",
      concentration: "Biophysics",
      hometown: "Reston, Virginia",
      blurb:
        "Sophia is a freshman from Northern Virginia who is excited to uplift other women at Brown with fun events and career opportunities. Outside of WiSE, Sophia spends her time playing the bassoon in the Brown University Orchestra, going to the gym, and trying new food spots in Providence.",
      email: "sophia_milausnic@brown.edu",
      linkedin: "",
      title: "Underclassmen Representative",
      image: "/people/sophia/sophia.jpg",
      extraPhotos: [],
    },
    {
      name: "Nikoleta Stoynova",
      pronouns: "she/her",
      graduation: "2029",
      concentration: "Mechanical Engineering",
      hometown: "Kazanlak, Bulgaria",
      blurb:
        "Nikoleta is a freshman from Bulgaria, planning to study Mechanical Engineering. Her passion for science has been passed from her mother. She hopes to continue growing the impact WiSE has on women pursuing STEM careers. Outside of STEM, Nikoleta loves playing and watching tennis, photography and travelling.",
      email: "nikoleta_stoynova@brown.edu",
      linkedin:
        "https://www.linkedin.com/in/nikoleta-stoynova-4b0345247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      title: "Underclassmen Representative",
      image: "/people/nikoleta/nikoleta.jpg",
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

      {/* Mobile (≤md) */}
      <div className="block md:hidden grid grid-cols-2 gap-6 justify-items-center">
        {teamMembers.map((member, i) => (
          <MemberCard
            key={i}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Medium (md < width < lg) */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, i) => (
          <MemberCard
            key={i}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Large (≥lg) */}
      <div className="hidden lg:flex flex-col gap-12 w-full items-center">
        {[2, 3, 3, 3, 4]
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
              className={`flex flex-wrap gap-8 justify-center ${
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
                <MemberCard
                  key={j}
                  member={member}
                  onClick={() => setSelectedMember(member)}
                />
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

/* Reusable small card component */
const MemberCard = ({ member, onClick }) => (
  <div
    className="flex flex-col items-center w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200"
    onClick={onClick}
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
);

export default EBoard;
