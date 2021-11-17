/**
 * Get initial ImageData
 */

export const getInitialImageData = () => {};

/**
 * Generate an image element for Canvas component to render
 *
 * @param src - String source of image
 *
 * @returns HTMLImageElement
 */

export const createImageElementForCanvas = (src: string) => {
  const image = new Image();
  image.src = src;

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
