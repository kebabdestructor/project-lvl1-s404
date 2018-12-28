import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfSteps = 3;

export default (startPhrase, startGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(startPhrase);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (step) => {
    const rules = startGame();
    if (step === numberOfSteps) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = car(rules);
    const correctAnswer = cdr(rules);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(step + 1);
  };
  iter(0);
};
