let secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const display1 = function (msg) {
  document.querySelector('.message').textContent = msg;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess_no = Number(document.querySelector('.guess').value);
  console.log(guess_no, typeof guess_no);
  if (!guess_no) {
    document.querySelector('.message').textContent = '😛NO number';
  } else if (guess_no === secretnumber) {
    display1('🎈Correct Number');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess_no !== secretnumber) {
    if (score > 1) {
      display1(guess_no > secretnumber ? '📈Too high' : '📉Too low');
      // document.querySelector('.message').textContent = '📈Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display1('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess_no < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  display1('start guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
