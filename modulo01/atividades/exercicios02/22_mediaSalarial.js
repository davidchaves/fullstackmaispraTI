/* 
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/
let prompt = require("prompt-sync")();

function coletarDados() {
	let salarios = [];
	let numFilhos = [];
	let continuar = true;

	while (continuar) {
		let salario = parseFloat(
			prompt("Digite o salário (ou um valor negativo para encerrar):")
		);
		if (salario < 0) break;

		let filhos = parseInt(prompt("Digite o número de filhos:"));
		salarios.push(salario);
		numFilhos.push(filhos);

		continuar =
			prompt(
				"Deseja continuar inserindo dados, digite S para SIM ou N para NAO?"
			).toLocaleUpperCase() === "N"
				? false
				: true;
	}

	// shorthand property names
	return { salarios, numFilhos };
}

function calcularEstatisticas(dados) {
	let salarios = dados.salarios;
	let numFilhos = dados.numFilhos;

	let totalSalarios = salarios.reduce((acc, salario) => acc + salario, 0);
	let totalFilhos = numFilhos.reduce((acc, filhos) => acc + filhos, 0);

	let mediaSalarios = totalSalarios / salarios.length;
	let mediaFilhos = totalFilhos / numFilhos.length;

	let maiorSalario = Math.max(...salarios);

	let pessoasComSalarioAte350 = salarios.filter(
		(salario) => salario <= 350
	).length;
	let percentualSalarioAte350 =
		(pessoasComSalarioAte350 / salarios.length) * 100;

	return {
		mediaSalarios: mediaSalarios,
		mediaFilhos: mediaFilhos,
		maiorSalario: maiorSalario,
		percentualSalarioAte350: percentualSalarioAte350,
	};
}

function mostrarEstatisticas(estatisticas) {
	console.log(
		`Média de salário da população: R$ ${estatisticas.mediaSalarios.toFixed(2)}`
	);
	console.log(
		`Média do número de filhos: ${Math.trunc(estatisticas.mediaFilhos)}`
	);
	console.log(`Maior salário: R$ ${estatisticas.maiorSalario.toFixed(2)}`);
	console.log(
		`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualSalarioAte350.toFixed(
			2
		)}%`
	);
}

let dados = coletarDados();
if (dados.salarios.length > 0) {
	let estatisticas = calcularEstatisticas(dados);
	mostrarEstatisticas(estatisticas);
} else {
	console.log("Nenhum dado foi inserido.");
}
