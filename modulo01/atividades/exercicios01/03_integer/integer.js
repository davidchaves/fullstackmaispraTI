/* 
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const prompt = require("prompt-sync")();

let integer1 = Math.trunc(
	prompt("Digite o valor do inteiro a ser somado com 25: ")
);
let integer2 = Math.trunc(
	prompt("Digite o valor do segundo inteiro a ser triplicado: ")
);
let integer3 = Math.round(
	prompt(
		"Digite o Terceiro inteiro que sera modificado 12% do valor original: "
	)
);

integer1 += 25;
integer2 *= 3;
integer3 *= 0.12;
let sumValues = integer1 + integer2 + integer3;

if (isNaN(sumValues)) {
	console.log("Operacao Invalida, digite apenas numeros");
} else {
	console.log(`\nO resultado da soma do inteiro com 25 é: ${integer1}`);
	console.log(`O triplo é: ${integer2}`);
	console.log(`12% do valor original é: ${integer3}`);
	console.log(`O resultado da soma dos valores originais é: ${sumValues}`);
}
