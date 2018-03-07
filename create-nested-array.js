function createNestedArr(jumlahRow, jumlahCol){
  // value array jumlahRow
  let rows = []
  for(let i=0; i<jumlahRow; i++){
    let coloms = []
    for(let j=0; j<jumlahCol; j++){
      var hurufAcak = getRandomArbitrary(1, 26)
      coloms.push(hurufAcak)
    }
    rows.push(coloms)
  }
  return rows
}
console.log(createNestedArr(5,3))

/*[]
output:
[
['a', 'b', 'c'],
['d', 'e', 'f'],
['a', 'b', 'g'],
['a', 'b', 'c'],
['a', 'b', 'c']
]
*/

//test
function getRandom(){
  return Math.random()
}
// console.log(getRandom())

//mendapatkan nomor acak di antara dua nilai
function getRandomArbitrary(min, max){
  var min = Math.ceil(min)
  var max = Math.floor(max)
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var angkaRandom = Math.floor(Math.random() * (max-min) + min)
  return alfabet[angkaRandom]
}
// console.log(getRandomArbitrary(1, 26))
