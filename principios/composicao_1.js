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

/* usando essa técina de composição de funções utilizando curriyng 
é possível crirar versões intermediárias da funções tornando-as mais 
flexíveis */

const exagerar = composicao(
  gritar,
  enfatizar,
  arrastarFala
)

const exagerarMenos = composicao(
  gritar,
  enfatizar
)

console.log(exagerar(("pare")))
console.log(exagerar(("cuidado com o cão")))

console.log(exagerarMenos("não entre na água"))
