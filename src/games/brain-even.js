import gamePlay from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const startPhrase = 'Answer "yes" if number even otherwise answer "no"';
const isEven = divisor => divisor % 2 === 0;

const gameLogic = () => {
  const question = getRandomNumber(100, 1);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gamePlay(startPhrase, gameLogic);
