"use strict"

const numeros = [3, 12, 70, 21, 17, 2, 103]

console.log("Array original", numeros)

// MAP FILTER REDUCE

// criar um array adicionando 100 a cada elemento
const adiciona100 = (numero) => numero + 100
const numerosMais100 = numeros.map(adiciona100)
console.log("Números + 100", numerosMais100)

// criar um array com 50% de desconto
const desconto50porcentento = (valor) => valor * 0.5
const numeros50porcentoDesconto = numeros.map(desconto50porcentento)
console.log("desconto de 50%", numeros50porcentoDesconto)

// numeros menores que 20
const eMenor20 = (numero) => numero < 20
const numerosMenores20 = numeros.filter(eMenor20)
console.log("numero menor que 20", numerosMenores20)

// criar um novo array com os numeros pares
const ePar = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(ePar)
console.log("numeros pares", numerosPares)

// somar todos os elementos
const soma = (a, b) => a + b
const total = numeros.reduce(soma, 0)
console.log("Soma de todos os elementos", total)

// somar do todos elementos pares manores que 20
const resultado = numeros.filter(ePar).filter(eMenor20).reduce(soma, 0) 
console.log("resuldo", resultado)