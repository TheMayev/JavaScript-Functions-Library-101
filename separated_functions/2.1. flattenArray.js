// Flatten Array 

// function that takes an arrey of arreys as parameter and returns flatten array.


/* This verion is with reduce, and concat methods */

function flaten(someArrayOfArrays) {
  let arry = someArrayOfArrays;
  let flatten = arry.reduce((a,b) => a.concat(b), []);
  return flatten; 
}

// or with flat method 

function flatten1(someArrofArrys) {
  return someArrofArrys.flat(1)// where number spefiied depth of flattening

}


//First version examples: 

let x = [1, 2, 3, 4, 5, [6, 7, 8]]
let y = [1, [2, 3, 4], 5, [6], 7, 9]

console.log(flaten(x))

/* Output: [1, 2, 3, 4, 5, 6, 7, 8] */

console.log(flaten(y))

/* Output: [1, 2, 3, 4, 5, 6, 7, 9] */

console.log(flatten1(x))

/* Output: [1, 2, 3, 4, 5, 6, 7, 8] */

console.log(flatten1(y))

/* Output: [1, 2, 3, 4, 5, 6, 7, 9] */



