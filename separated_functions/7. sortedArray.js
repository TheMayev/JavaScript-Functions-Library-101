// Sorted array 

/* Function that takes array as a parameter and then returns this array sorted 
sorts it increasingly*/

function sortArr(arr) {
  return arr.sort((a,b) => a - b); // sorts given array. 
} 

// Examples 

let arr1 = [10, 2, 5, 9, 100, 343, 12, 3, 9, 1, 50]
let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(sortArr(arr1))

/* Output: [1, 2, 3, 5, 9, 9, 10, 12, 50, 100, 343] */

console.log(sortArr(arr2))

/* Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */