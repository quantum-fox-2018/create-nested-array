function createNestedArr(jumlahRow,jumlahCol) {
  let alpha='abcdefghijklmnopqrstuvwxyz'
  let newArr=[]
  for (var i = 0; i < jumlahRow; i++){
    newArr.push([])
    for (var j = 0; j < jumlahCol; j++) {
      var random=alpha[Math.floor(Math.random()*alpha.length)]
      newArr[i].push(random)
    }
  }
  return newArr
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
