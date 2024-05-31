/* 
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.

Nome, cargo e salário
*/

let prompt = require("prompt-sync")();

function inputEmployeeData() {
	let employee = {
		name: prompt("Digite o nome do funcionário: "),
		position: prompt("Digite o cargo do funcionário: "),
		salary: parseFloat(prompt("Digite o salário do funcionário: ")),
	};

	return employee;
}

let { name, position, salary } = inputEmployeeData();
displayEmployee(name, position, salary);

function displayEmployee(name, position, salary) {
	console.log("\nDados do Funcionário:");
	console.log(`Nome: ${name}`);
	console.log(`Cargo: ${position}`);
	console.log(`Salário: R$${salary.toFixed(2)}`);
}
