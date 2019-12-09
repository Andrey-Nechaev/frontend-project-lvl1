import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (generateRound, taskMessage) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(taskMessage);

  const gameFlow = (round) => {
    if (round === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const pairQA = generateRound();
    const question = car(pairQA);
    const corectAnswer = cdr(pairQA);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === corectAnswer) {
      console.log('Correct!');
      gameFlow(round + 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };

  gameFlow(0);
};
