function createNestedArray(jumlahRow, jumlahCol) {
  var hasil = [];

  for (var i = 0; i < jumlahRow; i++) {
    var row = [];
    for (var j = 0; j < jumlahCol; j++) {
      var random = String.fromCharCode(96 + Math.ceil(Math.random() * 26));
      row.push(random);

    }
    hasil.push(row);
  }
  return hasil;
}

console.log(createNestedArray(5, 3));
console.log('', '');
console.log(createNestedArray(4, 2));
