import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 == 0) ? 'yes' : 'no';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const quiz = (playerName, n) => {
	if(n === 3) {
		return console.log(`Congratulations, ${playerName}!`);
	}
	const number = getRandomInt(1, 101);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question(`Your answer: `);
	if (answer === isEven(number)) {
		console.log(`Correct!`);
		quiz(playerName, n + 1);
	}
	else {
		return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number)}'.\nLet's try again, ${playerName}!`);
	}
};

const getName = () => {
	console.log(`Welcome to the Brain Games!`);
	const playerName = readlineSync.question(`May I have your name? `);
	console.log(`Hello, ${playerName}!`);
	return playerName;
};

export const game = () => {
	const playerName = getName();
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	quiz(playerName, 0);
};

