const { Observable, interval } = require('rxjs')
const { map, reduce, takeUntil } = require('rxjs/operators')

const getList = new Observable((subscriber) => {
  const numbers = [1, 2, 3, 4, 5]
  numbers.forEach((val, index) => {
    setTimeout(() => {
      subscriber.next(val)
    }, 1000 * index);
  })
})

getList
  .pipe(
    // manterá a stream retornando dados por no máximo 5 segundos
    // se o tempo for reduzido para 3000 por exemplo o resultado será
    // a soma dos elementos até haverem passado 3 segundos
    takeUntil(interval(4000)),
    map(x => x * 2), // multiplica cada elemento retornado por 2
    reduce((acc, curr) => acc + curr, 0) // reduz todos os elementos ao valor de sua soma
  )
  .subscribe(console.log)