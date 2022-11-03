// First and last 

/* Function that takes array of numbers as parameter and retruns first and last 
value of this array */

function firstLast(list) {
  let newList = []; // empty array declaration 
  newList.push(list[0]); // pushes first value
  newList.push(list[list.length -1 ]);// pushes last value 
  return newList;
}

// Example 

console.log(firstLast([1,2,3,4,5,6]))

/* Output: [1,6] */

console.log(firstLast([5,2,14,5,5,9,10]))

/*Output: [5,10] */