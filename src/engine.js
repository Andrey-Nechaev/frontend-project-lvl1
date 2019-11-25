import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  return result;
};

export const game = (step, taskMsg) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(taskMsg);
  const gameFlow = (round) => {
    const roundsCount = 3;
    if (round === roundsCount) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const pairQA = step();
    const question = car(pairQA);
    const corectAnswer = cdr(pairQA);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === corectAnswer) {
      console.log('Correct!');
      return gameFlow(round + 1);
    }
    return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.\nLet's try again, ${playerName}!`);
  };
  gameFlow(0);
};
