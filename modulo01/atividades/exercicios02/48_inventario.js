/* 
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
	const inventarioCombinado = {};

	// Adicionar itens da loja A ao inventário combinado
	for (const item in inventarioLojaA) {
		if (inventarioLojaA.hasOwnProperty(item)) {
			inventarioCombinado[item] = inventarioLojaA[item];
		}
	}

	// Adicionar itens da loja B ao inventário combinado
	for (const item in inventarioLojaB) {
		if (inventarioLojaB.hasOwnProperty(item)) {
			if (inventarioCombinado.hasOwnProperty(item)) {
				inventarioCombinado[item] += inventarioLojaB[item];
			} else {
				inventarioCombinado[item] = inventarioLojaB[item];
			}
		}
	}

	return inventarioCombinado;
}

const inventarioLojaA = {
	maçãs: 10,
	laranjas: 5,
	bananas: 20,
};

const inventarioLojaB = {
	bananas: 15,
	peras: 10,
	maçãs: 5,
};

const inventarioCombinado = combinarInventarios(
	inventarioLojaA,
	inventarioLojaB
);
console.log(inventarioCombinado);
