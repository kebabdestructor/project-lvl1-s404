import gamePlay from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const startPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  if (num <= 1) return false;
  const iter = (divisor) => {
    if (num / 2 < divisor) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const gameLogic = () => {
  const question = getRandomNumber(100, 1);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gamePlay(startPhrase, gameLogic);
