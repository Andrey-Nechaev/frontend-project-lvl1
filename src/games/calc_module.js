import { getName, getRandomInt, gameFlow } from '../engine';

const randomOps = () => {
	switch (getRandomInt(0,3)) {
		case 0: return "+";
		case 1: return "-";
		default: return "*";
	}
};

export const start = () => {
	const playerName = getName();
	
	const expression = () => {
		const num1 = getRandomInt(0, 101);
		const ops = randomOps();
		const num2 = getRandomInt(0, 101);
		return `${num1} ${ops} ${num2}`;
	}
	const calculate = (expression) => String(eval(expression)); // функция
	console.log(`What is the result of the expression?`);
	gameFlow(expression, calculate, playerName, 0);  // (функция, функция, строка, число)
};