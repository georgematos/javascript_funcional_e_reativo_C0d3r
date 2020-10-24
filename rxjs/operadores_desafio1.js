const { from, Observable } = require('rxjs');

function createPipeableOperator(fn_operator) {
  return (source) =>
    new Observable(subscriber => {
      const sub = fn_operator(subscriber)
      source.subscribe({
        next: sub.next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || subscriber.complete()
      })
    })
}

function first() {
  return createPipeableOperator(subscriber => ({
    next(valor) {
      subscriber.next(valor)
      subscriber.complete()
    },
    complete() {}
  }))
}

function nothing() {
  return createPipeableOperator((subscriber) => ({
    next(valor) {
      subscriber.complete()
    }
  }))
}

function last() {
  let last
  return createPipeableOperator((subscriber) => ({
      next(valor) {
        last = valor
      },
      complete() {
        if (last !== undefined) {
          subscriber.next(last)
        }
        subscriber.complete()
      }
  }))
}

from([1, 2, 3, 4, 5])
  .pipe(
    first(),
    // nothing(),
    // last(),
  )
  .subscribe(console.log)