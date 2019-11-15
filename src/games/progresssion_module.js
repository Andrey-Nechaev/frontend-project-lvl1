import { game, getRandomInt } from '../engine';

let HV = null; // скрытое значение

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

export const launch = () => {
	const taskMsg = `What number is missing in the progression?`;
	game(progression, hiddenValue, taskMsg);  // (функция, функция, строка)
};