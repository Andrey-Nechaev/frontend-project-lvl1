import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const isEven = (number) => number % 2 === 0;

const stepGenerator = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const taskMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(stepGenerator, taskMsg);
};
