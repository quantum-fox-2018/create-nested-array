function createNestedArr(jumlahRow, jumlahCol){
    function randomString(len) {
        var p = "abcdefghijklmnopqrstuvwxyz";
        return [Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
    }
    var result = [];    
    for(var i =0 ; i < jumlahRow; i++){
        var tmp = [];
        for(var j =0; j < jumlahCol; j++){
            tmp.push(randomString(1));
        }
        result.push(tmp);
    }
    return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));