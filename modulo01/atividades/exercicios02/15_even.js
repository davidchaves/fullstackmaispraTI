/* 
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
  final, mostre quais são os números pares que foram digitados e em que posições eles
  estão armazenados.
*/
let prompt = require("prompt-sync")();
let vetor = [];
let evenPositions = [];

for (let i = 0; i < 10; i++) {
	let n = parseInt(prompt("Digite um numero: "));
	vetor.push(n);
	if (n % 2 === 0) {
		evenPositions.push(i);
	}
}

let evenNumbers = vetor.filter((vet) => vet % 2 === 0);

console.log("Vetor: ", vetor);
console.log("numeros pares", evenNumbers);
console.log("Posicoes dos numeros pares", evenPositions);
