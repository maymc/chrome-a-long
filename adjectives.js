
const wordsModule = (function () {

  var adjectives = "testAdj";

  function getAdjectives() {
    return adjectives;
  }

  return {
    getAdjectives: getAdjectives
  }

}());

// let test = wordsModule.getAdjectives();