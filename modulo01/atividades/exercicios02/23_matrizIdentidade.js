/* 
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.

Criar Array 7x7;
*/

let arrayIdentidade = Array(7)
	.fill()
	.map(() => Array(7).fill("null"));

for (let i = 0; i < 7; i++) {
	arrayIdentidade[i][i] = 1;
}

for (let i = 0; i < 7; i++) {
	console.log(arrayIdentidade[i].join(", "));
}
