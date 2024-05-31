/* 
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.

V = 6x6
*/

let prompt = require("prompt-sync")();

let M = Array(6)
	.fill()
	.map(() =>
		Array(6)
			.fill(0)
			.map(() => Math.floor(Math.random() * 10))
	);

let V = Array(6)
	.fill()
	.map(() => Array(6).fill(0));

function multiplicacaoDeVetores() {
	let A = parseInt(prompt("Digite o valor a ser multiplicado: "));

	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			V[i][j] = M[i][j] * A;
		}
	}

	V.forEach((v) => console.log(v.join(", ")));
}

multiplicacaoDeVetores();
