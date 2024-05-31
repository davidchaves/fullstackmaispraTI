/* 
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

let prompt = require("prompt-sync")();

let speedLimitCar = 80;

function speedLimit(limit) {
	let speed = prompt("Qual a velocidade atual do carro? ");
	let isSpeeding = speed > limit ? true : false;
	let fine;

	if (isSpeeding) {
		fine = (speed - limit) * 5;
		console.log("limite de velocidade de 80km, valor da multa é de, R$", fine);
	} else {
		console.log("Velocidade atual:", speed);
	}
}

speedLimit(speedLimitCar);
