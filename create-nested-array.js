const alphabets = 'abcdefghijklmnopqrstuvwxyz'
var result = [];

function createNestedArray(jmlRow, jmlCol) {
  debugger;
  for (let i = 0; i < jmlRow; i++) {
    for (let x = 0; x < jmlCol; x++) {
      if(typeof result[i] === 'undefined' || result[i] === null || result[i].length === null || typeof result[i].length === 0) {
        result[i] = [];
      }
      //Batas atas math random tidak include dengan angka yang batasnya
      result[i].push(alphabets[Math.floor(Math.random() * (26 - 0) + 0)]);
    }
  }

  return result;
}


console.log(createNestedArray(9,2));
