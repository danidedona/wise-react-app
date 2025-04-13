import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageModal from "../../components/imageModal";
import LayoutWrapper from "../../components/layoutWrapper";

const SingleEvent = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const allModules = import.meta.glob("./pastEventsData/*.jsx");

        const matchedPath = Object.keys(allModules).find((path) =>
          path.includes(`/${slug}.jsx`)
        );

        if (!matchedPath) {
          console.error("No matching file for slug:", slug);
          return;
        }

        const module = await allModules[matchedPath]();
        const eventData = module.default;
        setEvent(eventData);

        const folder = eventData.imageFolder;
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

        const foundImages = [];
        let index = 1;

        const testImage = (url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(null);
          });
        };

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
      } catch (err) {
        console.error("Error loading event or images:", err);
      }
    };

    loadEvent();
  }, [slug]);

  if (!event) return <p className="text-center mt-20">Loading event...</p>;

  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center text-center w-full max-w-7xl">
        <h1 className="text-5xl font-semibold mb-4">{event.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{event.date}</p>
        <p className="text-xl max-w-3xl mb-12">{event.description}</p>

        {images.length < 5 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Event image ${i + 1}`}
                className="w-full max-w-[300px] h-auto object-cover rounded-xl shadow-md cursor-pointer"
                onClick={() => {
                  setSelectedImage(src);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mx-auto">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Event image ${i + 1}`}
                className="w-full max-w-[300px] h-auto object-cover rounded-xl shadow-md cursor-pointer"
                onClick={() => {
                  setSelectedImage(src);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
      />
    </LayoutWrapper>
  );
};

export default SingleEvent;
