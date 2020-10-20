/**
 * Há dois tipos de operadores no RXJS:
 * 1 - Operadores de criação
 * 2 - Operadores encadeáveis
 */

// criação
// of cria um observable como uma stream de dados
// from cria um observable como uma stream de dados a partir de um array
const { of, from } = require('rxjs')

// encadeável
const { first, last, map } = require('rxjs/operators')

const obs$ = of(1, 2, 'ana', false, 'ultimo')
const obsB$ = from([1, 2, 'ana', false, 'ultimo'])

obs$
  .pipe(last())
  .pipe(map(x => x[0]))
  .subscribe((val) => console.log(val))

obs$
  .pipe(first())
  .subscribe((val) => console.log(val))

obsB$
  .pipe(last())
  .pipe(map(x => x.slice(2, x.length)))
  .subscribe(val => console.log(val))
