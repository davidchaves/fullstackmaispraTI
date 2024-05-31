const prompt = require("prompt-sync")();
let codigoOrigem = 1;
codigoOrigem = Math.trunc(prompt("Informe o codigo de origem: "));
let regiao = "";

switch (codigoOrigem) {
	case 1:
		regiao = "Sul";
		break;
	case 2:
		regiao = "Norte";
		break;
	case 3:
		regiao = "Leste";
		break;
	case 4:
		regiao = "Oeste";
		break;
	case 5:
	case 6:
		regiao = "Nordeste";
		break;
	case 7:
	case 8:
	case 9:
		regiao = "Sudeste";
		break;
	default:
		if (codigoOrigem >= 10 && codigoOrigem <= 20) {
			regiao = "Centro-Oeste";
		} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
			regiao = "Nordeste";
		} else if (codigoOrigem) {
			console.log("Codigo invalido!");
		} else {
			console.log("Produto importado.");
		}
}

console.log(regiao);
