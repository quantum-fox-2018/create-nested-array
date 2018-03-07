function createdNestedArr(jumlahRow, jumlahCol){
  let char = 'abcdefghijklmnopqrstuvwxyz';
  let arrRow=[];
  for(let i=0; i<jumlahRow; i++){
    arrRow.push([]);
    for(let j=0; j<jumlahCol; j++){
      let charCol = char.charAt(Math.random() * char.length);
      arrRow[i].push(charCol);
    }
  }
  console.log(arrRow);
}
createdNestedArr(5,3)
createdNestedArr(4,2)
