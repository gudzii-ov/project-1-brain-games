import readlineSync from 'readline-sync';

export const greetUser = () => {
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);	
};
