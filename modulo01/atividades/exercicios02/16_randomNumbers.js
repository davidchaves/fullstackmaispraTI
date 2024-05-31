/* 
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let prompt = require("prompt-sync")();
let arrayNumbers = [];

function randomNumbers(size, fn) {
	for (let i = 0; i < size; i++) {
		let randomNumbers = Math.floor(Math.random() * 100);
		arrayNumbers.push(randomNumbers);
	}

	return fn(arrayNumbers);
}

//order em ordem crescente
function sortArray(array) {
	console.log(array.slice().sort((a, b) => a - b));
}

randomNumbers(20, sortArray);
