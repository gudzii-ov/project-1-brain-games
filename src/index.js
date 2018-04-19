import readlineSync from 'readline-sync';

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const isEvenAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const evenGame = (userName) => {
  const iter = (successTries) => {
    if (successTries === 3) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const randomNumber = Math.random();
    console.log(`Question: ${randomNumber}`);
    const rightAnswer = isEvenAnswer(randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(successTries + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\n`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(0);
};
