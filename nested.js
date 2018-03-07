function createNestedArr(jumlahRow, jumlahCol){
  let abjad = 'abcdefghijklmnopqrstuvwxyz';
  let board = [];
  for(let i=0; i<jumlahRow; i++){
    let line = [];
    for(let j=0; j<jumlahCol; j++){
      let content = abjad[Math.floor(Math.random()*26)];
      line.push(content);
    }
    board.push(line);
  }
  console.log(board);
}

createNestedArr(5,3)
createNestedArr(4,2)
