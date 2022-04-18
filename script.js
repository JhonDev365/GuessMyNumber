'use strict'

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if(!guess) {
        displayMessage('No hay Número');
        // document.querySelector('.message').textContent = 'No hay Número';
    // When player wins    
    }else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Número Correcto !';
        displayMessage('Número Correcto !');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // When guess is wrong    
    }else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Demasiado Alto !' : 'Demasiado Bajo !');
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Demasiado Alto !' : 'Demasiado Bajo !';
            score --;
            document.querySelector('.score').textContent = score;
        }else {
            displayMessage('Game Over !');
            // document.querySelector('.message').textContent = 'Game Over !';
            document.querySelector('.score').textContent = 0;
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Empieza Adivinar !');
    // document.querySelector('.message').textContent = 'Empieza Adivinar !';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});