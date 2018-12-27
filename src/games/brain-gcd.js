import gamePlay from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const startPhrase = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const num1 = getRandomNumber(50, 2);
  const num2 = getRandomNumber(50, 1);
  const question = `${num1} ${num2}`;
  const findGCD = (a, b) => {
    if (a === 0 || b === 0) return a + b;
    return findGCD((a > b) ? (a % b) : a, (b > a) ? (b % a) : b);
  };
  const correctAnswer = String(findGCD(num1, num2));
  return cons(question, correctAnswer);
};

export default () => gamePlay(startPhrase, gameLogic);
