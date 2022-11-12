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