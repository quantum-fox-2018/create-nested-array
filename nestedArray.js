function createNestedArr(jumlahRow, jumlahCol) {
  var arrHasil = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < jumlahRow; i++) {
    var arr = [];
    for (var j = 0; j < jumlahCol; j++) {
      var random = Math.floor(Math.random() * alphabet.length)
      arr.push(alphabet[random]);
    }
    arrHasil.push(arr)
  }
  return arrHasil
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2))
