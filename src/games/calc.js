import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const randomOperator = () => {
  const ops = ['+', '-', '*'];
  switch (getRandomInt(0, ops.length - 1)) {
    case 0: return ops[0];
    case 1: return ops[1];
    default: return ops[2];
  }
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    default: return num1 * num2;
  }
};

const stepGenerator = () => {
  const num1 = getRandomInt(0, 100);
  const operator = randomOperator();
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));
  return cons(question, answer);
};

export default () => {
  const taskMsg = 'What is the result of the expression?';
  game(stepGenerator, taskMsg);
};
