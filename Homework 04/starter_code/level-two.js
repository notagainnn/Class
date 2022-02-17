/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

/* create classwide function????? */

arenaEl.addEventListener('click', function(allBalls) {
    if ( allBalls.target.classList.contains('js-ball') ) {
      score += 10;
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else if ( score == 100 ){
        scoreEl.innerText = 100;
        declareWinner();
       }else {
        declareWinner();
      }
    }
  })

  /* omg it works */
  
  function declareWinner() {
    document.body.classList.add('game-over');
  }
  