/* Conversao de graus Celsius para Fahrenheit e de Fahrenheit para Celsius */

const prompt = require("prompt-sync")();

console.log("Escolha uma opcao:");
console.log("1. Converter para Fahrenheit\n2. Converter para Celsius");
let opc = parseInt(prompt());

switch (opc) {
	case 1:
		let temp_c = parseInt(prompt("Temperatura em Celsius: "));
		let tc_to_tf = (temp_c * 9) / 5 + 32;
		console.log(tc_to_tf + " °F");
		break;
	case 2:
		let temp_f = parseInt(prompt("Temperatura em Fahrenheit: "));
		let tf_to_tc = ((temp_f - 32) * 5) / 9;
		console.log(tf_to_tc + " °C");
		break;
	default:
		console.log("numero incorreto, por favor, digite as opcoes 1 ou 2");
}
