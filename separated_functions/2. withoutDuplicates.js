// Without Duplicates 

/* Function that takes some array with duplicates and returns new one without */

function withoutDuplicates(somArr) { 
  let mySet = new Set(somArr); // arrays converted to sets
  return Array.from(mySet);
  // returns array from set 
}

// Example: 

let a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 1, 2, 3, 1, 1]

let simpleA = withoutDuplicates(a)

console.log(simpleA)

/* Output: 

[1, 2, 3, 4, 5]

*/ 



