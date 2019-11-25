import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const stepGenerator = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return cons(question, answer);
};

export default () => {
  const taskMsg = 'Find the greatest common divisor of given numbers.';
  game(stepGenerator, taskMsg);
};
