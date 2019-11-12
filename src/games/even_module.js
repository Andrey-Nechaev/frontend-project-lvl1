import { getName, getRandomInt, gameFlow } from '../engine';

export const start = () => {
	const playerName = getName();
	const number = () => getRandomInt(1, 101); // функция
	const isEven = (number) => (number % 2 == 0) ? 'yes' : 'no'; // функция
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	gameFlow(number, isEven, playerName, 0);  // (функция, функция, строка, число)
};
