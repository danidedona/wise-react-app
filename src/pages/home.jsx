import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageModal from "../components/imageModal";
import LayoutWrapper from "../components/layoutWrapper";

const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [columns, setColumns] = useState(5);

  // Adjust columns based on window width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Dynamically load images from public/homepage
  useEffect(() => {
    const folder = "/homepage";
    const extensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".heic",
      ".HEIC",
      ".JPG",
      ".JPEG",
      ".PNG",
      ".WEBP",
    ];

    const loadImages = async () => {
      const foundImages = [];
      let index = 1;

      const testImage = (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url);
          img.onerror = () => resolve(null);
        });

      while (index <= 100) {
        let validUrl = null;
        for (const ext of extensions) {
          const url = `${folder}/${index}${ext}`;
          const result = await testImage(url);
          if (result) {
            validUrl = url;
            break;
          }
        }
        if (!validUrl) break;
        foundImages.push(validUrl);
        index++;
      }

      setImages(foundImages);
    };

    loadImages();
  }, []);

  return (
    <LayoutWrapper>
      {/* Top Section */}
      <section className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">
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
          <a
            href="https://wiseatbrown.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-medPink text-black px-8 py-4 text-xl rounded-md transition-transform duration-300 hover:-translate-y-1">
              JOIN!
            </button>
          </a>
        </div>

        <div className="flex-1">
          <img
            src="/homepage/cover/cover.jpg"
            alt="WiSE"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Masonry Collage Section */}
      <section className="mt-16">
        <div className="w-full max-w-screen-xl mx-auto px-2">
          <ImageList variant="masonry" cols={columns} gap={12}>
            {images.map((src, i) => (
              <ImageListItem key={i}>
                <img
                  src={src}
                  alt={`Homepage collage ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-xl shadow-md cursor-pointer"
                  onClick={() => {
                    setSelectedImage(src);
                    setModalOpen(true);
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </section>

      {/* Modal Viewer */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
      />
    </LayoutWrapper>
  );
};

export default Home;
