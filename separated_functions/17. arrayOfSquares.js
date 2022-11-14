// Array of squares 

// function that takes numbers as parametrs and returns array of squares

const makeArrayOfSquares = (startNum, endNum) => {
  let array = []; 
  for(let i = startNum; i <= endNum; i++) {
    let squared = i ** 2;
    array.push(squared);
  };
  return array; 
}


// Example: 

console.log(makeArrayOfSquares(1, 20))

/* Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256,
   289, 324, 361, 400] */