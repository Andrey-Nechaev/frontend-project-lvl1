import { game, getRandomInt } from '../engine';

const randomOps = () => {
	switch (getRandomInt(0,3)) {
		case 0: return "+";
		case 1: return "-";
		default: return "*";
	}
};

const expression = () => {
		const num1 = getRandomInt(0, 101);
		const ops = randomOps();
		const num2 = getRandomInt(0, 101);
		return `${num1} ${ops} ${num2}`;
}

const calculate = (expression) => String(eval(expression)); // функция

export const launch = () => {
	const taskMsg = `What is the result of the expression?`;
	game(expression, calculate, taskMsg);  // (функция, функция, строка)
};