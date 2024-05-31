/* 
  11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require("prompt-sync")();

let int = parseInt(prompt("Digite um numero inteiro: "));

while (int >= 0 && !isNaN(int)) {
	let oddEven = int % 2 === 0 ? "Par" : "Impar";
	console.log(oddEven);
	int = parseInt(prompt("Digite um numero inteiro: "));
}
