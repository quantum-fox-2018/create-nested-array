function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function createNestedArr(jumlahRow, jumlahCol) {
  var arrLuar = [];

    for(var i = 0; i < jumlahRow; i++) {
      var arrDalam = [];
      for(var j = 0; j < jumlahCol; j++) {
        var alphabets = String.fromCharCode(Math.round(getRandom(97, 122)));
        arrDalam.push(alphabets);
      }
      arrLuar.push(arrDalam);
    }
  return arrLuar;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
