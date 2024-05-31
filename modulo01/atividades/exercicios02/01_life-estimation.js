/* 
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

let prompt = require("prompt-sync")();

function lifeEstimation() {
	let smokingTime = 10;
	let minutesDay = 1440;
	let cigarettesPerDay = parseInt(prompt("Quantos cigarros fumados por dia? "));
	let smokedCigarettesPerYear = parseInt(
		prompt("Quantos anos voce ja fumou? ")
	);

	let totalSmokedCigarettes = cigarettesPerDay * 365 * smokedCigarettesPerYear;

	let wastedLife = parseInt((smokingTime * totalSmokedCigarettes) / minutesDay);

	console.log("Voce perdeu aproximadamente", wastedLife, "dias de vida.");
}

lifeEstimation();
