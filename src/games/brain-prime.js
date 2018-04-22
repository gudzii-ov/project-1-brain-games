import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger, isPrime } from '../common';

const gameMessage = 'Is this number prime?';

const game = () => {
  const randomNumber = getRandomInteger(0, 100);

  const question = `${randomNumber}`;

  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

const brainPrime = () => runGame(gameMessage, game);

export default brainPrime;
