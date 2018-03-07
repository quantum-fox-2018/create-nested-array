function randomAlphabet(){
  let result    = '';
  let alphabet  = 'abcdefghijklmnopqrstuvwxyz';

  result = alphabet.charAt(Math.random() * alphabet.length);

  return result;
}

function createNestedArr(jumlahRow, jumlahCol){

  var arrResult = [];
  for(var i = 0; i < jumlahRow; i++){
    arrResult.push([]);

    for(var j = 0; j < jumlahCol; j++){
      arrResult[i].push(randomAlphabet());
    }
  }
  console.log(arrResult);
}

//Test Case
createNestedArr(5, 3);

createNestedArr(4, 2);

createNestedArr(3, 3);
