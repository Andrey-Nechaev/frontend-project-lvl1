import { getName, gameFlow } from '../engine';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

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

export const start = () => {
	const playerName = getName();
	console.log(`Find the greatest common divisor of given numbers.`);
	gameFlow(twoNumbers, check, playerName, 0);  // (функция, функция, строка, число)
};