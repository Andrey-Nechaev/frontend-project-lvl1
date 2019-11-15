import { game, getRandomInt } from '../engine';

const number = () => getRandomInt(1, 102);

const isPrime = (num) => {
	if (num === 1) return "no";
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return "no";
	}
	return (num % num === 0) ? "yes" : "no";
};

export const launch = () => {
	const taskMsg = `Answer "yes" if given number is prime. Otherwise answer "no".`;
	game(number, isPrime, taskMsg);  // (функция, функция, строка)
};