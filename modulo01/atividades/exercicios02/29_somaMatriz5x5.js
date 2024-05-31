/* 
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.

Formulas:
j > i - soma diagonal superior (2 + 3 + 6)

i < j - soma diagonal inferior (4 + 7 + 8)
*/

let M = Array(5)
	.fill()
	.map(() =>
		Array(5)
			.fill(0)
			.map(() => Math.floor(Math.random() * 9))
	);

let sumLinha = 0;
let sumColuna = 0;
let sumDiagPrinc = 0;

//a) da linha 4 de M;
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		if (i === 3) {
			sumLinha += M[i][j];
		}
	}
}

//b) da coluna 2 de M;
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		if (j === 1) {
			sumColuna += M[i][j];
		}
	}
}

//c) da diagonal principal;
for (let i = 0; i < 5; i++) {
	sumDiagPrinc += M[i][i];
}

//Formatando a matriz
for (let i = 0; i < 5; i++) {
	console.log(M[i].join(", "));
}

console.log("Soma linha 4:", sumLinha);
console.log("Soma coluna 2:", sumColuna);
console.log("Soma diagonal principal:", sumDiagPrinc);
