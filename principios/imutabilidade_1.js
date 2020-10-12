const nums = [4, 2, 5, 7, 8, 3]

function ordenar(array) {
  return array.sort()
}

console.log(ordenar(nums))
console.log(nums)

// A função ordernar utiliza a função sort de um array.
// O sort modifica o array original. Usar um método externo já
// tornaria a função impura, mas aqui o cenário é ainda pior
// pois além disso ele modifica o próprio array

const nums2 = [4, 2, 5, 7, 8, 3]

function ordenar2(array) {
  return [...array].sort()
}

console.log(ordenar2(nums2))
console.log(nums2)

// O problema foi resolvido nos segundo exemplo, pois agora
// o array foi copiado antes de ser ordenado pelo sort e a 
// função retorna uma cópia ordenada do array sem alterar
// o original