import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger } from '../common';

const gameMessage = 'What number is missing in this progression?';

const generateProgressionArray = (startNum, elements) => {
  const progressionArray = [startNum];
  const diff = getRandomInteger(0, 9);

  const iter = (num, count, acc) => {
    if (count === 1) {
      return acc;
    }

    acc.push(num + diff);
    return iter(num + diff, count - 1, acc);
  };

  return iter(startNum, elements, progressionArray);
};

const generateQuestion = (startNum, elements) => {
  const array = generateProgressionArray(startNum, elements);

  const hiddenNumIndex = getRandomInteger(0, elements - 1);

  const hiddenNum = array[hiddenNumIndex];
  array[hiddenNumIndex] = '..';

  const questionString = array.join(' ');

  return cons(questionString, hiddenNum);
};

const game = () => {
  const startNum = getRandomInteger(0, 9);

  return generateQuestion(startNum, 10);
};

const brainProgression = () => runGame(gameMessage, game);

export default brainProgression;
