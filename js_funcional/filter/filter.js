Array.prototype.meuFilter = function(fn) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}

const chars = ['Ryu', 'Ken', 'Chun-li', 'Laura', 'Urien']

console.log(chars.meuFilter(x => x.length > 4))