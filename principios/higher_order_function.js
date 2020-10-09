// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as.

function executar(fn, ...params) {
  return fn(...params)
}

function somar(...params) {
  return params.reduce((acc, x) => acc = acc + x)
}

function multiplicar(...params) {
  return params.reduce((acc, x) => acc = acc * x)
}

soma = executar(somar, 5, 4, 6, 5)
produto = executar(multiplicar, 4, 3, 2, 2)

console.info(soma)
console.info(produto)