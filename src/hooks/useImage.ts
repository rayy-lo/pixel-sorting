import { useState, useEffect, useRef } from "react";

export const useImage = (src: string) => {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    const handleOnload = () => {
      const inMemoryCanvas = document.createElement("canvas");
      const ctx = inMemoryCanvas.getContext("2d");

      ctx?.drawImage(image, 0, 0);
      const imageData = ctx?.getImageData(0, 0, 32, 32);
      if (imageData) {
        setImageData(imageData);
      }
    };

    const image = new Image();
    image.onload = handleOnload;
    image.src = src;
  }, []);

  return imageData.data;
};
