/**
 * input: arreglo de enteros A, objetivo t
 * output: los índices de los elementos en el arreglo cuya suma es igual al objetivo
 * 
 * [3, 2, 3, 5, 9, 8]    7
 *     i
 * ------
 *  {
 *    '4': 0,
 *    '5': 1,
 *    '4': 2,
 *  }
 * 
 */
function twoSum(arr, t) {
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const diff = t - element;

    if (Object.prototype.hasOwnProperty.call(dict, `${element}`)) { // if(dict[Str(element)])
      return [dict[`${element}`], i];  
    }

    dict[`${diff}`] = i;
  }
}

// function twoSum(arr, t) {
//   for (let i = 0; i < arr.length - 1; i++) { // O(n)
//     for (let j = i + 1; j < arr.length; j++){  // O(n)
//       if ((arr[i] + arr[j]) === t) {
//         return [i, j];  // O(1)
//       }
//     }    
//   }

//   return [0, 0];
// }

console.log(twoSum([3, 2, 3, 5, 9, 8], 7)); // [1, 3]
console.log(twoSum([8, 6], 14)); // [0, 1]
console.log(twoSum([1, 2, 3, 4], 4)); // [0, 2]
