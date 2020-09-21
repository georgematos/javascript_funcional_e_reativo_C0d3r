Array.prototype.meuMap = function(fn) { // lembre-se, prototype não trabalha com arrow function
  const result = []
  for(let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this))
  }
  return result
}

const lista = ["Street Fighter", "Path of Exile", "Dark Souls", "Metal Gear Solid", "The Witcher"]

const listaMaiuscula = lista.meuMap(x => x.toUpperCase())

console.log(lista, listaMaiuscula)