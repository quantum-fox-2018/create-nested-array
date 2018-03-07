function createNestedArr(jumlahRow, jumlahCol) {
    //YOUR CODE HERE...
    let board = []
    for(let i=0; i<jumlahRow; i++) {
        board.push([])
        for(let j=0; j<jumlahCol; j++) {
            let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
            let randomAlphabet = Math.floor((Math.random()*26)+1)
            board[i].push(alphabet[randomAlphabet])
        }
    }

    return console.log(board)
}

createNestedArr(5,3)