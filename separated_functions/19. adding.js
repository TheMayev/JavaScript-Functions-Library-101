// Adding 

// function that takes two numbers in some range as parametes 
// first is start number of range, and second is last, than returns sum. 

const addNumbers = (startNum, endNum) => {
  let sum = 0; 
  for(let i = startNum; i <= endNum; i++) {
    sum = sum + i; 
  }
  return sum; 
}

// Examples: 


console.log(addNumbers(2,10))

/* Output: 54 */ 

console.log(addNumbers(100, 1000))

/* Output: 495550 */ 

console.log(addNumbers(112, 321))

/* Output: 45465 */ 