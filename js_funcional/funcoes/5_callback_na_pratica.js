const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
  if(err) {
    console.log("Ocorreu um erro ao ler o arquivo.")
  } else {
    console.log(conteudo.toString());
  }
}

// assincrono
console.log("start...")
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log("end...")

// sincrono
// console.log("start...")
// const conteudo = fs.readFileSync(caminho)
// console.log(conteudo.toString())
// console.log("end...")