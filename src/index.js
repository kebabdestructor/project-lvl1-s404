import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.round(Math.random() * (100 - 1) + 1);

const isEven = () => {
  const userName = getName();
  const numberOfSteps = 3;
  const iter = (move) => {
    if (move === numberOfSteps) return console.log(`Congratulations, ${userName}!`);
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${userAnswer === 'yes'
        ? 'no' : 'yes'}`);
      return console.log(`Let's try again, ${userName}!`);
    }
    return iter(move + 1);
  };
  iter(0);
};

export { getName, isEven };
