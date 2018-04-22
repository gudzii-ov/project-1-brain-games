export const sortArray = arr => arr.sort((a, b) => a - b);

export const numberToArray = (num) => {
  const iter = (number, acc) => {
    const newNum = Math.floor(number / 10);

    if (newNum < 1) {
      acc.unshift(number);
      return acc;
    }

    const digit = number % 10;
    acc.unshift(digit);

    return iter(newNum, acc);
  };

  const initAcc = [];

  return iter(num, initAcc);
};

export const arrayToNumber = (arr) => {
  let num = 0;

  for (let i = 0; i < arr.length; i += 1) {
    num += arr[i] * (10 ** (arr.length - i - 1));
  }

  return num;
};

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (num1, num2) => (num2 !== 0 ? gcd(num2, num1 % num2) : num1);
