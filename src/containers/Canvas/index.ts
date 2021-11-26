interface IndexedData {
  [key: number]: number;
}

/**
 * Shuffles image data - Uint8ClampedArray
 *
 * @param {Uint8ClampedArray} data - Image data
 *
 * @returns {Object}
 */

export const getShuffledImageData = (data: Uint8ClampedArray) => {
  const uint8arr = new Uint8ClampedArray(data);
  const randomizedOrder = [];

  for (let i = uint8arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = uint8arr[i];

    randomizedOrder.push(j);

    uint8arr[i] = uint8arr[j];
    uint8arr[j] = temp;
  }

  return {
    imageData: new ImageData(uint8arr, 1080, 1080),
    randomizedOrder,
  };
};

/**
 * Associate pixel data with index
 * @param {Uint8ClampedArray} data
 *
 * @returns {Object}
 */

export const associateDataWithIndex = (dataArr: Uint8ClampedArray) => {
  const dataWithIndex: IndexedData = {};

  dataArr?.forEach((data, index) => {
    dataWithIndex[index] = data;
  });

  return dataWithIndex;
};
