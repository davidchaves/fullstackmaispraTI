/* 
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

let prompt = require("prompt-sync")();
let arrEmployees = [];

function employeeData() {
	for (let i = 0; i <= 80; i++) {
		let employee = {
			matricula: i,
			nome: `Funcionario ${i}`,
			salarioBruto: 2200,
		};
		arrEmployees.push(employee);
	}

	arrEmployees.forEach((employee) => displayEmployeesData(employee));
}

function displayEmployeesData(employee) {
	let contraCheque = {
		...employee,
		INSS: 0.12,
		salarioLiquido: 0,
	};
	contraCheque.salarioLiquido = calculateSalary(contraCheque);

	console.log(`Matricula: ${contraCheque.matricula}`);
	console.log(`Nome: ${contraCheque.nome}`);
	console.log(`Salario Bruto: ${contraCheque.salarioBruto}`);
	console.log(`Dedução INSS: ${contraCheque.INSS}`);
	console.log(`Salario Liquido: ${contraCheque.salarioLiquido}`);
	console.log("-------------------------");
}

function calculateSalary(contraCheque) {
	let descontoINSS = contraCheque.salarioBruto * contraCheque.INSS;
	return contraCheque.salarioBruto - descontoINSS;
}

employeeData();
