//somar(3)(4)(5)

// calcular(3)(7)(fn)

// desafio 1 ----------------------------
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(somar(3)(4)(5))

// desafio 2 ----------------------------

function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b)
    }
  }
}

const soma = function(a, b) {
  return a + b
}

const subtracao = function(a, b) {
  return a - b
}

const multiplicacao = function(a, b) {
  return a * b
}

const divisao = function(a, b) {
  return a / b
}

console.log(calcular(8)(2)(soma))
console.log(calcular(8)(2)(subtracao))
console.log(calcular(8)(2)(multiplicacao))
console.log(calcular(8)(2)(divisao))