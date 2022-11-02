// Reverse Array 

/* Function that takes array as parameter and returns it reversed */

function reverseArray(arr) { 
  let reversed = []; // empty array declaration for reversed array
  for (let i = arr.length - 1; i >= 0; i--) { 
    /*It iterate backwards to the moment that it will reach what was declared. 
    i-- negative increment*/
      reversed.push(arr[i]);
      // it pushes the number into the reversed array
  } 
  return reversed // returns reversed array 
}

// Exammples: 

console.log(reverseArray([1, 2, 3, 4, 5, 6]))

/* Output: [6, 5, 4, 3, 2, 1] */

console.log(reverseArray([10, 50, 12, 1, 4, 5]))

/* Output: [5, 4, 1, 12, 50, 10] */



