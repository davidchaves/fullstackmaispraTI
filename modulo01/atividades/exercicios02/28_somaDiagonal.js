/* 
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;

Formulas:
j > i - soma diagonal superior (2 + 3 + 6)

i < j - soma diagonal inferior (4 + 7 + 8) 
*/

// Inicializa a matriz M com valores aleatórios entre 1 e 10
let M = Array.from({ length: 10 }, () =>
	Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1)
);

// Função para calcular a soma dos elementos acima da diagonal principal
function sumAboveDiagonal(matrix) {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i + 1; j < matrix[i].length; j++) {
			sum += matrix[i][j];
		}
	}
	return sum;
}

// Função para calcular a soma dos elementos abaixo da diagonal principal
function sumBelowDiagonal(matrix) {
	let sum = 0;
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			sum += matrix[i][j];
		}
	}
	return sum;
}

// Calcula as somas
let sumAbove = sumAboveDiagonal(M);
let sumBelow = sumBelowDiagonal(M);

// Função para exibir uma matriz
function printMatrix(matrix, name) {
	console.log(name + ":");
	for (let row of matrix) {
		console.log(row.join(", "));
	}
	console.log("");
}

// Exibe a matriz M
printMatrix(M, "Matriz M");

// Exibe os resultados
console.log("Soma dos elementos acima da diagonal principal: " + sumAbove);
console.log("Soma dos elementos abaixo da diagonal principal: " + sumBelow);
