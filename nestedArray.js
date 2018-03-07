function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function createNestedArr(jumlahRow, jumlahCol){
  var nestedArr = [];
  for (var i = 0; i < jumlahRow; i++) {
    var tempArr = [];
    for (var j = 0; j < jumlahCol; j++) {
      var randomAlphabet =  String.fromCharCode(getRandomInt(97,123))
      tempArr.push(randomAlphabet)
    }
    nestedArr.push(tempArr)
  }


  return nestedArr
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
