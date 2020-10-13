// Funções aninhadas onde uma função chama a outra 
// passando seu proprio argumento de forma implícita

const p1 = { nome: "Mouse", preco: 14.99, desc: 0.25 }
const p2 = { nome: "Mouse Gamer", preco: 14.99, desc: 0.25 }

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

function aplicarValidacao(fn) {
  return function(valor) {
    // Lazy evaluation
    try {
      fn(valor)
    } catch (error) {
      return { error }
    }
  }
}

const textoEntre8e255 = textoTemTamanhoEntre(8)(255)
const nomeValido = textoEntre8e255("Texto inválido")

const validarSeNomeTemEntre8e255 = aplicarValidacao(nomeValido)

console.log(validarSeNomeTemEntre8e255(p1.nome))
console.log(validarSeNomeTemEntre8e255(p2.nome))