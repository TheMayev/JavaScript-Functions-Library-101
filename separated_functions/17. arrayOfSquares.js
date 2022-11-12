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
