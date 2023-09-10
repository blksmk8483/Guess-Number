'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const guessInput = document.querySelector('.guess');
const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeHighScoreLabel = function (highScoreLabel) {
  document.querySelector('.label-highscore').textContent = highScoreLabel;
};

const changeHighScoreNumber = function (highScoreNumber) {
  document.querySelector('.highscore').textContent = highScoreNumber;
};

const changeScoreNumber = function (scoreNumber) {
  document.querySelector('.score').textContent = scoreNumber;
};

const changeBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const changeNumberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};

const changeNumberBackgroundColor = function (numberBackgroundColor) {
  document.querySelector('.number').style.backgroundColor =
    numberBackgroundColor;
};

const changeNumberFontsize = function (numberFontsize) {
  document.querySelector('.number').style.fontSize = numberFontsize;
};

// ------------ GAME BUTTONS ------------
const decrementButtonHandler = function () {
  let currentValue = parseInt(guessInput.value);
  if (currentValue > 1) {
    currentValue--;
    guessInput.value = currentValue;
  }
};

const incrementButtonHandler = function () {
  let currentValue = parseInt(guessInput.value);
  if (currentValue < 20) {
    currentValue++;
    guessInput.value = currentValue;
  }
};

decrementButton.addEventListener('click', decrementButtonHandler);
incrementButton.addEventListener('click', incrementButtonHandler);

// ------------ GAME LOGIC ------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber('😁');
    changeNumberBackgroundColor('#60b347');
    changeNumberFontsize('6.2rem');
    changeBackgroundColor('#60b347');

    // TURNS THE BUTTONS OFF
    decrementButton.removeEventListener('click', decrementButtonHandler);
    incrementButton.removeEventListener('click', incrementButtonHandler);

    if (score > highScore) {
      highScore = score;
      changeHighScoreLabel('🥇  New Highscore!');
      changeHighScoreNumber(highScore);
      changeNumberBackgroundColor('#60b347');
      changeNumberFontsize('6.2rem');
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      changeScoreNumber(score);
    } else {
      displayMessage('💥 You lost the game!');
      changeScoreNumber(0);
      displayNumber('🙁');
      changeNumberBackgroundColor('#bc0707');
      changeNumberFontsize('6.2rem');
      changeBackgroundColor('#bc0707');

      // TURNS THE BUTTONS OFF
      decrementButton.removeEventListener('click', decrementButtonHandler);
      incrementButton.removeEventListener('click', incrementButtonHandler);
    }
  }
});

// ------------ RESET LOGIC ------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  displayNumber('?');
  guessInput.value = 10;
  changeScoreNumber(score);
  changeHighScoreLabel('🏆 Highscore:');

  changeBackgroundColor('#222');
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.fontSize = '4.8rem';

  // TURNS THE BUTTONS BACK ON
  decrementButton.addEventListener('click', decrementButtonHandler);
  incrementButton.addEventListener('click', incrementButtonHandler);
});
