const { from, Observable, UnsubscriptionError } = require('rxjs');

function first() {
  // source é o Observable retornado pelo operador anterior
  return (source) =>
    new Observable(subscriber =>
      source.subscribe({
        next(val) {
          subscriber.next(val)
          subscriber.complete()
        }
      })
    )
}

// Minha solução
// function last() {
//   const array = []
//   return (source) =>
//     new Observable(subscriber => {
//       source.forEach(x => array.push(x))
//       array.reverse()
//       source.subscribe({
//         next() {
//           subscriber.next(array[0])
//           subscriber.complete()
//         }
//       })
//     })
// }

function last() {
  return (source) =>
    new Observable(subscriber => {
      let last
      source.subscribe({
        next(val) {
          last = val
        },
        complete() {
          if (last !== undefined) {
            subscriber.next(last)
          }
          subscriber.complete()
        }
      })
    })
}

from([1, 2, 3, 4, 5])
  .pipe(last())
  // .pipe(first())
  .subscribe(console.log)