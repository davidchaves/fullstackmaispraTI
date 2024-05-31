/* 
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].

A = 3x5
B = 3x5
P = 3x5
*/

let arrA = Array(3)
	.fill()
	.map(() =>
		Array(5)
			.fill()
			.map(() => Math.floor(Math.random() * 10))
	);

let arrB = Array(3)
	.fill()
	.map(() =>
		Array(5)
			.fill()
			.map(() => Math.floor(Math.random() * 10))
	);

let arrP = Array(3)
	.fill()
	.map(() => Array(5).fill(0));

//Calculando Matriz P

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 5; j++) {
		arrP[i][j] = arrA[i][j] * arrB[i][j];
	}
}

function displayMatrix(name, matrix) {
	console.log(name);
	for (let row of matrix) {
		console.log(row.join(", "));
	}
}

displayMatrix("Matrix A:", arrA);
displayMatrix("\nMatrix B:", arrB);
displayMatrix("\nMatrix P:", arrP);
