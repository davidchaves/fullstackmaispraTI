/* 
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

//1 - pedra
//2 - papel
//3 - tesoura

let prompt = require("prompt-sync")();

function jokenPo(cb) {
	console.log("Escolha as opcoes:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura:");
	let player = prompt();
	let arr = ["", "Pedra", "Papel", "Tesoura"];
	let computer = cb(1, 3);

	console.log("\nPlayer: ", arr[player]);
	console.log("Computer ", arr[computer]);

	if (
		(computer == 1 && player == 3) ||
		(computer == 2 && player == 1) ||
		(computer == 3 && player == 2)
	) {
		console.log("Computer Won!");
	} else if (computer === player) {
		console.log("A tie!");
	} else {
		console.log("Player Won!");
	}
}

jokenPo(function (min, max) {
	return (Math.random() * (max - min) + min).toFixed();
});
