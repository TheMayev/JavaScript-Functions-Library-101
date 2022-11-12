// Flatten Array 

// function that takes an arrey of arreys as parameter and returns flatten array.

function flaten(someArrayOfArrays) {
  let arry = someArrayOfArrays;
  let flatten = arry.reduce((a,b) => a.concat(b), []);
  return flatten; 
}

