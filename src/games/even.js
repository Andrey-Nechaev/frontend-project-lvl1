import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => game(generateRound, taskMessage);
