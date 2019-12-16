import { cons } from '@hexlet/pairs';
import game from '../engine';
import getRandomInt from '../utils';

const progressionLength = 10;

const makeQuestion = (element, sequence, index, hiddenPosition, delta) => {
  if (index > progressionLength) return sequence;
  const currentElement = element + delta;
  let curentSequence;
  if (index === hiddenPosition) {
    if (hiddenPosition === 1) {
      curentSequence = '..';
    } else {
      curentSequence = `${sequence} ..`;
    }
  } else {
    if (index === 1) {
      curentSequence = `${currentElement}`;
    } else {
      curentSequence = `${sequence} ${currentElement}`;
    }
  }
  return makeQuestion(currentElement, curentSequence, index + 1, hiddenPosition, delta);
};

const generateRound = () => {
  const initialValue = getRandomInt(1, 30);
  const delta = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(1, progressionLength);
  const question = makeQuestion(initialValue, '', 1, hiddenElementPosition, delta);
  const answer = String(initialValue + delta * hiddenElementPosition);
  return cons(question, answer);
};

const taskMessage = 'What number is missing in the progression?';

export default () => game(generateRound, taskMessage);
