import React from "react";

interface ImageGalleryProps {
  images: string[]; // Array of image filenames
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`video-gallery-container`}>
      {images.map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img
            src={`${image}`}
            alt={`Gallery image ${index + 1}`}
            className="image-gallery-img"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
