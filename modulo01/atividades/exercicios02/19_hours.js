let prompt = require("prompt-sync")();

function isValidTime(hour, minute, second) {
	return (
		Number.isInteger(hour) &&
		hour >= 0 &&
		hour < 24 &&
		Number.isInteger(minute) &&
		minute >= 0 &&
		minute < 60 &&
		Number.isInteger(second) &&
		second >= 0 &&
		second < 60
	);
}

function promptForTime() {
	let hour, minute, second;
	while (true) {
		hour = parseInt(prompt("Digite a hora (0-23):"), 10);
		minute = parseInt(prompt("Digite o minuto (0-59):"), 10);
		second = parseInt(prompt("Digite o segundo (0-59):"), 10);

		if (isValidTime(hour, minute, second)) {
			break;
		} else {
			console.log("Horário inválido. Tente novamente.");
		}
	}
	return { hour, minute, second };
}

function formatTime(time) {
	console.log("TIMe: ", time);
	let { hour, minute, second } = time;
	return `${String(hour).padStart(2, "0")}.${String(minute).padStart(
		2,
		"0"
	)}.${String(second).padStart(2, "0")}`;
}

function main() {
	let times = [];
	for (let i = 0; i < 5; i++) {
		let time = promptForTime();
		times.push(time);
	}

	console.log("Horários fornecidos:");
	times.forEach((time) => {
		console.log(formatTime(time));
	});
}

main();
