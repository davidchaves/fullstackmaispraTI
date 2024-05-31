/* 
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/
let prompt = require("prompt-sync")();

// Função para ler os dados das 9 pessoas
function readPeopleData() {
	let names = [];
	let ages = [];

	for (let i = 1; i < 10; i++) {
		let name = prompt(`Digite o nome da pessoa ${i}: `);
		let age = parseInt(prompt(`Digite a idade da pessoa ${i}: `), 10);
		names.push(name);
		ages.push(age);
	}

	return { names, ages };
}

// Função para listar as pessoas menores de idade
function listMinors(names, ages) {
	let minors = [];

	for (let i = 0; i < ages.length; i++) {
		if (ages[i] < 18) {
			minors.push({ name: names[i], age: ages[i] });
		}
	}

	return minors;
}

// Lê os dados das 9 pessoas
let peopleData = readPeopleData();
let names = peopleData.names;
let ages = peopleData.ages;

// Lista e mostra as pessoas menores de idade
let minors = listMinors(names, ages);

console.log("Pessoas menores de idade:");
for (let i = 0; i < minors.length; i++) {
	console.log(`Nome: ${minors[i].name}, Idade: ${minors[i].age}`);
}
