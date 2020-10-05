class Produto {

  // atributos privados iniciam com #
  #nome
  #preco

  constructor(nome, preco) {
    this.desconto = 0
    this.#nome = nome
    this.#preco = preco
  }

  get precoComDesconto() {
    const precoComDesconto = this.#preco * this.desconto / 100
    return this.#preco - precoComDesconto
  }

  get nome() {
    return this.#nome
  }

  set nome(valor) {
    this.#nome = valor
  }

  get preco() {
    return this.#preco
  }

  set preco(valor) {
    if (valor >= 0) {
      this.#nome = valor
    }
  }

}

const p1 = new Produto('PS 5', 4999)

console.log(p1.nome, p1.preco)
p1.desconto = 15
// p1.preco = -19
console.log(p1.nome, p1.precoComDesconto)
// tentativa de alterar o preco do produto diretamente sem o set
p1.preco = 10
console.log(p1.preco)