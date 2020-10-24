const { from, Observable } = require('rxjs');

function createPipeableOperator(next) {
  return (source) =>
    new Observable(subscriber =>
      source.subscribe({
        next: next(subscriber)        
      })
    )
}

function first() {
  return createPipeableOperator(subscriber => 
    valor => {
      subscriber.next(valor)
      subscriber.complete()
    }
  )
}

function nothing() {
  return createPipeableOperator((subscriber, val) => {
    subscriber.complete()
  })
}

function last() {
  return createPipeableOperator((subscriber, val) => {
    let last
    source.subscribe({
      next() {
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
  .pipe(
    first(),
    // nothing(),
    // last(),
  )
  .subscribe(console.log)