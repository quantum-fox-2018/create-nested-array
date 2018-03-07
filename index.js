function createNestedArr(jumlahRow,jumlahCol) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // console.log(alphabet.length); // 26
    // console.log(alphabet[0]); //a 
    
    let nestedArr = []
    for (let i = 0; i < jumlahRow; i++) {
        nestedArr.push([]);
        for (let j = 0; j < jumlahCol; j++) {
            let createRandom = Math.round(Math.random()*25);
            nestedArr[i].push(alphabet[createRandom]);
        }
    }
    console.log(nestedArr);
}

createNestedArr(4,3);