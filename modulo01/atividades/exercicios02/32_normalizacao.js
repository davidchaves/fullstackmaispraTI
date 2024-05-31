/* 
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.

//m(12,13)
*/

let M = Array(12)
	.fill()
	.map(() =>
		Array(13)
			.fill()
			.map(() => Math.floor(Math.random() * 30))
	);

function encontrarMaiorValorAbsoluto(linha) {
	// Aplica Math.abs a cada elemento da linha e encontra o maior valor
	return Math.max(...linha.map(Math.abs));
}

// Encontra o maior valor absoluto em toda a matriz
let maiorAbsoluto = Math.max(...M.map(encontrarMaiorValorAbsoluto));

console.log(M);
console.log("Maior valor absoluto: ", maiorAbsoluto);

let ArrDividido = [];
ArrDividido.push(M.map((e) => e.map((e) => (maiorAbsoluto / e).toFixed(2))));

console.log("Numeros divididos: ", ArrDividido);
