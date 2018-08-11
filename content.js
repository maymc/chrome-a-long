console.log("Sanity check");

let wordArr = [];

let pElems = document.getElementsByTagName('p');
console.log("someting?")
for (let i = 0; i < pElems.length; i++) {
  let elem = pElems[i];
  // console.log("working?")
  console.log("P Elem", elem)
  wordArr.push((elem.innerText).split(' '))
}
console.log(wordArr);

let otherArr = [];
wordArr[2].forEach(elem => {

  otherArr.push(elem.split(',').join(" "));
})
console.log("other Array", otherArr)
