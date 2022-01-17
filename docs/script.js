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
  
  // 入力された数字が正解より小さい時
  } else if (inputNumber < secretNumber) {
  
  }
});