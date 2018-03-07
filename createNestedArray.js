function createNestedArr(jumlahRow, jumlahCol){
    let result = []

    for(let i=0; i<jumlahRow; i++){
        result.push([])
        for(let j=0; j<jumlahCol; j++){
            let alphaRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
            
            result[i].push(alphaRandom)
        }
    }
    console.log(result)
}


createNestedArr(5,3)
createNestedArr(4,2)