const prompt = require("prompt-sync")()

let n1 = parseInt(prompt("Insira o primeiro numero: "))
let n2 = parseInt(prompt("Insira o segundo numero: "))
let op = prompt("Insira a operacao desejada (+, -, /, *): ")

function calc(op, n1, n2) {
	let resultado

	if (op === "+") {
		resultado = n1 + n2
	} else if (op === "-") {
		resultado = n1 - n2
	} else if (op === "*") {
		resultado = n1 * n2
	} else if (op === "/") {
		if (n2 !== 0) {
			resultado = n1 / n2
		} else {
			console.log("Erro: Nao é possível dividir por zero")
			resultado = undefined
		}
	} else {
		console.log("Operacao invalida")
	}

	if (resultado !== undefined) {
		return resultado
	}
}

console.log(calc(op, n1, n2))
