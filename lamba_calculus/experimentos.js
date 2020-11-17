function soma(a) {
  return function add2(b) {
    return a + b
  }
}

let sum = soma(10)(5)

console.log(sum)

const pessoa = {
  nome: 'george', 
  profissao: 'programador'
}

console.log(pessoa['nome'])

const array = ['1','2','3','4','5']

const result = array.reduce((acc, el) => { return acc + el })

console.log(result)