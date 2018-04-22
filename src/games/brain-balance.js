import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger, sortArray, arrayToNumber, numberToArray } from '../common';

const gameMessage = 'Balance the given number.';

const isBalancedArray = (arr) => {
  const firstElement = arr[0];
  const lastElement = arr[arr.length - 1];

  if ((lastElement - firstElement) <= 1) {
    return true;
  }

  return false;
};

const getBalancedNumber = (num) => {
  const numArray = sortArray(numberToArray(num));

  if (isBalancedArray(numArray)) {
    return num;
  }

  numArray[0] += 1;
  numArray[numArray.length - 1] -= 1;

  const newNum = arrayToNumber(sortArray(numArray));

  return getBalancedNumber(newNum);
};

const game = () => {
  const randomNumber = getRandomInteger(0, 9999);

  const question = `${randomNumber}`;

  const rightAnswer = String(getBalancedNumber(randomNumber));

  return cons(question, rightAnswer);
};

const brainBalance = () => runGame(gameMessage, game);

export default brainBalance;
