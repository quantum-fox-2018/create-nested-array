function createNestedArr(jumlahRow, jumlagCol){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let bigWrapArray = []
    for(let i=0; i<jumlahRow; i++){
        let colArray = []
        for(let j=0; j<jumlagCol; j++){
            colArray.push(alphabet.charAt(Math.floor(Math.random()*alphabet.length)))
        }
        bigWrapArray.push(colArray)
    } 
    return bigWrapArray;
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))