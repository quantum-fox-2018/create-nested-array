function createNestedArray(jumlahRow, jumlahCol) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var count = alphabet.length - 1;
    var arrResult = [];

    for (let i = 0; i < jumlahRow; i++) {
        var tempArr = [];
        for (var j = 0; j < jumlahCol; j++) {
            tempArr.push(alphabet[Math.floor((Math.random() * count) + 1)]);
        }

        arrResult.push(tempArr);
    }
    return arrResult;

}

console.log(createNestedArray(4, 4));
console.log(createNestedArray(4, 2));