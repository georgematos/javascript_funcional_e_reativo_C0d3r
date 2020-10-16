const { interval } = require('rxjs')

// evento: gera 1 numero a cada 500ms
const gerarNumerosSequenciais = interval(500)

// duas funções interessadas no evento que irão ser notificadas e irão executar a cada novo numero gerado
function exibirNumero(n) {
  return n
}

function potenciaDoNumero(n) {
  return Math.pow(2, n)
}

// inscrição das funções
const subscription1 = gerarNumerosSequenciais.subscribe(x => console.log(exibirNumero(x)))
const subscription2 = gerarNumerosSequenciais.subscribe(x => console.log(potenciaDoNumero(x)))

// desinscreve as funções após 6000ms
setTimeout(() => {
  subscription1.unsubscribe()
  subscription2.unsubscribe()
}, 6000);