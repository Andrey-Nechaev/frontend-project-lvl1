import { cons } from '@hexlet/pairs';
import game from '../engine';
import getRandomInt from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const taskMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(generateRound, taskMessage);
