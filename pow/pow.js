// iteración

// function pow(a, n) {
//   let res = 1;

//   for (let i = 1; i <= n; i++) {
//     res = res * a; // res *= a;
//   }

//   return res
// }

// recursividad

function pow(a, n) {
  if (n === 1) {
    return a;
  }

  return a * pow(a, n - 1);
}

const p = pow(2, 1); // 2
const q = pow(2, 2); // 4
const r = pow(2, 3); // 8
console.log(p);
console.log(q);
console.log(r);
