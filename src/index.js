import readlineSync from 'readline-sync';

export const brainGamesGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);
const numberOfSteps = 3;

const playGame = () => {
  const userName = getName();
  const iter = (step) => {
    if (step === numberOfSteps) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = getRandomNumber(100, 1);
    console.log(`Question: ${question}`);
    const isEven = () => question % 2 === 0;
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven() ? 'yes' : 'no';
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

export { getName, playGame };
