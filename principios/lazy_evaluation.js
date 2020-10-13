/* exmplo de eager evaluation (avaliação ansiosa / apressada)
a avaliação da expressão ocorrer de maneira imediata */

// função acessória, serve apenas para pedir uma espera
function esperarPor(tempo) {
  const future = Date.now() + tempo
  while(Date.now() < future) {}
}

// função eager
function somar(a, b) {
  esperarPor(2000)
  return a + b
}

console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(somar(3, 4))

/* exemplo de lazy evaluation (avaliação preguiçosa / tardia) 
a avaliação ocorrerá apenas quando o resultado for necessario */

// função lazy
function somaLenta(a) {
  esperarPor(2000)
  return function(b) {
    return a + b
  }
}

/* somarCom3 receberá a primeira parte da função somarLenta
 que é a parte da função que demora mais a responder */
const somarCom3 = somaLenta(3)

/* tendo sido avaliada, não será mais necessário chamar a função 
lenta novamente, assim o resultado será muito mais rápido. */

console.log(somarCom3(5))
console.log(somarCom3(5))
console.log(somarCom3(5))

