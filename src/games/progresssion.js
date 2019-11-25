import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../engine';

const stepGenerator = () => {
  const initialValue = getRandomInt(1, 30);
  const delta = getRandomInt(1, 10);
  const progressionLength = 10;
  const hidePosition = getRandomInt(1, progressionLength);
  let hiddenValue = null;

  const makeString = (acc, elem, counter) => {
    let newAcc = acc;
    if (counter > progressionLength) return newAcc;
    if (counter === hidePosition) {
      hiddenValue = elem;
      newAcc = `${acc} ..`;
    } else newAcc = `${acc} ${elem}`;
    return makeString(newAcc, elem + delta, counter + 1);
  };

  return cons(makeString('', initialValue, 1), String(hiddenValue));
};

export default () => {
  const taskMsg = 'What number is missing in the progression?';
  game(stepGenerator, taskMsg);
};
