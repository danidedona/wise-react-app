import React, { useState } from "react";
import { X, Linkedin, Mail } from "lucide-react";
import ImageModal from "../../components/imageModal"; // adjust path if needed

const MemberOverlay = ({ member, onClose }) => {
  if (!member) return null;

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90%] flex flex-col md:flex-row relative overflow-hidden">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black z-10"
            onClick={onClose}
          >
            <X size={28} />
          </button>

          {/* Left section: Image */}
          <div className="md:w-1/3 w-full bg-red/10 flex flex-col items-center justify-center p-6">
            <div
              className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
              onClick={() => {
                setSelectedImage(member.image);
                setShowImageModal(true);
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              {member.name}
            </h2>
            <p className="text-md md:text-lg font-medium text-center">
              {member.pronouns}
            </p>
            <p className="text-red text-md md:text-lg font-medium text-center">
              {member.title}
            </p>
          </div>

          {/* Right section: Info */}
          <div className="md:w-2/3 w-full flex items-center p-6 md:p-10">
            <div className="max-h-full overflow-y-auto text-[17px] leading-relaxed text-left w-full">
              {member.graduation && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 text-lg">Year</h4>
                  <p>{member.graduation}</p>
                </div>
              )}
              {member.concentration && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 text-lg">
                    Concentration
                  </h4>
                  <p>{member.concentration}</p>
                </div>
              )}
              {member.hometown && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 text-lg">
                    Hometown
                  </h4>
                  <p>{member.hometown}</p>
                </div>
              )}
              {member.blurb && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 text-lg">About</h4>
                  <p>{member.blurb}</p>
                </div>
              )}

              {/* Email */}
              {member.email && (
                <div className="mt-8 flex items-center gap-2">
                  <Mail size={22} className="text-blue-600" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 text-base hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              )}

              {/* LinkedIn */}
              {member.linkedin && (
                <div className="mt-4 flex items-center gap-2">
                  <Linkedin size={24} className="text-blue-600" />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-base hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              )}

              {/* Extra photos */}
              {member.extraPhotos?.length > 0 && (
                <div className="mt-16">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {member.extraPhotos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Extra ${i + 1}`}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => {
                          setSelectedImage(src);
                          setShowImageModal(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <ImageModal
          isOpen={showImageModal}
          onClose={() => setShowImageModal(false)}
          imageSrc={selectedImage}
        />
      )}
    </>
  );
};

export default MemberOverlay;
