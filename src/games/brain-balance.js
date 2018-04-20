import { cons } from 'hexlet-pairs';
import { getRandomInteger } from '../common-functions';

export const gameMessage = 'Balance the given number.';

export const game = () => {
  const randomNumber = getRandomInteger(0, 100);

  const question = `${randomNumber}`;

  const rightAnswer = '';

  return cons(question, rightAnswer);
};
