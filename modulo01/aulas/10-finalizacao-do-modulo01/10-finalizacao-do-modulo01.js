/* PESQUISA BINÁRIA Atividade de processo seletivo */

/* 
Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.
*/

/* 
O algoritmo funciona da seguinte forma, ele cortará ao meio uma determinada lista, verificando se o item que está no meio é o que estamos procurando, caso não seja, irá condicionar se o item é maior ou menor que o do meio, conseguindo cortar a parte maior ou menor da lista e vai repetindo o processo até encontrar a posição do item que queremos.

Não é possível usar essa forma de busca, caso a lista não esteja ordenada, pois o resultado desse algoritmos, retorna a posição do item, se tivesse dois ou mais itens iguais, ele iria ignorar e retornar o primeiro que encontrar.
*/

const binarySearch = (list, item) => {
	//definindo o maximo e minimo da lista
	let low = 0; //min.
	let high = list.length - 1; //max

	while (low <= high) {
		//meio da lista
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid]; //estipula que o meio é o nosso chute

		if (guess === item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
};

const myList = [1, 3, 5, 7, 8];

console.log(binarySearch(myList, 3));

/*Recursos e operadores novos*/

/*
  Spread = espalhar
  Rest = juntar

  Oq define se o operador é spread ou rest é o contexto em q está sendo utilizado, caso espalhe estruturas de dados é spread, caso junte, é rest.

  No contexto spread:
*/

let tituloArtigo =
	"A new approach to convert rice husk waste in a quick and efficient adsorbent to remove cationic dye from water";

//Pode-se espalhar os caracteres da string com spread

console.log(tituloArtigo);
console.log(...tituloArtigo);

/*
  Espalha a string dentro de um array de forma q cada um dos caracteres ocupe um índice
*/

console.log([...tituloArtigo]);

//Pode-se espalhar arrays em outros arrays
let listaCursos1 = ["Lógica de Programação", "Git e Github"];
let listaCursos2 = ["ReactJs", "Java"];
let listaCursosCompleto = [
	"Spring Boot",
	"Bancos de Dados",
	...listaCursos1,
	...listaCursos2,
];

console.log(listaCursosCompleto);

//Spread no contexto de objetos

let pessoa = { nome: "João", idade: 15 };
let dadosCompletos = { endereco: "Rua teste", ...pessoa };

console.log(dadosCompletos);

/*
  No contexto Rest (muito utilizado em conjunto com funções):
  Recebe todos os parâmetros e os junta em estrutura de arrays, onde pode-se percorrer todos os índices de forma dinâmica.

  na prática seria como: function soma([3, 8, 5, 7]))
*/

function soma(...param) {
	let resultado = 0;

	console.log(param);

	param.forEach((v) => (resultado += v));

	return resultado;
}

console.log(soma(3, 8, 5, 7));

/*
  O primeiro parâmetro indicado será recebido pela função e armazenado em 'm', os demais parâmetros serão recebidos e unificados em um parâmetro array 'p'
*/

function multiplicacao(m, ...p) {
	console.log(m);
	console.log(p);

	let resultado = 0;

	p.forEach((v) => (resultado += m * v));

	return resultado;
}

console.log(multiplicacao(5, 7, 12, 3, 49));
