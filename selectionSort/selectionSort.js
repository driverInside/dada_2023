/**
 * Selection Sort
 *           |
 * [6, 8, 4, 1, 7, 9, 2]  ->  [1, 2, 4, 6, 7, 8, 9]
 *  i                 j                           
 * Pseudocodigo
 *
 * SelectionSort(arr):
 * input: An array A[0..n-1] of orderable elements
 * output: An array A[0..n-1] of sorted elements
 * 
 * FOR i <- 0 TO n - 2 DO:
 *   min <- i
 *   FOR j <- i + 1 to n - 1 DO:
 *     IF A[j] < A[min]: 
 *       min <- j
 *   SWAP A[i] and A[min]
 *  
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let aux = arr[i];
    arr[i] = arr[min];
    arr[min] = aux;
  }

  return arr;
}

const arr = [6, 8, 4, 1, 7, 9, 2];
console.log(selectionSort(arr)) // [1, 2, 4, 6, 7, 8, 9]
