/* 
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let prompt = require("prompt-sync")();
let arr = [];
console.log(`
Calculo dos 10 primeiros elementos da Sequência de Fibonacci
**************************************************************\n`);
let e1 = parseInt(prompt("Digite o primeiro termo: "));
let e2 = parseInt(prompt("Digite o segundo termo: "));
arr.push(e1);
arr.push(e2);

function fibonacci(arr) {
	console.log(arr);
	for (let i = 2; i < 10; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
}

let fibonacciSequence = fibonacci(arr).join(", ");

console.log(fibonacciSequence);
