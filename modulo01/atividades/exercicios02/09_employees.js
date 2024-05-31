/* 
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

let prompt = require("prompt-sync")();

let menWage = 0;
let womenWage = 0;
let confirm = true;

function totalWage() {
	let wage = 0;
	let gender;

	while (confirm) {
		wage = parseFloat(prompt("Enter the employee's salary: "));
		gender = prompt(
			"Enter the employee's gender (M for male, F for female): "
		).toUpperCase();
		confirm =
			prompt("Enter Y to continue or N to close: ").toUpperCase() === "N"
				? false
				: true;

		if (gender === "M") {
			menWage += wage;
		} else if (gender === "F") {
			womenWage += wage;
		} else {
			console.log("Invalid gender. Please enter M for male or F for female.");
			continue;
		}
	}

	console.log(`Total wages paid to men: R$ ${menWage.toFixed(2)}`);
	console.log(`Total wages paid to women: R$ ${womenWage.toFixed(2)}`);
}

totalWage();
