// Converting Sorting Stringing 

/* Function that takes array of numbers as parameter, converts it and returns 
as a sorted array of strings */

function sortedConverted(arrayOfNumbers) {
  let sorted = arrayOfNumbers.sort((a,b) => a - b); 
  // Sorted array assigned to variable sorted
  let arrayOfStrings = [];
  // Empty array declaration 
  sorted.forEach(el => {
    arrayOfStrings.push(String(el))
    /* Here converts it to strings and pushes numbers as strings to variable 
    array Of String */
  })
  return arrayOfStrings
}
// The forEach() method executes a provided function once for each array element.


// Examples: 

let arr1 = [10, 2, 5, 9, 100, 343, 12, 3, 9, 1, 50]
let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(sortedConverted(arr1))

/* Output: ['1', '2', '3', '5', '9', '9', '10', '12', '50', '100', '343'] */

console.log(sortedConverted(arr1))

/* Output: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] */