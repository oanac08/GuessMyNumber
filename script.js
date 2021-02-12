'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayBaackgroundColor = function (message) {
  document.querySelector('body').style.backgroundColor = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};
const displayStyleWidth = function (message) {
  document.querySelector('.number').style.width = message;
};

const displayGuess = function (message) {
  document.querySelector('.guess').value = message;
};

const dispalyNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    displayBaackgroundColor(' rgb(71, 165, 52)');
    displayStyleWidth('30rem');
    dispalyNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🧨 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  dispalyNumber('?');
  displayBaackgroundColor('rgb(150, 92, 92)');
  displayStyleWidth('15rem');
  displayGuess('');
});
