import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greetUser = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const runGame = (message, currentGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (successTries) => {
    if (successTries === 3) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const gameData = currentGame();
    const gameQuestion = car(gameData);
    const rightAnswer = cdr(gameData);

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(successTries + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(0);
};
