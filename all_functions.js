// Basic iterators - are ommited here look for them in separated_functions folder


// Common Values

function commonValues(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let setC= new Set([...setA].filter(el => setB.has(el)));
  return Array.from(setC);
}

// Without Duplicates

function withoutDuplicates(somArr) { 
  let mySet = new Set(somArr);
  return Array.from(mySet);
}

// Capital Letters Indexes


function capitalLetters(string) {
  let convertedWord = string;  
  let list = []; 
  for (let i = 0; i < convertedWord.length; i++) {  
    if(convertedWord[i].match(/[A-Z]/) !=== null) {
      list.push(i); 
    }
  }
  return list; 
}

