/* 
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function summarizeSales(sales) {
	return sales.reduce((summary, sale) => {
		const { vendedor, valor } = sale;
		if (summary[vendedor]) {
			summary[vendedor] += valor;
		} else {
			summary[vendedor] = valor;
		}
		return summary;
	}, {});
}

// Exemplo de uso:
const vendas = [
	{ vendedor: "João", valor: 100 },
	{ vendedor: "Maria", valor: 150 },
	{ vendedor: "João", valor: 200 },
	{ vendedor: "Maria", valor: 250 },
	{ vendedor: "Ana", valor: 300 },
];

const resumoVendas = summarizeSales(vendas);
console.log(resumoVendas);
