/**
 * Un elemento en un arreglo es dominante si es mayor al de su derecha.
 * Crear una función que regrese todos los elementos dominantes en un arreglo.
 * 
 * dominant([1, 21, 4, 7, 5]) // [21, 7]
 * dominant([5, 4, 3, 2, 1])  // [5, 4, 3, 2]
 * [21, 7]
 *      k
 * [1, 21, 4, 7, 5]
 *            i             
 * 
 * Pseudocódigo
 * 
 * dominants(A):
 * // input: Un arreglo de números 
 * // output: Un arreglo con los números "dominantes"
 * B <- []
 * k <- 0
 * FOR i <- 0 TO n - 2:
 *   IF A[i + 1] < A[i]:
 *     B[k] <- A[i]
 *     k <- k + 1
 * RETURN B
 */
function dominants(arr) {
  const result = [];
  let k = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      result[k] = arr[i];
      k++;
    }
  }

  return result;
}

console.log(dominants([1, 21, 4, 7, 5])); // [21, 7]
console.log(dominants([5, 4, 3, 2, 1])); // [5, 4, 3, 2]
