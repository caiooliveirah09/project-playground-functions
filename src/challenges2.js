// Desafio 11
function generatePhoneNumber(array) {
  let repeat = {};
  let tel = ""
  if (array.length === 11) {
    tel = "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7]
      + array[8] + array[9] + array[10]
  } else {
    return "Array com tamanho incorreto."
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 | array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }

    if (repeat[array[i]] !== undefined) {
      repeat[array[i]] = repeat[array[i]] + 1
    } else {
      repeat[array[i]] = 1
    }
  }

  for (let i in repeat) {
    if (repeat[i] >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  return tel
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  /*let drinks = string.match(/\d+/g)
  let contador = 0
  if (drinks.length === 1 && drinks[0] === 1) {
    return "1 copo de água"
  } else {
    for (let i = 0; i < drinks.length; i++) {
      contador = 
  }
  }
*/
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

