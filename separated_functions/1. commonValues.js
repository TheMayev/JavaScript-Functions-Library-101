// Common Values 

/* Function that returns array of common values of two arrays */

function commonValues(a, b) {
  //  set is a collection of items which are unique, i.e no element can
  //  be repeated.
  let setA = new Set(a);
  let setB = new Set(b);

  // using filter and has methods, it filters all numbers form set A and B
  // making new set of common values
  let setC= new Set([...setA].filter(el => setB.has(el)));

  // then converts this set to array 
  return Array.from(setC);
}

// Example 

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 123, 123, 12, 1]
let arr2 = [1, 1, 1, 1, 1, 4, 5, 6, 10, 12, 123, 312, 231]

let common = commonValues(arr1, arr2)

console.log(common) ; 

/* Output: [1, 4, 5, 6, 10, 12, 123] */