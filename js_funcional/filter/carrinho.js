const carrinho = [
  { nome: 'Playstation 5', qtd: 1, preco: 4999.90 },
  { nome: 'Xbox Series S', qtd: 2, preco: 4999.90 },
  { nome: 'Xbox Sereis X', qtd: 0, preco: 4999.90 },
  { nome: 'Demon\'s Souls', qtd: 5, preco: 349.90 },
  { nome: 'Spider Man - Miles Morales', qtd: 3, preco: 349.90 },
]

const qtdMaiorQueZero = item => item.qtd > 0;

const itensValidos = carrinho.filter(qtdMaiorQueZero)

console.log(itensValidos)