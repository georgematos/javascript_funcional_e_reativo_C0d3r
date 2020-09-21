// pilha = stack
// fila = event queue

function fn4() {
  console.log('timeout da fn4')
}

function fn3() {
  setTimeout(() => fn4(), 2000)
  console.info('fn3')
}
function fn2() {
  // coloca mais uma função na fila para execução
  setTimeout(() => console.log('timeout da fn2'), 1000)
  // chama a função fn3 e coloca ela na pilha
  console.info('fn2')
  fn3()
}
function fn1() {
  // chama a função fn2 e coloca ela na pilha
  console.info('fn1')
  fn2()
}

function main() {
  // o time oute irrisório prova que a fila só começará a ser executada após toda a pilha terminar.
  setTimeout(() => console.log('timeout da fn1'), 0.0001)
  console.info('main')
  fn1()
}

// chama a função main e coloca ela na pilha
main()