// versão simples de uso da técnica currying
// são funções aninhadas onde uma função chama a outra passando seu proprio argumento
// de forma implícita
function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(soma(5)(5)(5))

// uma vesão mais complexa do uso da técnica --> Segue para a próxima versão

function textoTemTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || '').trim().length
  if (tamanho < min || tamanho > max) {
    throw erro
  }
}

const p1 = { nome: "Mouse", preco: 14.99, desc: 0.25 }

textoTemTamanhoEntre(7, 255, "Nome inválido", p1.nome)