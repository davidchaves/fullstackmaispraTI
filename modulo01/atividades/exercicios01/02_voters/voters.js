/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.  
*/

const prompt = require("prompt-sync")();
const totalEleitores = 200;

let votosBrancos = Math.trunc(prompt("Votos brancos: "));
let votosNulos = Math.trunc(prompt("Votos nulos: "));
let votosValidos = Math.trunc(prompt("Votos validos: "));
let abstencao = totalEleitores - (votosBrancos + votosNulos + votosValidos);
console.log(abstencao);

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;
let percentualAbstencao = (abstencao / totalEleitores) * 100;

if (votosBrancos < 0 && votosNulos < 0 && votosValidos) {
	console.log("Digite um valor igual ou maior que 0.");
} else {
	console.log(`${percentualBrancos}% de votos Brancos.`);
	console.log(`${percentualNulos}% de votos Nulos.`);
	console.log(`${percentualValidos}% de votos Validos.`);
	console.log(`${percentualAbstencao}% de abstencao.`);
}
