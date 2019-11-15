import { game, getRandomInt} from '../engine';

const number = () => getRandomInt(1, 101); // функция

const isEven = (number) => (number % 2 == 0) ? 'yes' : 'no'; // функция

export const launch = () => {
	const taskMsg = `Answer "yes" if the number is even, otherwise answer "no".`;
	game(number, isEven, taskMsg);  // (функция, функция, строка)
};