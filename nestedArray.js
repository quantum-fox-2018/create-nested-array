

function createNestedArr(jrow,jcol){
let abjad = 'abcdefghijklmnopqrstuvwxyz'


  let arrPusat=[]
  for (var i = 0; i < jrow; i++) {
    arrPusat.push([])
    for (var j = 0; j < jcol; j++) {
      arrPusat[i].push(abjad[Math.floor(Math.random() * 26)])
    }
  }
return arrPusat
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
