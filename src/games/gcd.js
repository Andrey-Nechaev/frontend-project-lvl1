import { cons } from '@hexlet/pairs';
import game from '../engine';
import getRandomInt from '../utils';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return cons(question, answer);
};

const taskMessage = 'Find the greatest common divisor of given numbers.';

export default () => game(generateRound, taskMessage);
