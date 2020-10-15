const readline = require('readline')

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

function namorada() {
  setTimeout(() => {
    console.log('Apagar as luzes...')
    console.log('Pedir silencio...')
    console.log('Surpresa!!!')
  }, 2000)
}

function sindico() {
  setTimeout(() => {
    console.log("Monitorando o barulho")
  }, 1000);
}

async function porteiro(interessados) {
  while(true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q) ')
    if(resp.toLowerCase() === 's') {
      (interessados || []).forEach(obs => obs())
    } else if(resp.toLowerCase() === 'q') {
      break
    }
  }
}

/**
 * porteiro é o subject e são registraodos nele 2 observers
 * namorada e sindico, quando o evento acontecer eles serão
 * notificados e executarão suas funções (no caso eles mesmos
 * são as funções)
 */
porteiro([namorada, sindico])