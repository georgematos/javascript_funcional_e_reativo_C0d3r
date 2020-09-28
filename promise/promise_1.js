let promessa = new Promise(function(resolve) {
  // simula uma função que consulta um serviço que tem tempo de resposta variável, no caso, 2,5 segundos.
  setTimeout(function() {
    resolve('Respota da requisição fake.')
  }, 2500)
})

promessa.then(resposta => console.log(resposta))

