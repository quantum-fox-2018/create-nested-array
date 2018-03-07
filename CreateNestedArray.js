function nestedArr (top,left){
  var hasil = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for(var i = 0 ; i < top ; i++){
    var tmp =[];
    for(var j = 0 ; j < left ; j++){
      tmp.push(alphabet[Math.floor(Math.random()*26)]);
    }
    hasil.push(tmp);
  }
  return (hasil);
}


console.log(nestedArr(5,3));
console.log(nestedArr(4,2));
