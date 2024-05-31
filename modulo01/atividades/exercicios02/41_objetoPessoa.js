/* 
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

let pessoa = {
	nome: "David",
	idade: 30,
};
//adicionando nova propriedade
pessoa.email = "david@gmail.com";

console.log(pessoa["nome"]);
console.log(pessoa.idade);
console.log(pessoa.email);
console.log(pessoa);
