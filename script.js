const homeScoreDisplay = document.getElementById('home-score');
const awayScoreDisplay = document.getElementById('guest-score');

let homeScore = 0;
let awayScore = 0;

function addOneHome() {
  const addScoreBy1 = (homeScore += 1);
  homeScoreDisplay.textContent = addScoreBy1;
}

function addTwoHome() {
  const addScoreBy2 = (homeScore += 2);
  homeScoreDisplay.textContent = addScoreBy2;
}

function addThreeHome() {
  const addScoreBy3 = (homeScore += 3);
  homeScoreDisplay.textContent = addScoreBy3;
}

function addOneAway() {
  const addScoreBy1 = (awayScore += 1);
  awayScoreDisplay.textContent = addScoreBy1;
}

function addTwoAway() {
  const addScoreBy2 = (awayScore += 2);
  awayScoreDisplay.textContent = addScoreBy2;
}

function addThreeAway() {
  const addScoreBy3 = (awayScore += 3);
  awayScoreDisplay.textContent = addScoreBy3;
}
