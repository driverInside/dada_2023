/**
 * "ana", "anna", "j", "10201"   // OK
 * "()()", "123", "arroz", ""        // NOT OK
 * 
 * 1. Validar si no es una cadena vacía ("")
 * 2. Si está vacía regresar false
 * 3. Convertir cadena a arreglo
 * 4. Declarar i = 0, j = str.length - 1
 * 5. Iterar sobre el string
 * 6. si la cadena en la posición i es diferente a la cadena en posición j
 * 7. regresar false
 * 8. regresar true
 *
 * // Input: string
 * // Output: true / false
 * IsPalindrome(str)
 * IF str.length = 0 THEN:
 *  return false
 * i <- 0
 * j <- str.length-1
 * FOR i <- 0, j <- str.length - 1 TO n - 1 DO:
 *   IF str[i] =! str[j] THEN:
 *     RETURN false
 * RETURN true
 */
function isPalindrome(str) {
  if (str.length === 0) { // !str.length
    return false;
  }

  for (
    let i = 0, j = str.length - 1;
    i < str.length;
    i++, j--
  ) {
    if (str[i] != str[j]) {
      return false
    }
  }

  return true;
}

const arr = [
  "anna",  // true
  "ana",   // true
  "",      // false
  "10101", // true
  "arroz", // false
];

arr.forEach(str => console.log(isPalindrome(str)));

const str = "()";

console.log(isPalindrome(str)); // false
