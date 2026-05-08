/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, middle));
  const arrRight = mergeSort(arr.slice(middle));
  return merged(arrLeft, arrRight);
}

function merged(arr1, arr2) {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] < arr1[i]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}
