/* 
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/
let prompt = require("prompt-sync")();
let vetorNomes = [];
let i = 0;

while (i < 7) {
	let nome = prompt("Digite um nome: ");
	vetorNomes.push(nome);
	i++;
}

let reverseVetor = vetorNomes.reverse().join(", ");

console.log(reverseVetor);
