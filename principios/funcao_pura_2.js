// Uma função pura é uma função que seu valor de retorno
// é determinado APENAS pelos seus valores de entrada , sem 
// efeitos colaterais observáveis (não altera nada fora da função).

// funcão impura (não há como prever o resultado, pois depende de uma fução externa)
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))