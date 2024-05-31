/* 
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let dados = {
	age: 30,
	name: "David",
	hobbies: ["Jiu-jitsu", "estudar"],
	endereco: {
		rua: "Rua das flores",
		numero: 323,
	},
	notas: [3, 2, 5],
};

function filtrarArray(obj) {
	let resultado = {};
	for (let chave in obj) {
		if (Array.isArray(obj[chave])) {
			resultado[chave] = obj[chave];
		}
	}
	return resultado;
}

let propriedadesArray = filtrarArray(dados);
console.log(propriedadesArray);
