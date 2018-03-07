function createNestedArr(jumlahRow, jumlahCol) {

    var result = []
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var random; 

    for (var i = 0; i < jumlahRow; i++) {
        
        var array = []
        for (var j = 0; j < jumlahCol; j++) {
            
            random = Math.floor(Math.random()*alphabets.length)
            array.push(alphabets[random])
        }
        result.push(array)
    }

    console.log(result)

}

createNestedArr(5,3)
createNestedArr(4,2)