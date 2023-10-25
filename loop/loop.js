/**
 * Crear una función que reciba un entero e imprima una secuencia de números
 * en orden descendente hasta el cero.
 */
function loop(num) {
  if (num < 0) return;

  console.log(num);

  return loop(num - 1);
}

loop(4);  // 4 3 2 1 0
