/* 
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const prompt = require("prompt-sync")();

let ladoA = Math.trunc(prompt("Insira o comprimento do primeiro lado: "));
let ladoB = Math.trunc(prompt("Insira o comprimento do segundo lado: "));
let ladoC = Math.trunc(prompt("Insira o comprimento do terceiro lado "));

if (!(ladoA && ladoB && ladoC)) {
	console.log("Erro: Insira somente numeros acima de 0.");
} else if (ladoA === ladoB && ladoB === ladoC) {
	console.log("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
	console.log("Triângulo Isósceles");
} else if (ladoA !== ladoB && ladoB !== ladoC) {
	console.log("Triângulo Escaleno");
}
