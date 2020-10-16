function gerarNumerosAPartirDe(n, tempo) {
  return {
    iniciar(fn) {
      const interval = setInterval(() => {
        fn(n++)
      }, tempo)

      return {
        parar() {
          clearInterval(interval)
        }
      }
    }
  }
}

const gerar1 = gerarNumerosAPartirDe(1, 1000)
const gerar2 = gerarNumerosAPartirDe(3, 1500)

const exec1 = gerar1.iniciar((n) => console.log(`#1: ${n}`))
const exec2 = gerar2.iniciar((n) => { console.log(`#2: ${n * 2}`) })

setTimeout(() => {
  exec1.parar()
  exec2.parar()  
}, 10000);