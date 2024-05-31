/* 

*/

let prompt = require("prompt-sync")();

function randomNumbers(number) {
	let randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
	console.log("random: ", randomNumber);

	if (number() === randomNumber) {
		console.log("Voce Acertou!");
	} else {
		console.log("Tente novamente, digite somente numero de 1 a 5.");
	}
}

randomNumbers(function () {
	let guessNumber = parseInt(prompt("Qual valor sorteado? "));
	console.log("guess: ", guessNumber);
	return guessNumber;
});
