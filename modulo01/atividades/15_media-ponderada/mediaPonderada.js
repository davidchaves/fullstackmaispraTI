/* 
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require("prompt-sync")();

let rangeNotas = 1;
let rangePeso = 1;
let somaPesos = 0;
let resultadoMedia = 0;

//truthy of falsy
while (rangeNotas && rangePeso) {
	rangeNotas = parseFloat(prompt("Digite um numero decimal: "));
	rangePeso = parseFloat(prompt("Indique a importancia desse numero: "));

	somaPesos += rangePeso;
	resultadoMedia += rangeNotas * rangePeso;
}

resultadoMedia /= somaPesos;

console.log(resultadoMedia.toFixed(1));
