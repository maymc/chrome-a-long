console.log("Sanity check");

// Our array of arrays of words 
let wordArr = [];
let masterArr = [];

// Grab all "p" elements
let pElems = document.getElementsByTagName("p");

  for (let i = 0; i < pElems.length; i++) {          // Loops through all of the "p"  elems
    let elem = pElems[i];
    console.log("P Elem", elem);
    wordArr.push(elem.innerText.split(" "));
  }
  console.log(wordArr);                             // Logs an array of arrays of words from each pElem[i]

  for (let j = 0; j < wordArr.length; j++) {
    masterArr = masterArr.concat(wordArr[j]);       // Joining all of the arrays into one master array
  }

console.log("Master", masterArr);

let longWords = masterArr.filter(word => word.length > 8);
console.log("words longer than 8", longWords);

// let adjectives = masterArr.filter(word => {
//     if (adjectivearray.includes(word)) {
//         return word
//     }
// });