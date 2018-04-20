import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger } from '../common';

const getBrainEvenAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameMessage = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const randomNumber = getRandomInteger(0, 100);

  const question = `${randomNumber}`;

  const rightAnswer = getBrainEvenAnswer(randomNumber);

  return cons(question, rightAnswer);
};

const brainEven = () => runGame(gameMessage, game);

export default brainEven;
