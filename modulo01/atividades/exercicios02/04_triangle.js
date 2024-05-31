/* 
Condicao de existencia
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/
let prompt = require("prompt-sync")();

function triangleExist(cb) {
	let a = parseInt(prompt("Digite o tamanho do primeiro segmento de reta: "));
	let b = parseInt(prompt("Digite o tamanho do segundo segmento de reta: "));
	let c = parseInt(prompt("Digite o tamanho do terceiro segmento de reta: "));

	let triangleArray = [a, b, c];
	let max = Math.max(...triangleArray);
	let result = triangleArray.filter((value) => value < max);

	cb(result, max);
}

triangleExist(function (resultFiltered, max) {
	let total = resultFiltered.reduce(function (acc, val) {
		return acc + val;
	}, 0);

	if (total < max || total === max) {
		console.log("Nao é possível formar o triangulo");
	} else {
		console.log("É possível formar um triângulo com esses segmentos de reta.");
	}
});
