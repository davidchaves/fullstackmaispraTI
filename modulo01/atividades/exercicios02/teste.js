// Inicializa a matriz M(12,13) com valores aleatórios entre -10 e 10
let M = Array.from({ length: 12 }, () =>
	Array.from({ length: 13 }, () => Math.floor(Math.random() * 21 - 10))
);

// Função para encontrar o maior valor absoluto em uma linha
function encontrarMaiorValorAbsoluto(linha) {
	return Math.max(...linha.map(Math.abs));
}

// Função para normalizar uma linha
function normalizarLinha(linha, maxValue) {
	return linha.map((element) => element / maxValue);
}

// Copia a matriz original
let M_original = M.map((linha) => linha.slice());

// Processa cada linha da matriz
for (let i = 0; i < M.length; i++) {
	let maxValue = encontrarMaiorValorAbsoluto(M[i]);
	if (maxValue !== 0) {
		// Evita divisão por zero
		M[i] = normalizarLinha(M[i], maxValue);
	}
}

// Exibe a matriz original e a matriz modificada
console.log("Matriz Original:");
M_original.forEach((linha) => console.log(linha));

console.log("\nMatriz Modificada:");
M.forEach((linha) => console.log(linha));
