/* 
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

function generateFibonacci(n) {
	let fibSequence = [1, 1];
	for (let i = 2; i < n; i++) {
		fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
	}
	return fibSequence;
}

const fibonacciArray = generateFibonacci(15);
console.log(fibonacciArray);
