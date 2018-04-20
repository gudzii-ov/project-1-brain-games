import { cons } from 'hexlet-pairs';
import { runGame } from '..';
import { getRandomInteger } from '../common';

const gameMessage = 'What is the result of the expression?';

const game = () => {
  const randomNumber1 = getRandomInteger(0, 100);
  const randomNumber2 = getRandomInteger(0, 100);

  const randomExpression = getRandomInteger(1, 3);

  let question;
  let rightAnswer;

  switch (randomExpression) {
    case 1:
      question = `${randomNumber1} + ${randomNumber2}`;
      rightAnswer = String(randomNumber1 + randomNumber2);
      break;
    case 2:
      question = `${randomNumber1} - ${randomNumber2}`;
      rightAnswer = String(randomNumber1 - randomNumber2);
      break;
    case 3:
      question = `${randomNumber1} * ${randomNumber2}`;
      rightAnswer = String(randomNumber1 * randomNumber2);
      break;
    default:
      console.log('Question generation error!');
  }

  return cons(question, rightAnswer);
};

const brainCalc = () => runGame(gameMessage, game);

export default brainCalc;
