class Produto {

  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }
  
  getPrecoComDesconto(desconto) {
    const precoComDesconto = this.preco * desconto / 100
    return this.preco - precoComDesconto
  }
}

const p1 = new Produto('PS 5', 5000)

console.log(p1.nome, p1.preco)
console.log(p1.nome, p1.getPrecoComDesconto(15))

