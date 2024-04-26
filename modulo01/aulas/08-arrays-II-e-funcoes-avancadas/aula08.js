/* Arrays e funcoes */

// Exercicio 1: Somar todos os elementos de um array

let elementos = [1, 2, 3, 4];

function somaElementos(vetor) {
	let soma = 0;
	for (let i = 0; i < vetor.length; i++) {
		soma += vetor[i];
	}
	return soma;
}

console.log("A soma dos elementos é: ", somaElementos(elementos));

/* Retorna o maior numero */
function maiorNumero(vetor) {
	let maior = vetor[0];
	for (let i = 0; i < vetor.length; i++) {
		if (vetor[i] > maior) {
			maior = vetor[i];
		}
	}
	return maior;
}

console.log("Maior: ", maiorNumero(elementos));

/* Reverter numeros */
function reverterArray(vetor) {
	let vetorResultado = [];
	for (let i = vetor.length - 1; i >= 0; i--) {
		vetorResultado.push(vetor[i]);
	}

	return vetorResultado;
}

console.log("O vetor invertido é: ", reverterArray([1, 2, 3, 4]));

/* Soma todos os elementos de uma matriz */

function somaMatriz(matriz) {
	let soma = 0;
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			soma += matriz[i][j];
		}
	}
	return soma;
}

console.log(
	"A soma dos elementos contidos na nossa matriz é: ",
	somaMatriz([
		[1, 2],
		[3, 4],
	])
);

/* Encontrar maior numero em uma matriz */
function maiorNumeroMatriz(matriz) {
	let maior = matriz[0][0];
	for (let i = 0; i < matriz.length; i++)
		for (let j = 0; j < matriz[i].length; j++) {
			if (matriz[i][j] > maior) {
				maior = matriz[i][j];
			}
		}
	return maior;
}

console.log(
	"O maior numero da minha matriz é: ",
	maiorNumeroMatriz([
		[1, 2],
		[3, 4],
	])
);

/* Funcoes avancadas: String */

/* 
  String é considerado um valor primitivo, porém, ao ser interpretado ao JS os converter em objetos possuindo propriedades e métodos.
*/

let nome = "Gabriela";
console.log("Indexof: ", nome.indexOf("a"));

let nome1 = "Dick Vigarista";
console.log(nome1);
console.log(nome1.replace("Dick Vigarista", "Pica Pau"));

//Matematicas

let x = Math.round(10.1);
console.log(x);

let data = new Date();
console.log(data.getFullYear());
data.setMonth(data.getFullYear() + 5);
console.log(data.toString());
console.log(data.toString("yyyy-MM-dd"));
