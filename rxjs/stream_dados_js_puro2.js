const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function stream(lista, index = 0) {
  return {
    start(fn) {
      const interval = setInterval(() => {
        fn(lista[index])
        index++
        if (index >= lista.length) {
          clearInterval(interval)
        }
      }, 500);
      return {
        stop() {
          clearInterval(interval)
        }
      }
    }
  }
}

const streamNumbersX2 = stream(numeros)

streamNumbersX2.start(n => console.log(n * 2))