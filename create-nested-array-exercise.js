function generateHuruf (){
  let huruf = 'abcdefghijklmnopqrstuvwxyz';
  return huruf[Math.floor(Math.random() * Math.floor(26))];
}

function createNestedArray(jumlahRow, jumlahColumn){

  let outputNestedArray = [];

  for(let i=0; i<jumlahRow; i++){
    outputNestedArray.push([]);
    for(let j=0;j<jumlahColumn;j++){
      outputNestedArray[i].push(generateHuruf());
    }
  }
  return outputNestedArray;
}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));
