import { cons, car, cdr } from 'hexlet-pairs';
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

const arrayToString = (array) => {
  let str = `${array[0]}`;

  for (let i = 1; i < array.length - 1; i += 1) {
    str += ` ${array[i]}`;
  }

  return str;
};

const generateQuestion = (startNum, elements) => {
  const array = generateProgressionArray(startNum, elements);

  const hiddenNumIndex = getRandomInteger(0, elements - 1);

  const hiddenNum = array[hiddenNumIndex];
  array[hiddenNumIndex] = '..';

  const questionString = arrayToString(array);

  return cons(questionString, hiddenNum);
};

const game = () => {
  const startNum = getRandomInteger(0, 9);

  const data = generateQuestion(startNum, 10);

  const question = car(data);

  const rightAnswer = `${cdr(data)}`;

  return cons(question, rightAnswer);
};

const brainProgression = () => runGame(gameMessage, game);

export default brainProgression;
