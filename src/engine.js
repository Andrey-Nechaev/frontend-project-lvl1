import readlineSync from 'readline-sync';

export const getName = () => {
	console.log(`Welcome to the Brain Games!`);
	const playerName = readlineSync.question(`May I have your name? `);
	console.log(`Hello, ${playerName}!`);
	return playerName;
};

export const gameFlow = (questionGenerator, checkAnswer, playerName, round) => {
	if(round === 3) {
		return console.log(`Congratulations, ${playerName}!`);
	}
	const question = questionGenerator();
	const corectAnswer = checkAnswer(question);
	console.log(`Question: ${question}`);
	const playerAnswer = readlineSync.question(`Your answer: `);
	if (playerAnswer === corectAnswer) {
		console.log(`Correct!`);
		gameFlow(questionGenerator, checkAnswer, playerName, round + 1);
	}
	else {
		return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.\nLet's try again, ${playerName}!`);
	}
};

