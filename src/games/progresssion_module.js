import { getName, getRandomInt, gameFlow } from '../engine';

let HV = -1;

const progression = () => {
	const initialValue = getRandomInt(1, 31);
	const delta = getRandomInt(1, 11);
	const hidePosition = getRandomInt(1, 11);

	const makeString = (acc, elem, d, counter) => {
		if (counter > 10) return acc;
		if (counter === hidePosition) {
			HV = elem;
			acc = `${acc} ..`;
		}
		else acc = `${acc} ${elem}`;
		return makeString(acc, elem + d, d, counter +1);
	};

	return makeString(``, initialValue, delta, 1);
};

const hiddenValue = (unused) => String(HV);

export const start = () => {
	const playerName = getName();
	console.log(`What number is missing in the progression?`);
	gameFlow(progression, hiddenValue, playerName, 0);  // (функция, функция, строка, число)
};