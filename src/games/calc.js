import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: null;
  }
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const num1 = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, 2)];
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculateExpression(num1, operator, num2));
  return cons(question, answer);
};

const taskMessage = 'What is the result of the expression?';

export default () => game(generateRound, taskMessage);
