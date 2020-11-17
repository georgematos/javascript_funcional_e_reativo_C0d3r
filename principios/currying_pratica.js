/**
 * Currying na prática
 * Converter celsius pra fahrenheit
 */

// a equação: F = C * 1.8 + 32

// note que é uma equação de primeiro grau, dessa forma podemos
// implementar primeiro uma forma genérica dela

function primeiroGrauCurried(a) {
  return function (b) {
    return function (x) {
      return a * x + b;
    }
  }
}

// os parametros a e b da função de conversão são constantes
// assim podemos cria-la de forma parcial já com essas constantes

const celsiusToFahrenheit = primeiroGrauCurried(1.8)(32)

/**
* note que chamamos apenas as duas priemeiras funções curried
* dessa forma o retorno será outra função, e não o resultado,
* essa função recebe um parametro, que será a temperatura em
* celsius e retornará o resultado do calculo final 
*/

console.log(celsiusToFahrenheit(42))


