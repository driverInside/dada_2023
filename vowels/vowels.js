/**
 * input: cadena (palabra o frase) 
 * output: la cantidad de vocales en dicha cadena
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function vowels(str) {
  let counter = 0;   // O(1)

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      counter++;
    }
    
  }

  return counter; // O(1)
}

// function vowels(str) {
//   let counter = 0;   // O(1)

//   for (let i = 0; i < str.length; i++) {  // n
//     for (let j = 0; j < VOWELS.length; j++) {   // 5 
//       if (str[i] === VOWELS[j]) { // 
//         counter = counter + 1; // counter++  // O(1)  -> O(5)  -> O(5n) -> O(n)
//       }
//     }
//   }

//   return counter; // O(1)
// }

console.log(vowels('Lorem')); // 2
console.log(vowels('qwrty')); // 0
console.log(vowels('Diseño y analisis de algoritmos')); // 12
