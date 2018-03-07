//Create a Nested Array

function createNestedArr(jumlahRow, jumlahCol){
    let abjads = 'abcdefghijklmnopqrstuvwxyz';
    let arrResults = [];
    // console.log(abjadRandom);
    // console.log(abjads[abjadRandom]);
    // console.log(abjads.length);
    for(let i = 0; i < jumlahRow; i++){
        let tempAbjads = [];
        let abjadRandom = Math.floor(Math.random() * (abjads.length-1));

        for(let j = 0; j < jumlahCol; j++){
            tempAbjads.push(abjads[abjadRandom]);
        }
        arrResults.push(tempAbjads)
    }

    console.log(arrResults);
}

//Test Case
createNestedArr(5,3);
createNestedArr(4,2);
