function createNestedArray(jumlahRow, jumlahCol){
  var result = [];

  for(var i=0; i<jumlahRow; i++){
    var row = [];
    for(var j=0; j<jumlahCol; j++){
      var random = String.fromCharCode(97 + Math.ceil(Math.random()*26));
      row.push(random);

    }
    result.push(row);
  }
  return result;
}

console.log(createNestedArray(5,3));
console.log('', '');
console.log(createNestedArray(4,2));
