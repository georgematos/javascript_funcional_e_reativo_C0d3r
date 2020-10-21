/**
 * Criar uma função que retorne todos elementos de 
 * um array como uma stream de dados, cada dado sendo
 * retornado 1 segundo apos o outro, permitindo ao
 * usuário tratar cada através de um Observable
 */

const { Observable } = require("rxjs");

function of(dados) {
  return new Observable(subscriber => {
    dados.forEach((dado, i) => {
      setTimeout(() => {
        subscriber.next(dado)
        if(i === dados.length - 1) {
          subscriber.complete()
        }
      }, 1000 * i);
    })
  });
}

const listaDeDados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

of(listaDeDados).subscribe(x => console.log(Math.pow(2, x)))