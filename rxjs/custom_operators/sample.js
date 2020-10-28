const { interval, pipe, Observable } = require("rxjs");
const { map } = require("rxjs/operators")

interval(1000).pipe(
  map(x => x * 2),
  map(x => x === 2 ? undefined : x), // retorna null se o valor for 2 para causar um problema
  filterNil()
).subscribe(console.log)

// ignora os retornos undefined e null
function filterNil() {
  // source é o operator/observable anterior
  return function (source) {
    // retorna um novo observable com um objeto contendo os 3 métodos:
    return new Observable(subscriber => {
      const subscription = source.subscribe({
        next(value) {
          if (value !== undefined && value !== null) {
            subscriber.next(value)
          }
        },
        error(error) {
          subscriber.error(error)
        },
        complete() {
          subscriber.complete()
        }
      })
      return () => subscription.unsubscribe();
    })
  }
}