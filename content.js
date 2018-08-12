console.log("Sanity check");
<<<<<<< HEAD

//Our array of arrays
let wordArr = [];

let pElems = document.getElementsByTagName("p");
console.log("someting?");
for (let i = 0; i < pElems.length; i++) {
  let elem = pElems[i];
  // console.log("working?")
  console.log("P Elem", elem);
  wordArr.push(elem.innerText.split(" "));
  let pElems = document.getElementsByTagName("p");
  console.log("someting?");

  for (let i = 0; i < pElems.length; i++) {
    // Loops through all of the "p"  elems
    let elem = pElems[i];
    // console.log("working?")
    console.log("P Elem", elem);
    wordArr.push(elem.innerText.split(" "));
  }
  console.log(wordArr); // Logs an array of arrays of words from each pElem[i]

  let otherArr = [];
  wordArr[2].forEach(elem => {
    otherArr.push(elem.split(",").join(" "));
  });
  console.log("other Array", otherArr);
  //Our master array of every word
  let masterArr = [];

  for (let j = 0; j < wordArr.length; j++) {
    masterArr = masterArr.concat(wordArr[j]); // Joining all of the arrays into one master array
  }
}
console.log("Master", masterArr);
=======
console.log("testing"); //romeo
>>>>>>> 18b4eb43186e7bbe5c830e732656bd9e275bd591
