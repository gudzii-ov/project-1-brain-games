#!/usr/bin/env node

import { greetUser, evenGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = greetUser();
evenGame(userName);
