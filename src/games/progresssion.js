import { cons } from '@hexlet/pairs';
import game from '../engine';
import getRandomInt from '../utils';

const progressionLength = 10;

const generateRound = () => {
  const initialValue = getRandomInt(1, 30);
  const delta = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(1, progressionLength);

  const makeSequence = (element, sequence, index) => {
    if (index > progressionLength) return sequence;

    const curentElement = initialValue + delta * index;
    let curentSequence;
    if (index === hiddenElementPosition) {
      curentSequence = `${sequence} ..`;
    } else {
      curentSequence = `${sequence} ${curentElement}`;
    }
    const curentIndex = index + 1;
    return makeSequence(curentElement, curentSequence, curentIndex);
  };

  const question = makeSequence(initialValue, '', 1);
  const answer = String(initialValue + delta * hiddenElementPosition);

  return cons(question, answer);
};

const taskMessage = 'What number is missing in the progression?';

export default () => game(generateRound, taskMessage);
