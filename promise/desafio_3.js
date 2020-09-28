const fs = require('fs') ;

const caminho = '../js_funcional/funcoes/dados.txt'

function lerArquivo(path) {
  return new Promise(resolve => {
    fs.readFile(path, (_, resp) => resolve(resp.toString()))
  })
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(resultado => `O resultado final do precessamento do arquivo: ${resultado}`)
  .then(console.log)