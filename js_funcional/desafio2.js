const carrinho = [
  { nome: 'Playstation 5', qtd: 1, preco: 4999.90, fragil: false },
  { nome: 'Xbox Series S', qtd: 2, preco: 4999.90, fragil: false },
  { nome: 'Xbox Sereis X', qtd: 1, preco: 4999.90, fragil: false },
  { nome: 'Demon\'s Souls', qtd: 5, preco: 349.90, fragil: true },
  { nome: 'Spider Man - Miles Morales', qtd: 3, preco: 349.90, fragil: true },
]

// 1. fragil: true
let frageis = carrinho.filter(x => x.fragil === true)
console.log(frageis)

// 2. quatidade e preco => total
let total = frageis.reduce((ac, x) => ac += x.preco * x.qtd, 0)
console.log(total)

// 3. media dos totais
let media = carrinho
  .map(x => x.qtd * x.preco)
  .reduce((ac, x) => {
    const novaqtd = ac.qtd + 1
    const novototal = ac.total + x
    return {
      qtd: novaqtd,
      total: novototal,
      media: novototal / novaqtd
    }
  }, { qtd: 0, total: 0, media: 0 })

console.log(media)