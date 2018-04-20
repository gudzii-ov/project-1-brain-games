import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger, gcd } from '../common';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const randomNumber1 = getRandomInteger(0, 100);
  const randomNumber2 = getRandomInteger(0, 100);

  const question = `${randomNumber1} ${randomNumber2}`;

  const rightAnswer = String(gcd(randomNumber1, randomNumber2));

  return cons(question, rightAnswer);
};

const brainGcd = () => runGame(gameMessage, game);

export default brainGcd;
