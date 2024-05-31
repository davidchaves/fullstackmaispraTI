/* 
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/
// Definir a matriz M

const M = [
	[1, -3, 5, -7, 9, -11, 13, -15],
	[-1, 2, -3, 4, -5, 6, -7, 8],
	[9, -8, 7, -6, 5, -4, 3, -2],
	[-1, -2, -3, -4, -5, -6, -7, -8],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1],
];

// Inicializar o vetor C
const C = [];

// Iterar sobre cada linha de M
M.forEach((row) => {
	// Contar os elementos negativos na linha
	const negativeCount = row.filter((element) => element < 0).length;
	// Adicionar a contagem ao vetor C
	C.push(negativeCount);
});

// Exibir o vetor C
console.log("Vetor C:", C);
