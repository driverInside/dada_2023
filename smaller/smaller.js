/**
 *  Ctrl + Shift + P, toggle auto attach
 *  Run and debug
 * 1. Si el arreglo no tiene elementos, regresar null
 * 2. Declarar una variable auxiliar para almacenar el número más pequeño
 * 3. Igualar auxiliar al primer elemento del arreglo
 * 4. Iterar sobre el arreglo buscando el elemento menor a aux
 * 5. si el elemento es menor que aux, igualar aux a elemento
 * 6. regresar aux
 * 
 * Smaller(A[0 .. n-1])
 * // input: Array A[0 .. n-1] A[i] E Z
 * // output: the smaller element in the array
 * IF arr.length = 0 then
 *    return null
 * aux <- arr[0] 
 * FOR i <- 1 TO n - 1 DO:
 *   IF arr[i] < aux THEN:
 *      aux <- arr[i]
 * RETURN aux
 */
function smaller(arr) {
  if (arr.length === 0) {
    return null;
  }

  let aux = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < aux) {
      aux = arr[i]
    }
  }

  return aux;
}

const arr = [4, 2, -1, 0];

console.log(smaller(arr)); // 2
