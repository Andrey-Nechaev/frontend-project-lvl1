import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const stepGenerator = () => {
  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i < num; i + 1) {
      if (num % i === 0) return false;
    }
    return num % num === 0;
  };

  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const taskMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(stepGenerator, taskMsg);
};
