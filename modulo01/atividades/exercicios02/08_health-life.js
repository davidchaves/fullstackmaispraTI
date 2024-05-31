/* 
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

Entrada: Quantidade de horas de atividade física realizadas em um mês.
Cálculo de Pontos:
Até 10 horas: 2 pontos por hora.
De 11 a 20 horas: 5 pontos por hora.
Mais de 20 horas: 10 pontos por hora.
Conversão para Dinheiro: Cada ponto vale R$ 0,05.
*/

const prompt = require("prompt-sync")();

// Gera um ID único
function createGuid() {
	const s4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

// Calcula pontos com base nas horas de atividade
function calculateRewards(hours) {
	let points;

	if (hours <= 10) {
		points = hours * 2;
	} else if (hours <= 20) {
		points = 20 + (hours - 10) * 5;
	} else {
		points = 70 + (hours - 20) * 10;
	}

	const cash = points * 0.05;

	return [hours, points, cash];
}

// Exibe as informações do usuário
function displayUserInfo(profile) {
	//desestruturacao de array
	const [hours, points, cash] = calculateRewards(profile.workoutHours);

	console.log(
		`\n*******************************************************************************` +
			`\nUsuario: ${profile.fullName}\n` +
			`Total de horas de atividade: ${hours} horas\n` +
			`Total de pontos ganhos: ${points} pontos\n` +
			`Total em dinheiro: R$ ${cash}\n`
	);
}

// Registra e processa todos os usuários
function processUsers() {
	const users = [
		{
			id: "0",
			startDate: new Date("January 1, 2017"),
			state: "Rio de Janeiro",
			role: "Computer sci",
			plan: "monthly",
			birthDate: new Date(1992, 8, 17),
			workoutHours: 10,
		},
		{
			id: "1",
			startDate: new Date("January 1, 2017"),
			state: "Rio de Janeiro",
			role: "Engenheiro de Software",
			plan: "monthly",
			birthDate: new Date(1992, 8, 17),
			workoutHours: 40,
		},
	];

	users.forEach((user) => {
		if (!user.id) user.id = createGuid();
		Object.assign(user, getPersonalInfo());
		displayUserInfo(user);
	});
}

// Captura e retorna informações pessoais do usuário
function getPersonalInfo() {
	return {
		firstName: prompt("Digite seu primeiro nome? "),
		lastName: prompt("Digite seu ultimo nome? "),
		get fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
	};
}

processUsers();
