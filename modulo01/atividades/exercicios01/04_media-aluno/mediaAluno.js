/* 
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/
const prompt = require("prompt-sync")();

let aluno = prompt("Aluno: ");
let avaliacao1 = parseFloat(
	prompt("Informe a nota da avaliacao do primeiro semestre: ")
);
let avaliacao2 = parseFloat(
	prompt("Informe a nota da avaliacao do segundo semestre: ")
);

const MEDIA_FINAL = (avaliacao1 + avaliacao2) / 2;

if (!aluno || avaliacao1 < 0 || avaliacao2 < 0 || isNaN(MEDIA_FINAL)) {
	console.log(
		"Operacao invalida. Digite o nome do aluno e as notas de 0 a 10."
	);
} else {
	console.log(
		`PARABENS, ${aluno}! SUA MEDIA FINAL É ${MEDIA_FINAL} E VOCE FOI APROVADO.`
	);
}
