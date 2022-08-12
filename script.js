const homeScoreDisplay = document.getElementById('home-score');
const awayScoreDisplay = document.getElementById('guest-score');
const plusOneH = document.querySelector('#plusOneH');
const plusTwoH = document.querySelector('#plusTwoH');
const plusThreeH = document.querySelector('#plusThreeH');
const plusOneA = document.querySelector('#plusOneA');
const plusTwoA = document.querySelector('#plusTwoA');
const plusThreeA = document.querySelector('#plusThreeA');

let homeScore = 0;
let awayScore = 0;

function addOneHome() {
  plusOneH.addEventListener('click', () => {
    homeScoreDisplay.textContent = homeScore += 1;
  });
}

function addTwoHome() {
  plusTwoH.addEventListener('click', () => {
    homeScoreDisplay.textContent = homeScore += 2;
  });
}
function addThreeHome() {
  plusThreeH.addEventListener('click', () => {
    homeScoreDisplay.textContent = homeScore += 3;
  });
}

function addOneAway() {
  plusOneA.addEventListener('click', () => {
    awayScoreDisplay.textContent = awayScore += 1;
  });
}

function addTwoAway() {
  plusTwoA.addEventListener('click', () => {
    awayScoreDisplay.textContent = awayScore += 2;
  });
}
function addThreeAway() {
  plusThreeA.addEventListener('click', () => {
    awayScoreDisplay.textContent = awayScore += 3;
  });
}

addOneHome();
addTwoHome();
addThreeHome();
addOneAway();
addTwoAway();
addThreeAway();
