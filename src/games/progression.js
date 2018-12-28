import gamePlay from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const startPhrase = 'What number is missing in the progression?';
const progressionLen = 10;

const gameLogic = () => {
  const start = getRandomNumber(50, 1);
  const step = getRandomNumber(10, 1);
  const omittedPos = getRandomNumber(progressionLen - 1, 0);
  const progList = [];
  let correctAnswer;
  for (let i = 0; i < 10; i += 1) {
    if (i !== omittedPos) {
      progList.push(start + step * (i + 1));
    } else {
      correctAnswer = String(start + step * (i + 1));
      progList.push('..');
    }
  }
  const question = progList.join(' ');
  return cons(question, correctAnswer);
};

export default () => gamePlay(startPhrase, gameLogic);
