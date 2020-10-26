/**
 * No RxJS o Observable é executado uma vez para cada função
 * registrada (unicast). O código abaixo gerará 2 números aleatórios
 * provando assim esta afirmação.
 */

const { Observable } = require('rxjs')

function getObservable() {
  return new Observable(subscriber => {
    setTimeout(() => {
      console.log('# Observable')
      subscriber.next(Math.random())
      subscriber.complete()
    }, 1000);
  })
}

const obs$ = getObservable()

const imprimirResultado = (x) => console.log(x)
const imprimirResultado2 = (x) => console.log(x)

obs$.subscribe(imprimirResultado)
obs$.subscribe(imprimirResultado2)

/**
 * O Subject gera o resultado apenas uma vez e o repassa
 * às funções registradas (multicast).
 */

const { Subject } = require("rxjs");

function getSubject() {
  const sub = new Subject()
  setTimeout(() => {
    console.log('# Subject')
    sub.next(Math.random())
    sub.complete()
  }, 1000);
  return sub
}

const subj = getSubject()

const imprimirResultado3 = (x) => console.log(x)
const imprimirResultadox4 = (x) => console.log(x)

subj.subscribe(imprimirResultado3)
subj.subscribe(imprimirResultadox4)