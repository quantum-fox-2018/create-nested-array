function  createNestedArr(jumlahRow, jumlahCol) {
  var nestedArr = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  //console.log(randomAlphabet);

  for (let i = 0; i < jumlahRow; i++) {
    var newRow = [];
    for (let j = 0; j < jumlahCol; j++) {
      var randomAlphabet = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      newRow.push(randomAlphabet);
    }
    nestedArr.push(newRow);
  }

  return nestedArr;
}

console.log(createNestedArr(5,3));
console.log('');
console.log(createNestedArr(4,2));
console.log('');
console.log(createNestedArr(5,4));
