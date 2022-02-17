/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let ballEl = document.querySelector('.js-ball');



arenaEl.addEventListener('click', function (e) {
  if (e.target.classList.contains("js-ball")) {
    score += parseInt(e.target.dataset.increment)
    if (score < 100) {
      scoreEl.innerText = score;
    } else if (score >= 100) {
      scoreEl.innerText = 100;
      declareWinner();
    } else {
      declareWinner();
    }
  }
})

function declareWinner() {
  document.body.classList.add('game-over');
}