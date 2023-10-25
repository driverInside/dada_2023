/**
 * Dado un punto un un plano (x, y), regresar el cuadrante al que pertenece (1, 2, 3, 4).
 * Tanto x, y son enteros y diferentes de cero (0) por lo tanto el punto nunca estaría sobre los ejes.
 * 
 *                                    |
 *                       -, +   II    |   I   +, +
 *                                    |
 *                           ---------+---------
 *                                    |
 *                       -, -  III    |   IV   +, -
 *                                    |
 * 
 *  a)  (2, 3)  -> +, +
 *  b)  (-4, 1)    -, +
 *  c)  (-2, -5)   -, -
 *  d)  (6, -3)    +, -
 * 
 *  Pseudocódigo
 *  
 *  Quadrants(x, y):
 *  // input: un punto (x, y). x y z pertenecen Z
 *  // output: el número del cuadrante donde se encuentra.
 *  IF x > 0:
 *    IF y > 0:
 *      return 1
 *    ELSE
 *      retun 4
 *  ELSE:
 *    IF y > 0:
 *      return 2
 *    ELSE
 *      return 3
 */
function quadrants(x, y) {
  if (x > 0) {
    if (y > 0) {
      return 1;
    } else {
      return 4;
    }
  } else {
    if (y > 0) {
      return 2;
    } else {
      return 3;
    }
  }
}

// const quadrants = (x, y) => x > 0? y > 0 ? 1 : 4: y > 0 ? 2 : 3;

console.log(quadrants(2, 3)); // 1
console.log(quadrants(-4, 1)); // 2
console.log(quadrants(-2, -5)); // 3
console.log(quadrants(6, -3)); // 4



