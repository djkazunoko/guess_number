"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.inputNumber').value);
 
  // 入力されていない時
  if (!inputNumber) {
    document.querySelector('.message').textContent = '数字を入力してね！';

  // 正解の時
  } else if (inputNumber === secretNumber) {
    document.querySelector('.message').textContent = '正解！🎉';
    document.querySelector('.secretNumber').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

  // 入力された数字が正解より大きい時
  } else if (inputNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'もっと小さいよ📉😏';
      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent = 'ゲームオーバー🤪';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC3544';
    }

  // 入力された数字が正解より小さい時
  } else if (inputNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'もっと大きいよ📈😏';
      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent = 'ゲームオーバー🤪';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC3544';
    }
  }
});

document.querySelector('.reset').addEventListener('click', function() {
  // スコアのリセット
  score = 20;
  document.querySelector('.score').textContent = score;
 
  // シークレットナンバーのリセット
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.secretNumber').textContent = '?';
 
  // メッセージのリセット
  document.querySelector('.message').textContent = 'ドキドキ...';
 
  // 入力欄のリセット
  document.querySelector('.inputNumber').value = '';
 
  // 背景色のリセット
  document.querySelector('body').style.backgroundColor = '#222';
});