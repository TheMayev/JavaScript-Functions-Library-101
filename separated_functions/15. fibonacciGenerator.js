// Fibonacci Generator 

// function that takes number as parameter and it is lenghth of arrey of 
// generated fibonacci list 

function fibonacciGenerator(lenghtOfList) {
  let fibonacciList = [];
  let x1 = 0; 
  let x2 = 1; 
  for(let i = 0; i < lenghtOfList; i++) {
    fibonacciList.push(x1)
    let acc = x1 + x2; 
    x1 = x2; 
    x2 = acc; 
  }
  return fibonacciList
}

