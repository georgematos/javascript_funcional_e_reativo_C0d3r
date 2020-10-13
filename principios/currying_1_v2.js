// Funções aninhadas onde uma função chama a outra 
// passando seu proprio argumento de forma implícita

const p1 = { nome: "Mouse", preco: 14.99, desc: 0.25 }

function textoTemTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function(texto) {
        // Lazy Evaluation
        const tamanho = (texto || '').trim().length
        if (tamanho < min || tamanho > max) {
          throw erro
        }
        return true
      }
    }
  }
}

// compoe uma função reaproveitando a funcao textoTemTamanhoEntre
// usando a caracteristica de closure das funções em JS para manter
// os tamanhos minimo e máximo (função parcial!)
const textoEntre8e255 = textoTemTamanhoEntre(8)(255)

// agora eu tenho uma função em que preciso apenas passar a msg de erro
// e a string a ser validada
console.log(textoEntre8e255("Nome inválido")(p1.nome)) // lança a excessão 

// assim, agora eu posso criar uma nova validação
const textoEntre4e255 = textoTemTamanhoEntre(4)(255)
console.log(textoEntre4e255("Nome inválido")(p1.nome)) // retorna true