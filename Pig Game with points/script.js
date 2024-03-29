'use strict';


// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const scores = [0,0]
let currentscore = 0;
let activePlayer = 0;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;      
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
//Rolling Dice
btnRoll.addEventListener('click', function(){
    
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1 ) {
        currentscore += dice;  
        document.getElementById(`current--${activePlayer}`).textContent = currentscore;      
    } else {
        switchPlayer();
    }
});

btnHold.addEventListener('click', function() {
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

// Swicth Player
    switchPlayer();
})

