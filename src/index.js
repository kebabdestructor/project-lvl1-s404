import readlineSync from 'readline-sync';

export const isName = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

const makeRandomNumber = () => Math.round(Math.random() * (100 - 1) + 1);

export const isEven = () => {
  function iter(acc) {
    if (acc === 3) return `Congratulations, ${isName}!`;
    const yes = 'yes';
    const no = 'no';
    const userAnswer = () => readlineSync.question(`Question: ${makeRandomNumber()}`);
    if ((makeRandomNumber % 2 === 0 && userAnswer === yes)
        || (makeRandomNumber % 2 !== 0 && userAnswer === no)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${userAnswer === yes ? no : yes}`);
      return `Let's try again, ${isName}!`;
    }
    return iter(acc + 1);
  }
  return iter(0);
};

// export { userName, isEven };
