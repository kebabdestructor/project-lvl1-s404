import gamePlay from '..';
import getRandomNumber from '../randomNumber';
import { cons } from 'hexlet-pairs';

const startPhrase = 'Answer "yes" if number even otherwise answer "no"';

const gameLogic = () => {
  const question = getRandomNumber(100, 1);
  const isEven = () => question % 2 === 0;
  const correctAnswer = isEven() ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const startGame = () => gamePlay(startPhrase, gameLogic);
export default startGame;
