// Uma função pura é uma função que seu valor de retorno
// é determinado APENAS pelos seus valores de entrada , sem 
// efeitos colaterais observáveis (não altera nada fora da função).

// funcão pura (o retorno depende apenas dos parametros de entrada e é previsível)
function somar(a, b) {
  return a + b
}

console.log(somar(1, 10))
console.log(somar(1, 10))
console.log(somar(1, 10))
console.log(somar(1, 10))
console.log(somar(1, 10))

let execucoes = 0

function somarImpura(a, b) {
  execucoes++ // efeito colateral observável
  return a + b
}

console.log(somarImpura(1, 10))
console.log(somarImpura(1, 10))
console.log(somarImpura(1, 10))
console.log(somarImpura(1, 10))
console.log(somarImpura(1, 10))

console.log(execucoes)