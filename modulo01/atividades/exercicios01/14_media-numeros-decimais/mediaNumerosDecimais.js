/* 
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

let N = 1;

let i = 0;
let soma = 0;
let media;

//truthy of falsy
while (N) {
	N = parseFloat(prompt("Digite um numero: "));
	soma += N;
	i++;

	media = soma / i;
}

console.log(media.toFixed(1));
