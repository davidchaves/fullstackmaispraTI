/* 
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.


Do while que leia numeros
A cada laço, pergunte se o usuário quer continuar ou não. 

a) O somatório entre todos os valores; [x]
b) Qual foi o menor valor digitado; [x]
c) A média entre todos os valores; [x]
d) Quantos valores são pares. [x]
*/
let prompt = require("prompt-sync")();

let sum = 0;
let numbersArray = [];
let even;
let confirm = true;

do {
	let count = parseInt(prompt("Digite um numero: "));

	if (!isNaN(count) && Number.isSafeInteger(count)) {
		numbersArray.push(count);
		sum += count;
	} else {
		console.log("Digito invalido, digite SOMENTE numeros.");
	}
	console.log(sum);
} while (
	(confirm =
		prompt("Enter Y to continue or N to close: ").toUpperCase() === "N"
			? false
			: true)
);

even = numbersArray.filter((even) => even % 2 === 0).length;

console.log(`a) O somatório entre todos os valores: ${sum}`);
console.log("b) Menor valor valor digitado: ", Math.min(...numbersArray));
console.log(
	"c) Média entre todos os valores",
	(sum / numbersArray.length).toFixed(2)
);
console.log(`d) Quantos valores são pares: ${even}`);
