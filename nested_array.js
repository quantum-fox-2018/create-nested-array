function createNestedArray(jumlahRow, jumlahCol) {

  const arr = []
  let isi = []
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < alphabet.length; i++) {

    let randomNumber = alphabet[Math.ceil(Math.random() + i)]

    isi.push(randomNumber)

    if (isi.length == jumlahCol) {

      arr.push(isi)
      isi = []

      if (arr.length == jumlahRow) {

        break;

      }

    }

  }

  return arr

}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,4));
console.log(createNestedArray(4,2));
console.log(createNestedArray(2,4));
