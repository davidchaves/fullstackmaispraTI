/* 
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.

Se a RAZAO for positiva = PA crescente (R>0)
Se a RAZAO for igual a 0 = PA constante (R === 0)
Se a RAZAO for negativa = PA decrescente ( R<0)
*/

let prompt = require("prompt-sync")();
function calcularPA() {
	let termoA1 = parseInt(prompt("Digite o primeiro termo da PA: "));
	let razao = parseInt(prompt("Digite a razão da PA: "));
	let aN = parseInt(
		prompt("Digite um número de elementos na PA (igual ou maior que 10): ")
	);

	while (aN < 10) {
		aN = prompt("O número de elementos deve ser igual ou maior que 10.");
	}

	let pa = [];
	for (let i = 0; i < 10; i++) {
		//SEQUÊNCIAS NUMÉRICAS
		pa.push(termoA1 + i * razao);
	}

	let soma = pa.reduce((total, elemento) => total + elemento, 0);

	if (razao > 0) {
		console.log(
			"Os 10 primeiros elementos da PA crescente são: " + pa.join(", ")
		);
	} else if (razao < 0) {
		console.log(
			"Os 10 primeiros elementos da PA decrescente são: " + pa.join(", ")
		);
	} else {
		console.log(
			`Os 10 primeiros elementos da PA decrescente são: ${pa.join(", ")}`
		);
	}

	console.log("A soma dos elementos da PA é: " + soma);
}

calcularPA();
