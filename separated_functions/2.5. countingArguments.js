// Counting Arguments 

// function that takes parameters or none, and returns number of the arguments


function countArguemnts() {
  return arguments.length;
}


// Examples 

console.log(countArguemnts(1,2,3,4,5,6,7,9))

/* Ouput: 8 */

console.log(countArguemnts("I", "am", "the", "best", "programmer", 
"in", "my", "world"))

/* Ouput: 8 */