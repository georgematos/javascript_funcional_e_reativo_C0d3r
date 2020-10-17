const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Isso foi entregue por uma promise!')
  }, 2000);
})

promise.then(console.log)

// uma partida de futebol no rádio

// rádio => observable
// narrador da partida => subscriber
// gritarGol => função interessada que será registrada no observable

/** 
 * radio é o observable ou seja, algo monitorado a espera de um evento
 * narrador é o subscriber, quem avisará aos ouvintes que o gol (evento) aconteceu
 * */
const radio = new Observable(narrador => {
  setTimeout(() => {
    // a string passada aqui é o que será retornado para a função interessada
    narrador.next('Gooooooooool!')
  }, 3000);
  setTimeout(() => {
    narrador.next('Gooooooool, de novo eeeeleee!')
  }, 5000);
  // final do jogo
  setTimeout(() => {
    narrador.complete()
  }, 6000);
})

const torcedor = {
  gritarGol: (vozDoNarrador) => console.log(`${vozDoNarrador}: Gooool!!! Comemorando gol com os amigos!`)
}

/**
 * Para que um torcedor interessado seja avisado do gol, ele deve
 * ligar o rádio e ficar atento, o que equivale a registrar a fun-
 * ção a ser executada no observable:
 */
radio.subscribe((vozDoNarrador) => torcedor.gritarGol(vozDoNarrador))