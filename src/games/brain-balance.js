import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger } from '../common';

const gameMessage = 'Balance the given number.';

const game = () => {
  const randomNumber = getRandomInteger(0, 100);

  const question = `${randomNumber}`;

  const rightAnswer = '';

  return cons(question, rightAnswer);
};

const brainBalance = () => runGame(gameMessage, game);

export default brainBalance;
