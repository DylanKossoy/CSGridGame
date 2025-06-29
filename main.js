import { Gameboard } from "./assets/Gameboard.js";
const playerHealth = document.querySelector(".health-icon");
const playerInventory = document.querySelector(".player-inventory");
const playerCoins = document.querySelector(".player-coins");
const playerDiamonds = document.querySelector(".player-diamonds");
const playerRubys = document.querySelector(".player-rubys");
const playerEmeralds = document.querySelector(".player-emeralds");
const startButton = document.querySelector(".start-button");
const startPage = document.querySelector(".start-page");
const helpButton = document.querySelector(".help-button");
const helpContainer = document.querySelector(".help-container");
const infoSection = document.querySelector(".info-section");
const gameBoardContainer = document.querySelector(".gameboard-container");
const playerName = document.querySelector(".player-name");
const playerNameLocation = document.querySelector(".player-name-location");
const winContainer = document.querySelector(".win-container");
const loseContainer = document.querySelector(".lose-container");
const playAgainButton = document.querySelector(".play-again");
let toggle = false;

let gameBoard = new Gameboard();

function showHelp() {
  if (toggle) {
    helpContainer.style.display = "none";
    toggle = false;
    return;
  }
  helpContainer.style.display = "flex";
  toggle = true;
}

function loseGame() {
  gameBoardContainer.style.display = "none";
  loseContainer.style.display = "flex";
  infoSection.style.display = "none";

  gameBoard.clearSpanGameBoard();
  gameBoard.getGameClass().style.display = "none";
}

function winGame() {
  gameBoardContainer.style.display = "none";
  winContainer.style.display = "flex";
  infoSection.style.display = "none";

  gameBoard.clearSpanGameBoard();
  gameBoard.getGameClass().style.display = "none";
}

function updateStats() {
  playerHealth.innerText = gameBoard.getPlayer().getHealth();
  playerCoins.innerText = gameBoard.getPlayer().getCoins();
  playerDiamonds.innerText = gameBoard.getPlayer().getDiamonds();
  playerRubys.innerText = gameBoard.getPlayer().getRubys();
  playerInventory.innerText = gameBoard.getPlayer().showWeapons();
  playerEmeralds.innerText = gameBoard.getPlayer().getEmeralds();
}
function eventListener() {
  addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "w":
        if (gameBoard.checkValid(key)) {
          gameBoard.keys.up.pressed = true;
        }
        break;
      case "s":
        if (gameBoard.checkValid(key)) {
          gameBoard.keys.down.pressed = true;
        }
        break;
      case "d":
        if (gameBoard.checkValid(key)) {
          gameBoard.keys.right.pressed = true;
        }
        break;
      case "a":
        if (gameBoard.checkValid(key)) {
          gameBoard.keys.left.pressed = true;
        }
        break;
      default:
        return;
    }
  });
}

function movePlayers() {
  if (gameBoard.keys.up.pressed) {
    gameBoard.movePlayerUp();
    gameBoard.keys.up.pressed = false;
  }

  if (gameBoard.keys.down.pressed) {
    gameBoard.movePlayerDown();
    gameBoard.keys.down.pressed = false;
  }

  if (gameBoard.keys.right.pressed) {
    gameBoard.movePlayerRight();
    gameBoard.keys.right.pressed = false;
  }

  if (gameBoard.keys.left.pressed) {
    gameBoard.movePlayerLeft();
    gameBoard.keys.left.pressed = false;
  }
}

function animate() {
  let animationid = requestAnimationFrame(animate);

  if (gameBoard.getPlayer().checkLose()) {
    cancelAnimationFrame(animationid);
    loseGame();
  }

  if (gameBoard.getGameWin()) {
    cancelAnimationFrame(animationid);
    winGame();
  }

  gameBoard.renderGameBoard();
  movePlayers();
  updateStats();
}

helpButton.addEventListener("click", () => {
  showHelp();
});

playAgainButton.addEventListener("click", () => {
  loseContainer.style.display = "none";
  winContainer.style.display = "none";
  gameBoardContainer.style.display = "none";
  infoSection.style.display = "none";
  helpContainer.style.display = "none";
  startPage.style.display = "flex";

  gameBoard = new Gameboard();
});

startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  infoSection.style.display = "flex";
  gameBoardContainer.style.display = "grid";
  playerNameLocation.innerText = playerName.value;
  gameBoard.getGameClass().style.display = "grid";
  gameBoard.renderGameBoard();
  animate();
  eventListener();
});
