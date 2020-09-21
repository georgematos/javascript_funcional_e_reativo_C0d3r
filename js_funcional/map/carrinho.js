const carrinho = [
  { nome: 'Playstation 5', qtd: 1, preco: 4999.90 },
  { nome: 'Xbox Series S', qtd: 2, preco: 4999.90 },
  { nome: 'Xbox Sereis X', qtd: 0, preco: 4999.90 },
  { nome: 'Demon\'s Souls', qtd: 5, preco: 349.90 },
  { nome: 'Spider Man - Miles Morales', qtd: 3, preco: 349.90 },
]

const produtos = carrinho.map(x => x.nome)
console.log(produtos)

const consolidado = carrinho.map(x => { 
  x.total = (x.preco * x.qtd).toFixed(2) * 1
  return x
})
console.log(consolidado)

console.log(`total carrinho: ${consolidado.reduce((total, x) => total += x.total, 0).toFixed(2) * 1}`)