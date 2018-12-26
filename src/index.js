import readlineSync from 'readline-sync';

const outputMessage = message => console.log(message);
const getName = () => {
  outputMessage('Welcome to the Brain Games!');
  outputMessage('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  outputMessage(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.round(Math.random() * (100 - 1) + 1);
const isEven = () => {
  const userName = getName();
  function iter(move) {
    if (move === 3) return outputMessage(`Congratulations, ${userName}!`);
    const randomNumber = getRandomNumber();
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const yes = 'yes';
    const no = 'no';
    outputMessage(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();
    if ((randomNumber % 2 === 0 && userAnswer === yes)
        || (randomNumber % 2 !== 0 && userAnswer === no)) {
      outputMessage('Correct!');
    } else {
      outputMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${userAnswer === yes
        ? no : yes}`);
      return `Let's try again, ${userName}!`;
    }
    return iter(move + 1);
  }
  return iter(0);
};

export { getName, isEven };
