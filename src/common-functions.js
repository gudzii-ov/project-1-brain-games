export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (num1, num2) => (num2 !== 0 ? gcd(num2, num1 % num2) : num1);
