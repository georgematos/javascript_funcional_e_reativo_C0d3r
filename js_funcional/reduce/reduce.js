Array.prototype.meuReduce = function(fn, value) {
  let acc = 0
  if(value !== undefined) {
    acc = value
  }
  for(let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i], i, this)
  }
  return acc
}

const carrinho = [
  { nome: 'Playstation 5', qtd: 1, preco: 4999.90, fragil: false },
  { nome: 'Xbox Series S', qtd: 2, preco: 4999.90, fragil: false },
  { nome: 'Xbox Sereis X', qtd: 1, preco: 4999.90, fragil: false },
  { nome: 'Demon\'s Souls', qtd: 5, preco: 349.90, fragil: true },
  { nome: 'Spider Man - Miles Morales', qtd: 3, preco: 349.90, fragil: true },
]

let media = carrinho
  .map(x => x.qtd * x.preco)
  .meuReduce((ac, x) => {
    const novaqtd = ac.qtd + 1
    const novototal = ac.total + x
    return {
      qtd: novaqtd,
      total: novototal,
      media: novototal / novaqtd
    }
  }, { qtd: 0, total: 0, media: 0 })

console.log(media)