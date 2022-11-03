// Random array generatror 

/* Function that takes two parameters, first is lenght of an array you want,
and second is range of numbers (counts from 1 to given number), and finally 
it returns sorted array */

function randomArrayGenerator(lentgthOfArray, numbersRange) {
  let ranArr = Array.from({length: lentgthOfArray}, () => Math.floor(
    /*1 - comment about this is under the function*/
    Math.random() * numbersRange + 1
  )); 
  return ranArr.sort((a,b) => a - b);
} 

/* In JS it is possible to do something like this 

let arr = {length:10} 

arr.length // 10 

When Array.from gets a value of property length (10 in this case) then 
it creates a real array with length 5 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from 

*/

// Example 

console.log(randomArrayGenerator(10, 100))

/* Output: [21, 22, 41, 54, 54, 69, 73, 78, 83, 86] */

