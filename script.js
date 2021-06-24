'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//display messages
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//event handler for clicking on check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no guess
  if (!guess) {
    displayMessage('No Number!');
    //correct guess
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is not correct
  else if (guess !== secretNumber) {
    //high or low guess
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Lower!' : 'Higher!');
      score--;
      document.querySelector('.score').textContent = score;
      //score = 0
    } else {
      displayMessage('You lose!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d81313';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

//event handler for cliking on again!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
