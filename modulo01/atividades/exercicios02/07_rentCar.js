/* 
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

let prompt = require("prompt-sync")();

function chosenCar(cb) {
	let car;
	let km;
	let days;

	console.log(
		"Escolha a categoria desejada:\n 0 - Popular.\n 1 - Luxo. \n 2 - SAIR."
	);
	car = parseInt(prompt());
	car === 2
		? console.log("ENCERRANDO...") + process.exit(1)
		: console.log("Digite a quilometragem que irá percorrer:");
	km = Number(prompt());

	console.log("Digite os dias:");
	days = Math.trunc(prompt());

	// check cb has value + cb is a function or not
	if (car === 1 || (car === 0 && cb && "function" === typeof cb)) {
		return cb(car, km, days);
	} else {
		//terminal cleaning
		for (let i = 0; i < 100; i++) {
			console.log("");
			if (i === 95) {
				console.log(
					"\nDigite novamente! ou se preferir, digite 2 para SAIR.\n"
				);
			}
		}
		chosenCar(cb);
	}
}

chosenCar(function (rentCar, km, days) {
	let totalRent;

	if (km <= 200 && rentCar) {
		totalRent = 150 * days + 0.3 * km;
	} else if (km > 200 && rentCar) {
		totalRent = 150 * days + 0.25 * km;
	} else if (km <= 100 && !rentCar) {
		totalRent = 90 * days + 0.2 * km;
	} else {
		totalRent = 90 * days + 0.1 * km;
	}

	console.log(`\n -- Valor total: R$ ${totalRent.toFixed(2)}`);
});
