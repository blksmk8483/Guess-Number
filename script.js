'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// changes the "Start guessing" message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// changes the "?" between "?" and the secretNumber
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// changes the "🏆 Highscore:" display
const changeHighScoreLabel = function (highScoreLabel) {
  document.querySelector('.label-highscore').textContent = highScoreLabel;
};

// changes the "🏆 Highscore:" number that is displayed
const changeHighScoreNumber = function (highScoreNumber) {
  document.querySelector('.highscore').textContent = highScoreNumber;
};

// changes the "💯 Score:" number that is displayed
const changeScoreNumber = function (scoreNumber) {
  document.querySelector('.score').textContent = scoreNumber;
};

// changes the background color of the body
const changeBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

// changes the width of the "?"
const changeNumberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};

//  ------------  GAME LOGIC  ------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   ------------  When there is no input  ------------
  if (!guess) {
    displayMessage('⛔️ No Number!');

    //   ------------  When the player wins  ------------
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      changeHighScoreLabel('🥇  New Highscore!');
      changeHighScoreNumber(highScore);
    }
    //   ------------  When guess is wrong  ------------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      changeScoreNumber(score);
    } else {
      displayMessage('💥 You lost the game!');
      changeScoreNumber(0);
    }
  }
});

//   ------------  For clicking the Again! button to reset the screen  ------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeScoreNumber(score);
  changeHighScoreLabel('🏆 Highscore:');

  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});

// Original code before refactoring...

// 'use strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔️ No Number!';

//     // When the player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.label-highscore').textContent =
//         '🥇  New Highscore!';
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // When the guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       // score = score - 1;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When the guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       // score = score - 1;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// // For clicking the Again! button to reset the screen
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.label-highscore').textContent = '🏆 Highscore:';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
