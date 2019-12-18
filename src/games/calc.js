import { cons } from '@hexlet/pairs';
import game from '../engine';
import getRandomInt from '../utils';

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return null;
  }
};

const operators = ['+', '-', '*'];
const maxIndex = 2;

const generateRound = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, maxIndex)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculateExpression(number1, number2, operator));
  return cons(question, answer);
};

const taskMessage = 'What is the result of the expression?';

export default () => game(generateRound, taskMessage);
