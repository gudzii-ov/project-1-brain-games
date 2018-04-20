import { cons } from 'hexlet-pairs';
import { getRandomInteger } from '../common-functions';

const isEvenAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const gameMessage = 'Answer "yes" if number even otherwise answer "no".';

export const game = () => {
  const randomNumber = getRandomInteger(0, 100);

  const question = `${randomNumber}`;

  const rightAnswer = isEvenAnswer(randomNumber);

  return cons(question, rightAnswer);
};
