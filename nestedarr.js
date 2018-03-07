function random_character() {
    var alphabet = "abcdefghijklmnopqurstuvwxyz";
    return alphabet.substr( Math.floor(Math.random() * 26), 1);
}

function createNestedArr(row, col) {
  var arr = []

  for (var i = 0; i < row; i++) {
    var tmp = []
    for (var j = 0; j < col; j++) {
      var alph = random_character()
      tmp.push(alph)
    }
    arr.push(tmp)
  }
  return arr
}

console.log(createNestedArr(5, 3));
