/**
 * Shuffles image data - Uint8ClampedArray
 *
 * @param data - Image data: Uint8ClampedArray
 *
 * @returns Uint8ClampedArray
 */

export const getShuffledImageData = (data: Uint8ClampedArray | undefined) => {
  if (!data) return;

  const uint8arr = new Uint8ClampedArray(data);

  for (let i = uint8arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = uint8arr[i];
    uint8arr[i] = uint8arr[j];
    uint8arr[j] = temp;
  }

  return new ImageData(uint8arr, 1080, 1080);
};
