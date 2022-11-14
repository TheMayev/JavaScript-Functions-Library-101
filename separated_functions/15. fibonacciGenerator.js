// Fibonacci Generator 

// function that takes number as parameter and it is lenghth of arrey of 
// generated fibonacci list 

function fibonacciGenerator(lenghtOfList) {
  let fibonacciList = []; // empty list declaration 
  let x1 = 0; 
  let x2 = 1; 
  for(let i = 0; i < lenghtOfList; i++) {
    // there will be as many loops as user want to be values in fibbonacci List
    fibonacciList.push(x1) // pushes x1 value to the list
    let acc = x1 + x2; // accumulator - added two values 
    x1 = x2; // new value assigned to variable
    x2 = acc; // new value assigned to variable
  }
  return fibonacciList
}


// Examples

console.log(fibonacciGenerator(5))

/* Output: 0, 1, 1, 2, 3  */

console.log(fibonacciGenerator(20))

/* Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 
610, 987, 1597, 2584, 4181 */ 