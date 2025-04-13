import React from "react";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-right controls */}
        <div className="absolute top-4 right-4 flex gap-3 z-50">
          <button
            onClick={onClose}
            className="bg-white text-black text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-red hover:text-white transition"
            aria-label="Close"
          >
            &times;
          </button>
          <a
            href={imageSrc}
            download
            className="bg-white text-black text-sm px-4 py-2 rounded-full shadow hover:bg-red hover:text-white transition flex items-center justify-center"
          >
            Download
          </a>
        </div>

        {/* Full Image */}
        <img
          src={imageSrc}
          alt="Full Size"
          className="w-full max-h-[90vh] object-contain mx-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageModal;
