import { cons } from 'hexlet-pairs';
import { getRandomInteger, gcd } from '../common-functions';

export const gameMessage = 'Find the greatest common divisor of given numbers.';

export const game = () => {
  const randomNumber1 = getRandomInteger(0, 100);
  const randomNumber2 = getRandomInteger(0, 100);

  const question = `${randomNumber1} ${randomNumber2}`;

  const rightAnswer = String(gcd(randomNumber1, randomNumber2));

  return cons(question, rightAnswer);
};
