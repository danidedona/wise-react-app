import React from "react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Home = () => {
  const images = [
    {
      title: "Image One",
      link: "#",
      imageUrl: "/homepage/AMWA x WISE Panel 10.18.23.jpg",
    },
    {
      title: "Image Two",
      link: "#",
      imageUrl: "/homepage/IMG_1559.JPG",
    },
    {
      title: "Image Three",
      link: "#",
      imageUrl: "/homepage/IMG_1573.JPG",
    },
    {
      title: "Image Four",
      link: "#",
      imageUrl: "/homepage/IMG_1857.JPG",
    },
    {
      title: "Image Five",
      link: "#",
      imageUrl: "/homepage/IMG_6375.JPG",
    },
    {
      title: "Image Six",
      link: "#",
      imageUrl: "/homepage/Networking session.jpeg",
    },
    {
      title: "Image Seven",
      link: "#",
      imageUrl: "/homepage/Senior gifts.jpeg",
    },
    {
      title: "Image Eight",
      link: "#",
      imageUrl: "/homepage/squareplaceholder.png",
    },
    {
      title: "Image Nine",
      link: "#",
      imageUrl: "/homepage/squareplaceholder.png",
    },
    {
      title: "Image Ten",
      link: "#",
      imageUrl: "/homepage/longplaceholder.jpg",
    },
    {
      title: "Image Eleven",
      link: "#",
      imageUrl: "/homepage/squareplaceholder.png",
    },
    {
      title: "Image Tweleve",
      link: "#",
      imageUrl: "/homepage/medplaceholder.jpeg",
    },
  ];

  return (
    <div className="px-36 py-24">
      {/* First Section: Title, Description, Button, and Image */}
      <section className="flex flex-col md:flex-row items-center space-x-8 pr-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h1
            className="text-7xl font-semibold mb-6 text-black"
            style={{ fontFamily: "'Atteron', serif" }}
          >
            WiSE
          </h1>
          <p
            className="text-2xl mb-8 leading-snug text-black"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Pre-professional and recreational <br />
            activities for all Women in STEM at <br />
            Brown University
          </p>
          <Link to="/join">
            <button className="bg-medPink text-black px-8 py-4 text-xl rounded-md transition-transform duration-300 hover:-translate-y-1">
              JOIN!
            </button>
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <img
            src="/images/longplaceholder.jpg" // Replace with your image path
            alt="WiSE"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Collage Section */}
      <section className="mt-12">
        <ImageList variant="masonry" cols={5} gap={10}>
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain", // key to preserving aspect ratio
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </div>
  );
};

export default Home;
