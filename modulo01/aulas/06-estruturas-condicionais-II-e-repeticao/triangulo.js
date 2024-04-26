const prompt = require("prompt-sync")()

let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado "))
let lado2 = parseInt(prompt("Insira o comprimento do segundo lado "))
let lado3 = parseInt(prompt("Insira o comprimento do terceito lado "))

if (
	(lado1 + lado2 > lado3) & (lado1 + lado3 > lado2) &&
	lado2 + lado3 > lado1
) {
	console.log("É impossível formar um triangulo com essas medidas")
} else {
	console.log("Não é possível formar um triangulo")
}
