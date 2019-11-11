import { getName, gameFlow } from '../engine';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

export const start = () => {
	const playerName = getName();
	const number = () => getRandomInt(1, 101); // функция
	const isEven = (number) => (number % 2 == 0) ? 'yes' : 'no'; // функция
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	gameFlow(number, isEven, playerName, 0);  // (функция, функция, строка, число)
};
