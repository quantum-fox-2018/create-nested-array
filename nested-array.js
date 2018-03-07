function createNestedArr(row, col){
    let arrRes = [];
    let arrInside = [];

    for(let counter = 0; counter<row; counter++){
        arrInside = [];
        for(let counter2 = 0; counter2<col; counter2++){
            let letter = String.fromCharCode(Math.round((Math.random()*26) + 97));
            arrInside.push(letter);
        }
        arrRes.push(arrInside);
    }

    return arrRes;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));