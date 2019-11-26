import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const stepGenerator = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const taskMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(stepGenerator, taskMsg);
};
