import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 == 0) ? 'yes' : 'no';

const quiz = (numbers, playerName) => {
	for (let i = 0; i < numbers.length; i++) {
		const answer = readlineSync.question(numbers[i]+" четное?\n");
		if (answer === isEven(numbers[i])) {
			console.log("Верно!");
		}
		else {
			return console.log('"' + answer + '" это неправильный ответ. Верный ответ был "' + isEven(numbers[i]) + '".\nПопробуй еще раз, ' + playerName + '...');
		}
	}
	return console.log("Поздравляем, ты выиграл, " + playerName + "!");
};

const getName = () => {
	console.log('Добро пожаловать в Brain Games!!!');
	const playerName = readlineSync.question('Могу я узнать ваше имя? ');
	console.log(`Привет, ${playerName}!`);
	return playerName;
};

export const game = () => {
	const playerName = getName();
	const questions = [15, 6, 7];
	console.log('Отвечай "yes" если число четное, в противном случае отвечай "no".');
	quiz(questions, playerName);
};

