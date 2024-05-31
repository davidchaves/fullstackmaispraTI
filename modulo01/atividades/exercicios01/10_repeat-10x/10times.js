/* 
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require("prompt-sync")();
let n = prompt("Digite um numero inteiro: ");

let i = 0;
while (i < 10) {
	console.log(n);
	i++;
}
