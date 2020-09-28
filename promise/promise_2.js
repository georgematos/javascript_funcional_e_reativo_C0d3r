// setTimeout(function() {
//   console.info("Excecutando callback...")

//   setTimeout(function() {
//     console.info("Excecutando callback...")

//     setTimeout(function() {
//       console.info("Excecutando callback...")
//     }, 2000)

//   }, 2000)

// }, 2000)

function esperarPor(tempo = 1000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("função de callback da promisse executada!")
      resolve("exibindo resposta da promisse")
    }, tempo)
  })
}

// esperarPor()
//   .then(() => esperarPor())
//   .then(() => esperarPor())

esperarPor()
  .then((resposta) => {
    console.log(resposta)
    esperarPor(2000)
      .then((resposta) => {
        console.log(resposta)
        esperarPor(3000)
          .then((resposta) => {
            console.log(resposta)
          })
      })
  })



