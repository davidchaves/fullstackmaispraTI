/* 
12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
 */

//const prompt = require("prompt-sync")();
//let randomNumbers = Math.floor(Math.random() * (1999 - 1000 + 1)) + 1000;

let i = 1000;

while (i <= 1999) {
	if (i % 11 === 5) {
		console.log(i);
	}
	i++;
}
