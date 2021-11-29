/**
 * Sort pixel data - Time Complexity O(n^2)
 *
 * @param {}
 *
 * @returns {ImageData}
 */
export const quadraticSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
};
