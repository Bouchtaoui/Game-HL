// 1. zolang credits > 0

// 2. gooi dobbelsteen speler

// 3. vraag gok hoger of lager

// 4, vraag inleg

// 5. gooi dobbelsteen bank

// 6. indien hoger
// 6.1 -> speler < bank = speler gewonnen -> +credits
// 6.2 -> speler > bank = bank gewonnen -> -credits
// 6.3 -> speler == bank -> niemand heeft gewonnen
// 7. indien lager
// 7.1 ->  speler > bank = speler gewonnen -> +credits
// 7.2 ->  speler < bank = bank gewonnen -> -credits
// 7.3 -> speler == bank -> niemand heeft gewonnen

// Herhaal vanaf 1

// random generator tussen 1 en 6
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// dobbelsteen functie
function throwDice() {
	const points = getRandomIntInclusive(1, 6);
	return points;
}

function runGame() {
	let playerDices = [0, 0];
	let player = 0;
	let bankDices = [0, 0];
	let bank = 0;
	let credits = 10;
	let message;
	let guess;
	let bid = 0;

	// 1.
	while (credits > 0) {
		// 2.
		playerDices[0] = throwDice();
		playerDices[1] = throwDice();

		message = "U heeft " + playerDices[0] + " en " + playerDices[1];
		alert(message);

		// 3.
		guess = prompt("Gooi de bank hoger of lager?");

		// 4.
		const x = prompt("Wat is uw inleg:");
		bid = Number(x);

		// 4.
		bankDices[0] = throwDice();
		bankDices[1] = throwDice();

		message = "Bank heeft " + bankDices[0] + " en " + bankDices[1];
		alert(message);

		// totals
		player = playerDices[0] + playerDices[1];
		bank = bankDices[0] + bankDices[1];

		debugger;
		// 5.
		if (guess == "hoger") {
			// 5.1
			if (player < bank) {
				alert("Je hebt gewonnen!");
				credits = credits + bid;
			} // 5.2
			else if (player > bank) {
				alert("Je hebt verloren!");
				credits = credits - bid;
			} else {
				alert("Niemand heeft gewonnen");
				continue;
			}
		} // 6.
		else if (guess == "lager") {
			// 6.1
			if (player > bank) {
				alert("Je hebt gewonnen!");
				credits = credits + bid;
			} // 6.2
			else if (player < bank) {
				alert("Je hebt verloren!");
				credits = credits - bid;
			} //6.3
			else {
				alert("Niemand heeft gewonnen");
				continue;
			}
		} else {
			alert("Je typte geen hoger of lager, we beginnen opnieuw.");
			continue;
		}

		alert("Je hebt " + credits + " credits");
	}

	alert("Je hebt verloren :(");
}

runGame();