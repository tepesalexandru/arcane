/// Game Object

let gameConfig = {
  wave: 0,
  round: 0,
  playerLog: [0, 0],
  enemyLog: [0, 0]
};

const initialConfig = {
  wave: 0,
  round: 0,
  playerLog: [0, 0],
  enemyLog: [0, 0]
};

/// DOM Elements

const __playerRounds = document.querySelectorAll(".rnd-player");
const __enemyRounds = document.querySelectorAll(".rnd-enemy");
const wonClass = "bg-green-500";
const lostClass = "bg-red-500";

function updateRounds() {
  /*if (gameConfig.roundsWon == 1) gameRounds[0].classList += wonClass;
  if (gameConfig.roundsWon == 2) gameRounds[1].classList += wonClass;*/
}
