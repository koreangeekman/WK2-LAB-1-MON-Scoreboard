let home = 0;
let away = 0;
let winPoints = 21;

function addScore(team, points) {
  if (team == 'home') {
    if (home + points <= 0) {
      home = 0;
    } else {
      home += points;
    }
  }
  if (team == 'away') {
    if (away + points <= 0) {
      away = 0;
    } else {
      away += points;
    }
  }
  draw();
  checkWin();
}

function checkWin() {
  if (home >= 21) {
    declareWin('Home');
  }
  if (away >= 21) {
    declareWin('Away');
  }
}

function declareWin(team) {
  // console.log(`${team} team wins!`);
  window.alert(`${team} team wins!`);
  resetBoard();
}

function resetBoard() {
  home = 0;
  away = 0;
  draw();
}

function draw() {
  document.getElementById('homeScore').innerText = home;
  document.getElementById('awayScore').innerText = away;
}