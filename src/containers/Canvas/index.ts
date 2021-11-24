/**
 * Shuffles image data - Uint8ClampedArray
 *
 * @param {Uint8ClampedArray} data - Image data
 *
 * @returns {ImageData}
 */

export const getShuffledImageData = (data: Uint8ClampedArray) => {
  const uint8arr = new Uint8ClampedArray(data);

  for (let i = uint8arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = uint8arr[i];
    uint8arr[i] = uint8arr[j];
    uint8arr[j] = temp;
  }

  return new ImageData(uint8arr, 1080, 1080);
};

/**
 * Associate pixel data with index
 * @param {Uint8ClampedArray} data
 *
 * @returns {Object[]}
 */

export const associateDataWithIndex = (
  dataArr: Uint8ClampedArray | undefined
) => {
  const dataWithIndex: Object[] = [];

  dataArr?.forEach((data, index) => {
    dataWithIndex.push({ index, rgba: data });
  });

  return dataWithIndex;
};
