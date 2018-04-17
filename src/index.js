import readlineSync from 'readline-sync';

const greetUser = () => {
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default greetUser;
