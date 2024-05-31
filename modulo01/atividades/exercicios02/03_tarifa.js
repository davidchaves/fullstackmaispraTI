/* 
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

let prompt = require("prompt-sync")();

function tarifa() {
	let travel = parseInt(prompt("Quantos km's até seu destino final? "));
	let price = travel <= 200 ? 0.5 * travel : 0.45 * travel;

	console.log(`Preco total da passagem: R$ ${price}`);
}
tarifa();
