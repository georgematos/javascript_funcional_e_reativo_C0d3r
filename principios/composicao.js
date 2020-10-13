function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}

const gritar = (texto) => texto.toUpperCase();

const enfatizar = (texto) => texto + "!!!"

const arrastarFala = (texto) => texto.split("").join(" ")

const resultado = composicao(
  gritar,
  enfatizar,
  arrastarFala
)("pare")

console.log(resultado)
