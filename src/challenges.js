// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ")
  return resultado
}

// Desafio 4
function concatName(arrays) {
  return arrays[arrays.length - 1] + ", " + arrays[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(numbers) {
  let numero = Math.max(...numbers)
  let acertos = 0
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] == numero) {
      acertos++
    }
  }
  return acertos
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaDoGato1 = Math.abs(cat1 - mouse)
  let distanciaDoGato2 = Math.abs(cat2 - mouse)
  if (distanciaDoGato1 < distanciaDoGato2) {
    return 'cat1'
  } else if (distanciaDoGato2 < distanciaDoGato1) {
    return 'cat2'
  } return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
