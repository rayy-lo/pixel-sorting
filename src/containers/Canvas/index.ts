/**
 * Get ImageData from image using an in memory canvas
 *
 * @param image
 *
 * @param tileWidth - Width of each tile
 *
 * @param tileHeight - Height of each tile
 *
 * @returns Uint8ClampedArray
 */

export const getImageData = (
  image: HTMLImageElement,
  tileWidth: number = 32,
  tileHeight: number = 32
): Uint8ClampedArray => {
  const inMemoryCanvas = document.createElement("canvas");
  const ctx = inMemoryCanvas.getContext("2d");
  ctx?.drawImage(image, 0, 0);

  const imageData = ctx?.getImageData(0, 0, tileWidth, tileHeight);

  // return imageData;

  console.log(imageData.data);
  return new Uint8ClampedArray([]);
};

/**
 * Generate an image element for Canvas component to render
 * @async
 *
 * @param src - String source of image
 *
 * @returns HTMLImageElement
 */

export const createImageElement = (src: string): HTMLImageElement => {
  const image = new Image();
  image.onload = () => {
    image.src = src;
  };

  return image;
};

/**
 * Shuffles array
 *
 * @param data - Canvas data: Uint8ClampedArray
 *
 * @returns Uint8ClampedArray
 */

export const shuffleArray = (data: Uint8ClampedArray) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
};
