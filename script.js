// Scoreboard JS

let home = 0;
let away = 0;

function addScore(team, points) {
  if (team == 'home') {
    home += points;
  }
  if (team == 'away') {
    away += points;
  }
  console.log('addScore', team, points)
  draw();
}

function resetBoard() {
  home = 0;
  away = 0;
  draw();
  console.log('attempted scores reset')
}

function draw() {
  document.getElementById('homeScore').innerText = home;
  document.getElementById('awayScore').innerText = away;
  console.log('attempted scores draw')
}