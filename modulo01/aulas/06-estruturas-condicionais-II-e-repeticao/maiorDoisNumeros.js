const prompt = require("prompt-sync")()

let numero1 = parseInt(prompt("Insira o primeiro numero"))
let numero2 = parseInt(prompt("Insira o segundo numero"))

if (numero1 > numero2) {
	console.log("O primeiro numero é maior")
} else if (numero2 > numero1) {
	console.log("O segundo numero é maior")
} else {
	console.log("Os numeros sao iguais")
}
