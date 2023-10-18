/**
 * Bubble sort
 * 
 * [6, 8, 4, 1, 7, 9, 2]  ->  [1, 2, 4, 6, 7, 8, 9]      n(n - 1) / 2 => O(n^2)
 *  i  j
 * Pseudocódigo
 * 
 * BubbleSort(A):
 * input: An array A[0..n-1] of orderable elements
 * output: An array A[0..n-1] of sorted elements
 * FOR i <- 0 TO n - 2 DO:
 *   FOR j <- 0 to n - 2 - 1 DO:
 *      IF A[j + 1] < A[j]:                             // SWAP A[j] and A[j + 1]
 *         aux <- A[j]
 *         A[j] <- A[j+1]
 *         A[j+1] <- aux
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let aux    = arr[j];
        arr[j]     = arr[j + 1];
        arr[j + 1] = aux
      }
    }
  }
  return arr;
}

// const arr = [6, 8, 4, 1, 7, 9, 2];
const arr = [3, 2, 1];

console.log(bubbleSort(arr)) // [1, 2, 4, 6, 7, 8, 9]
