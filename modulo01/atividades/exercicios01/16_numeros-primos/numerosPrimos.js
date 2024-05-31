/* 
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let count = 0;
let number = 101;

while (count <= 50) {
	let isPrime = true;
	let i = 2;

	while (i * i <= number) {
		if (number % i === 0) {
			isPrime = false;
			break;
		}
		i++;
	}

	if (isPrime) {
		console.log(number);
		count++;
	}
	number++;
}
