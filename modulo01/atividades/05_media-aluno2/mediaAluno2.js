/* 
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
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
} else if (MEDIA_FINAL < 6.0) {
	console.log("Voce foi REPROVADO! Estude mais");
} else {
	console.log(
		`\nPARABENS, ${aluno}! SUA MEDIA FINAL É ${MEDIA_FINAL} E VOCE FOI APROVADO.`
	);
}
