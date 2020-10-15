const letras = [
  ['O', ['l'], 'á'],
  [' '],
  ['m', ['u'], 'n', [['d'], 'o']],
  ['!', '!', ['!']]
]

// const resultado = letras
//   .map(l => l.toUpperCase())
//   .reduce((a, b) => a + b)

/**
 * O flat pode unir as várias dimensões 
 * (profundidades) de um array
 */
console.log(letras.flat(1))
console.log(letras.flat(2))
console.log(letras.flat(Infinity))

/**
 * Como eu listaria os numeros antecessores de numeros primos
 * utilizando flatMap?
 */

const isPrime = (n) => {
  if(n!=1) {
    for(var i = 2; i < n; i++) {
      if(n % i == 0) return false
    }
    return n !== 1
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const antecessoresDosPrimosAte9 = numbers.flatMap(x => isPrime(x) ? x - 1 : [])

console.log(antecessoresDosPrimosAte9)


//numbers.forEach(n => console.log((isPrime(n))))