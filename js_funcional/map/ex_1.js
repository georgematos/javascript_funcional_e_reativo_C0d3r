const nums = [2, 1, 5, 4, 3]
// funcao que será passada para o map: parametros: elemento, indice, proprio array
const dobro = (n, i, array) => `indice: ${i} - ${n * 2}`

console.log(nums.map(dobro));

const nomes = ["Ryu", "Ken", "Dhalsim", "Chun-li", "Cammy"]
const primeiraLetra = (n) => n[0]
const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)