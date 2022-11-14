// Factorial 

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


// Example 

console.log(factorial(5))

/* Output: 120 */

console.log(factorial(10))

/* Output: 3628800 */

console.log(factorial(100))

/* Output: 1307674368000 */
