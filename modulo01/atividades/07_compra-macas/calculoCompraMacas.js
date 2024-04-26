/*  
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")();

let apples = Math.trunc(prompt("Informe quantas maçãs serao compradas: "));
let price;

if (apples > 0 && apples < 12) {
	price = 0.3 * apples;
	console.log(`Valor total: ${price}`);
} else if (apples >= 12) {
	price = 0.25 * apples;
	console.log(`Valor total: ${price}.`);
} else {
	console.log("Operacao invalida.");
}
