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
function fizzBuzz(array) {
  resultado = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      resultado.push("fizzBuzz")
    }
    else if (array[i] % 5 === 0) {
      resultado.push("buzz")
    }
    else if (array[i] % 3 === 0) {
      resultado.push("fizz")
    }
    else {
      resultado.push("bug!")
    }
  }
  return resultado
}

// Desafio 9
function encode(string) {
  let newString = string.replaceAll('a','1')
  newString = newString.replaceAll('e','2')
  newString = newString.replaceAll('i','3')
  newString = newString.replaceAll('o','4')
  newString = newString.replaceAll('u','5')
  return newString
}
function decode(string) {
  let newString = string.replaceAll('1','a')
  newString = newString.replaceAll('2','e')
  newString = newString.replaceAll('3','i')
  newString = newString.replaceAll('4','o')
  newString = newString.replaceAll('5','u')
  return newString
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
