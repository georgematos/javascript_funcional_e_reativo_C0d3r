function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // console.log("função de callback da promisse executada!")
      resolve("exibindo resposta da promisse")
    }, tempo)
  })
}

function retornaValor() {
  return new Promise(resolve => setTimeout(() => resolve(5), 2000))
}

async function executar() {
  // chama uma função que retorna uma promisse sem precisar usar then
  let valor = await retornaValor()
  return valor
}

esperarPor().then(console.log)
executar().then(console.log)