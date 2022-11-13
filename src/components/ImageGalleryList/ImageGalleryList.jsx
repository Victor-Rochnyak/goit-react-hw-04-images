import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import React from "react";

export default function ImageGalleryList({ images, isLoading }) {
  return (
    <ul className="ImageGallery">
      {images.map((hit) => (
        <ImageGalleryItem
          key={hit.id}
          smallImage={hit.webformatURL}
          tags='tags'
          largeImage={hit.largeImageURL}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
}
