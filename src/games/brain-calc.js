import gamePlay from '..';
import getRandomNumber from '../randomNumber';
import { cons } from 'hexlet-pairs';

const startPhrase = 'What is the result of the expression?';

const gameLogic = () => {
  const signs = ['+', '*', '-'];
  const randSign = getRandomNumber(3, 0);
  const num1 = getRandomNumber(20, 1);
  const num2 = getRandomNumber(20, 1);
  const question = `${num1} ${signs[randSign]} ${num2}`;
  let correctAnswer;
  switch (signs[randSign]) {
    case '+': {
      correctAnswer = String(num1 + num2);
      break;
    }
    case '*': {
      correctAnswer = String(num1 * num2);
      break;
    }
    default: {
      correctAnswer = String(num1 - num2);
      break;
    }
  }
  return cons(question, correctAnswer);
};

const startGame = () => gamePlay(startPhrase, gameLogic);
export default startGame;
