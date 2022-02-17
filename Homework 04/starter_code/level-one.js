/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

ballEl.addEventListener('click', function() {
  score += 10;

  if ( score < 100 ) {
    scoreEl.innerText = score;}
   else if ( score == 100 ){
    scoreEl.innerText = 100;
    declareWinner();
   }
    else {
    declareWinner();
  }
});
