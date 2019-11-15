import { game, getRandomInt } from '../engine';

const twoNumbers = () => {
	const num1 = getRandomInt(1, 101);
	const num2 = getRandomInt(1, 101);
	const question = `${num1} ${num2}`;
	return question;
};

const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);

const check = (twoNumbers) => {
	const num1 = twoNumbers.split(' ')[0];
	const num2 = twoNumbers.split(' ')[1];
	return String(gcd(num1, num2));
};

export const launch = () => {
	const taskMsg = `Find the greatest common divisor of given numbers.`;
	game(twoNumbers, check, taskMsg);  // (функция, функция, строка)
};