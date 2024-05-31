/* 
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

let obj1 = {
	nome: "Alice",
	profissao: "programadora",
};

let obj2 = {
	idade: 32,
	endereco: {
		rua: "Rua das flores",
		numero: 232,
	},
};

function combObjetos(obj1, obj2) {
	return { ...obj1, ...obj2 };
}

let objCombinado = combObjetos(obj1, obj2);

console.log(objCombinado);
