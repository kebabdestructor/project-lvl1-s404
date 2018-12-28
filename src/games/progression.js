import gamePlay from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const startPhrase = 'What number is missing in the progression?';
const progressionLen = 10;

const gameLogic = () => {
  const initialNum = getRandomNumber(50, 1);
  const spreadNum = getRandomNumber(10, 1);
  const omittedPos = getRandomNumber(progressionLen - 1, 0);
  const progList = [initialNum];
  while (progressionLen !== progList.length) {
    progList.push(progList[progList.length - 1] + spreadNum);
  }
  const correctAnswer = String(progList[omittedPos]);
  progList[omittedPos] = '..';
  const question = progList.join(' ');
  return cons(question, correctAnswer);
};

export default () => gamePlay(startPhrase, gameLogic);
