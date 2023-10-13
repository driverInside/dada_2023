/**
 * Binary search
 * 
 *          [2, 4, 6, 7, 9, 11, 19]
 *           l                   h
 * 
 * BinarySearch(arr, ele)
 * // input: sorted integer array, element to search
 * // output: ele or -1
 * low <- 0
 * high <- n - 1
 * 
 * WHILE low <= high DO:
 *   mid <- (low + high) / 2
 *   
 *   IF ele = arr[mid]:
 *     return arr[mid]
 * 
 *   IF arr[mid] > ele:
 *     high <- mid - 1
 *   ELSE:
 *     low <- mid + 1
 *  
 * 
 * return -1
 */
function binarySearch(arr, ele) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === ele) {
      return arr[mid];
    }

    if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

const arr = [2, 4, 6, 7, 9, 11, 19];
let ele = 7;

console.log(binarySearch(arr, ele)); // 7

ele = 8;

console.log(binarySearch(arr, ele)); // -1



// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomIntInclusive(0, 22));
