/**
 * Dados dos arreglos ordenados A, B; producir un nuevo arreglo C ordenado ascendentemente uniendo A y B 
 * 
 * A = [1, 5, 7, 9, 11, 12]       N = 5
 *      i
 * B = [3, 4, 9, 10]          M = 4
 *      j
 * C = [1, 3, 4, 5, 7, 9, 9, 10]
 *      k
 *
 *  Comparar los dos elementos más pequeños.
 *  El más pequeño, lo voy a sacar de su arreglo para ingresarlo al nuevo
 *       
 *       [1, 3, 4, 5, 7, 9, 9, 10, 11, 12]
 * 
 * Merge(A, B)
 * // input: dos arreglos A y B ordenados
 * // output: la unión de A y B ordenada
 */

function merge(arrayA, arrayB) {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];

  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] <= arrayB[j]) {
      result[k] = arrayA[i];

      if (i < arrayA.length) {
        i++;
      }
    } else {
      result[k] = arrayB[j];

      if (j < arrayB.length) {
        j++;
      }
    }
    k++;
  }

  let aux = arrayA[i++] || arrayB[j++]

  while (aux !== undefined) {
    result[k] = aux;
    aux = arrayA[i++] || arrayB[j++];
    k++;
  }

  return result;
}

const arrA = [1, 5, 7, 9, 11, 12] ;
const arrB = [3, 4, 9, 10];

console.log(merge(arrA, arrB)); // 
