const prompt = require("prompt-sync")()

let numero = parseInt(prompt("Qual é o numero? "))

let evenOdd = numero % 2 === 0 ? "par" : "Impar"

console.log(evenOdd)
