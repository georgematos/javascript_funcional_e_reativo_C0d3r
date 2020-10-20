const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

// O comportamento padrão dos observables e operadores é síncrono
// The standart behavior of observables and opertors is synchronous

// console.log('Antes')

// from([1,2,3,4,5,6,7,8,9,19])
//   .subscribe(console.log)

// console.log('Depois')

// Para mudar o comportamento padrão para assincrono pode-se utilizar
// o operador asyncScheduler em conjunto com o observeOn

// To change the standard behavior to asynchronous you can use
// the asyncScheduler operator together with observeOn

console.log('Antes')

from([1,2,3,4,5,6,7,8,9,19])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log)

console.log('Depois')