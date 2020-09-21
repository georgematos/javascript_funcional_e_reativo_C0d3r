// arrow function

// arrow function mínima
const felizNatal = () => console.log("Feliz Natal!")
felizNatal()

// arrow function mínima + template string
const saudacao = nome => `Fala ${nome}, blz?!?`
console.log(saudacao('Mestre Yoda'))

// arrow function + quantidade de parametros variávaeis
const somar = (...numeros) => {
  console.log(Array.isArray(numeros))
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}

console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// reduzindo uma função ao máximo utilizando arrow functions
function potencia(base) {
  return function calcular(exp) {
    return Math.pow(base, exp)
  }
}
console.log(potencia(4)(2))

// mesma funcao acima só que reduzida ao máximo usando funcoes anonimas arrow
const potenciaReduced = base => exp => Math.pow(base, exp)
console.log(potenciaReduced(4)(3))

// bonus
// this
// não funciona com arrow function 🤷
// adiciona uma funcao a um objeto já existente
Array.prototype.log = function() {
  console.log(this)
}

const numeros = [1, 2, 3]
numeros.log();