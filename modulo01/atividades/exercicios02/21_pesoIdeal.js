/* 
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

let prompt = require("prompt-sync")();

let altura = parseFloat(prompt("Digite sua altura: "));
let sexo = prompt("Sexo: M ou F: ").toLocaleUpperCase();

function peso(alt, sexo) {
	let pesoAjustado;

	if (sexo === "M") {
		pesoAjustado = pesoHomens(alt);
	} else if (sexo === "F") {
		pesoAjustado = pesoMulheres(alt);
	} else {
		pesoAjustado = "Digito invalido, digite M ou F.";
	}

	return pesoAjustado;
}

function pesoHomens(alt) {
	let pesoIdeal = 72.7 * alt - 58;
	let msgPeso = `Conforme as informacoes fornecidas, seu peso ideal é: ${pesoIdeal.toFixed(
		2
	)}`;

	return msgPeso;
}

function pesoMulheres(alt) {
	let pesoIdeal = 62.1 * alt - 44.7;
	let msgPeso = `Conforme as informacoes fornecidas, seu peso ideal é: ${pesoIdeal.toFixed(
		2
	)}`;

	return msgPeso;
}

console.log(peso(altura, sexo));
