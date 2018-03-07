function createNestedArr(jumlahRow, jumlahCol) {
  let hurufAcak;
  let arrHasil = [];
  let row;

  for(let i = 0; i < jumlahRow; i++) {
    row = [];
    for(let j = 0; j < jumlahCol; j++) {
      hurufAcak = acakHuruf();
      row.push(hurufAcak);
    }
    arrHasil.push(row);
  }
  console.log(arrHasil);
}

function acakHuruf() {
  let kemungkinanHuruf = "abcdefghijklmnopqrstuvwxyz";
  let index = Math.floor(Math.random() * kemungkinanHuruf.length);

  return kemungkinanHuruf[index];
}

createNestedArr(5, 3);
createNestedArr(4, 2);
