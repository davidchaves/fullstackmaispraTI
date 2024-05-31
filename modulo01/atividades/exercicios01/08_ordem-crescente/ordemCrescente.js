/* 
  8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")();

let value1 = parseInt(prompt("Informe um valor: "));
let value2 = parseInt(prompt("Informe outro valor diferente: "));

let firstValue = value1;
let secondValue = value2;

while (firstValue === secondValue) {
	secondValue = parseInt(prompt("Informe outro valor diferente: "));
}

if (secondValue < firstValue) {
	console.log(`${secondValue}, ${firstValue}`);
} else {
	console.log(`${firstValue}, ${secondValue}`);
}
