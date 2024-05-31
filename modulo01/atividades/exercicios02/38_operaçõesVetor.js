/* 
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

let prompt = require("prompt-sync")();

function operacoesVetor() {
	let vetor = [2, 4, 6, 8, 10, 12];

	console.log(`
  1- soma dos elementos;
  2- produto dos elementos;
  3- média dos elementos;
  4- ordene os elementos em ordem crescente;
  5- mostre o vetor.
  `);

	let identificador = parseInt(prompt("Escolha uma opcao: "));

	let resultado;

	switch (identificador) {
		case 1:
			// Soma dos elementos
			resultado = vetor.reduce((acc, val) => acc + val, 0);

			console.log("Soma dos elementos:", resultado.toFixed(2));
			break;
		case 2:
			// Produto dos elementos
			resultado = vetor.reduce((acc, val) => acc * val, 1);
			console.log("Produto dos elementos:", resultado.toFixed(2));
			break;
		case 3:
			// Média dos elementos
			resultado = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
			console.log("Média dos elementos:", resultado.toFixed(2));
			break;
		case 4:
			// Ordene os elementos em ordem crescente
			resultado = [...vetor].sort((a, b) => a - b); // Clonando vetor para não modificar o original
			console.log("Vetor ordenado em ordem crescente:", resultado.toFixed(2));
			break;
		case 5:
			// Mostre o vetor
			console.log("Vetor:", vetor);
			break;
		default:
			console.log("Identificador inválido.");
			break;
	}
}

operacoesVetor();
