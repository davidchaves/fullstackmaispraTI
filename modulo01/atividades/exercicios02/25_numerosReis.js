/* 
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.


15 linhas
20 colunas
*/

let arr = Array(15)
	.fill()
	.map(() => Array(20).fill(0));

console.log(arr);

for (let i = 0; i < 15; i++) {
	for (let j = 0; j < 20; j++) {
		arr[i][j] = Math.floor(Math.random() * 50);
	}
}

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i].join(", "));
}

let columnSums = Array(20).fill(0);

// Calcula a soma de cada coluna
for (let i = 0; i < 15; i++) {
	for (let j = 0; j < 20; j++) {
		columnSums[j] += arr[i][j];
	}
}

// Exibe as somas de cada coluna
console.log("\nSomas das colunas: " + columnSums.join(", "));
