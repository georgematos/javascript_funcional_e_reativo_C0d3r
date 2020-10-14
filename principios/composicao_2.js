function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

const gritar = (texto) => texto.toUpperCase();

const enfatizar = (texto) => texto + "!!!"

const arrastarFala = (texto) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(texto.split("").join(" "))
    }, 2000);
  })
}

/* usando essa técina de composição de funções utilizando curriyng 
é possível crirar versões intermediárias da funções tornando-as mais 
flexíveis */

const exagerar = composicao(
  gritar,
  enfatizar,
  arrastarFala
)

exagerar("pare").then(console.log)
