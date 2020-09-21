// 1 1 2 3 5 8 13
console.log(fib(4))
function fib(num) {

  if(num === 0) return 0
  if(num === 1) return 1

  let anterior = 0
  let atual = 1
  let result = 0

  while (num > 1) {
    result = atual + anterior
    anterior = atual
    atual = result
    num--
  }

  return result

}

// console.log(fiboRecursivo(42))

// function fiboRecursivo(num) {
//   if(num === 0) return 0
//   if(num === 1) return 1

//   return fiboRecursivo(num - 1) + fiboRecursivo(num - 2)
// }
