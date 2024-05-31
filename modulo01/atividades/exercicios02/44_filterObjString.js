/* 
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

let obj = {
	nome: "Alice",
	sobrenome: "da Silva",
	age: 14,
	notas: [1, 2, 4],
};

function isString(obj) {
	let count = 0;
	for (let chave in obj) {
		if (typeof obj[chave] === "string") {
			count++;
		}
	}
	return count;
}

let propStrings = isString(obj);

console.log(`Existem ${propStrings} proriedade(s) do tipo String`);
