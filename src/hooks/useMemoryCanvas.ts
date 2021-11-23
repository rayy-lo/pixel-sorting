import { useState, useEffect } from "react";

export const useMemoryCanvas = (src: string) => {
  const [imageData, setImageData] = useState<ImageData>();

  useEffect(() => {
    const handleOnload = () => {
      const inMemoryCanvas = document.createElement("canvas");
      const ctx = inMemoryCanvas.getContext("2d");

      inMemoryCanvas.width = image.naturalWidth;
      inMemoryCanvas.height = image.naturalHeight;

      ctx?.drawImage(image, 0, 0);
      const imageData = ctx?.getImageData(
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      );
      if (imageData) {
        setImageData(imageData);
      }
    };

    const image = new Image();
    image.onload = handleOnload;
    image.src = src;
  }, []);

  return imageData;
};
