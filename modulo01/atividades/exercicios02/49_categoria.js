/* 
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function categorizeTransactions(transactions) {
	const result = {};

	transactions.forEach((transaction) => {
		const { category, value } = transaction;

		if (!result[category]) {
			result[category] = {
				transactions: [],
				subtotal: 0,
			};
		}

		result[category].transactions.push(transaction);
		result[category].subtotal += value;
	});

	return result;
}

// Exemplo de uso:
const transactions = [
	{ id: 1, value: 100, date: "2024-01-01", category: "Food" },
	{ id: 2, value: 50, date: "2024-01-02", category: "Transport" },
	{ id: 3, value: 200, date: "2024-01-03", category: "Food" },
	{ id: 4, value: 150, date: "2024-01-04", category: "Entertainment" },
	{ id: 5, value: 75, date: "2024-01-05", category: "Transport" },
];

const categorized = categorizeTransactions(transactions);
console.log(categorized);
