import { Player } from "./Player.js";

const levels = {
  level1: [
    [2, 0, 4, 0, 3],
    [3, 0, 3, 0, 18],
    [8, 0, 0, 0, 3],
    [3, 18, 2, 0, 0],
    [1, 0, 3, 1, 7],
  ],
  level2: [
    [18, 33, 1, 0, 33, 18, 2],
    [0, 0, 0, 0, 0, 3, 7],
    [3, 0, 3, 33, 0, 2, 33],
    [8, 0, 3, 4, 18, 0, 0],
    [3, 0, 0, 0, 0, 3, 1],
    [18, 0, 3, 33, 33, 0, 2],
    [2, 0, 10, 1, 3, 0, 0],
  ],
  level3: [
    [15, 15, 33, 33, 0, 2, 0, 33, 11, 0],
    [10, 1, 1, 33, 0, 18, 0, 15, 1, 0],
    [15, 33, 33, 33, 1, 33, 2, 15, 3, 0],
    [0, 0, 18, 0, 33, 0, 18, 0, 0, 0],
    [3, 2, 0, 0, 0, 0, 33, 1, 0, 0],
    [8, 0, 0, 2, 0, 33, 0, 0, 2, 18],
    [33, 0, 3, 33, 15, 33, 18, 15, 15, 15],
    [2, 18, 15, 4, 3, 0, 0, 3, 33, 7],
    [3, 15, 15, 33, 3, 0, 33, 0, 3, 15],
    [3, 3, 0, 2, 0, 18, 0, 0, 18, 0],
  ],
  level4: [
    [
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15,
    ],
    [8, 0, 2, 1, 2, 17, 0, 0, 17, 0, 17, 0, 0, 2, 18, 17, 0, 18, 0, 15],
    [15, 0, 0, 0, 0, 15, 0, 0, 33, 0, 16, 0, 0, 2, 0, 15, 0, 0, 0, 15],
    [15, 0, 15, 15, 15, 15, 0, 0, 15, 0, 15, 0, 0, 0, 0, 15, 1, 1, 1, 15],
    [15, 0, 15, 15, 10, 15, 1, 3, 15, 15, 15, 0, 0, 0, 0, 15, 1, 10, 1, 15],
    [15, 0, 18, 0, 0, 15, 18, 3, 1, 10, 15, 17, 15, 0, 0, 15, 1, 1, 1, 15],
    [15, 15, 15, 1, 0, 15, 0, 3, 1, 1, 15, 1, 15, 0, 0, 15, 3, 3, 3, 15],
    [15, 11, 3, 0, 0, 15, 0, 3, 3, 17, 15, 3, 15, 0, 2, 15, 0, 18, 0, 15],
    [15, 33, 15, 0, 0, 15, 0, 0, 2, 0, 15, 33, 15, 18, 0, 15, 1, 1, 1, 15],
    [15, 0, 1, 0, 1, 15, 33, 15, 0, 0, 15, 33, 15, 0, 0, 15, 1, 11, 1, 15],
    [15, 15, 33, 33, 15, 15, 1, 15, 18, 1, 15, 3, 15, 0, 0, 15, 1, 1, 1, 15],
    [15, 0, 18, 0, 1, 15, 0, 15, 0, 0, 15, 1, 15, 0, 0, 15, 0, 18, 0, 15],
    [15, 0, 15, 15, 0, 15, 0, 3, 0, 0, 15, 15, 15, 0, 0, 15, 0, 0, 0, 15],
    [15, 0, 15, 15, 1, 15, 0, 15, 0, 0, 15, 1, 1, 2, 0, 15, 0, 0, 0, 15],
    [15, 18, 15, 15, 0, 15, 11, 15, 0, 0, 15, 1, 1, 0, 0, 15, 15, 15, 15, 15],
    [15, 0, 15, 15, 0, 15, 15, 15, 1, 0, 15, 3, 3, 0, 18, 0, 2, 33, 33, 15],
    [15, 0, 15, 15, 1, 15, 1, 0, 0, 0, 15, 4, 3, 0, 2, 0, 0, 33, 3, 5],
    [15, 0, 15, 15, 0, 16, 0, 0, 0, 0, 15, 3, 3, 0, 0, 0, 0, 33, 33, 15],
    [15, 0, 0, 0, 18, 15, 0, 0, 0, 1, 15, 1, 1, 0, 0, 2, 0, 1, 1, 15],
    [
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15,
    ],
  ],
};

export class Gameboard {
  constructor() {
    this.levels = {
      level1: [
        [2, 0, 4, 0, 3],
        [3, 0, 3, 0, 18],
        [8, 0, 0, 0, 3],
        [3, 18, 2, 0, 0],
        [1, 0, 3, 1, 7],
      ],
      level2: [
        [18, 33, 1, 0, 33, 18, 2],
        [0, 0, 0, 0, 0, 3, 7],
        [3, 0, 3, 33, 0, 2, 33],
        [8, 0, 3, 4, 18, 0, 0],
        [3, 0, 0, 0, 0, 3, 1],
        [18, 0, 3, 33, 33, 0, 2],
        [2, 0, 10, 1, 3, 0, 0],
      ],
      level3: [
        [15, 15, 33, 33, 0, 2, 0, 33, 11, 0],
        [10, 1, 1, 33, 0, 18, 0, 15, 1, 0],
        [15, 33, 33, 33, 1, 33, 2, 15, 3, 0],
        [0, 0, 18, 0, 33, 0, 18, 0, 0, 0],
        [3, 2, 0, 0, 0, 0, 33, 1, 0, 0],
        [8, 0, 0, 2, 0, 33, 0, 0, 2, 18],
        [33, 0, 3, 33, 15, 33, 18, 15, 15, 15],
        [2, 18, 15, 4, 3, 0, 0, 3, 33, 7],
        [3, 15, 15, 33, 3, 0, 33, 0, 3, 15],
        [3, 3, 0, 2, 0, 18, 0, 0, 18, 0],
      ],
      level4: [
        [
          15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
          15, 15, 15,
        ],
        [8, 0, 2, 1, 2, 17, 0, 0, 17, 0, 17, 0, 0, 2, 18, 17, 0, 18, 0, 15],
        [15, 0, 0, 0, 0, 15, 0, 0, 33, 0, 16, 0, 0, 2, 0, 15, 0, 0, 0, 15],
        [15, 0, 15, 15, 15, 15, 0, 0, 15, 0, 15, 0, 0, 0, 0, 15, 1, 1, 1, 15],
        [15, 0, 15, 15, 10, 15, 1, 3, 15, 15, 15, 0, 0, 0, 0, 15, 1, 10, 1, 15],
        [15, 0, 18, 0, 0, 15, 18, 3, 1, 10, 15, 17, 15, 0, 0, 15, 1, 1, 1, 15],
        [15, 15, 15, 1, 0, 15, 0, 3, 1, 1, 15, 1, 15, 0, 0, 15, 3, 3, 3, 15],
        [15, 11, 3, 0, 0, 15, 0, 3, 3, 17, 15, 3, 15, 0, 2, 15, 0, 18, 0, 15],
        [15, 33, 15, 0, 0, 15, 0, 0, 2, 0, 15, 33, 15, 18, 0, 15, 1, 1, 1, 15],
        [15, 0, 1, 0, 1, 15, 33, 15, 0, 0, 15, 33, 15, 0, 0, 15, 1, 11, 1, 15],
        [
          15, 15, 33, 33, 15, 15, 1, 15, 18, 1, 15, 3, 15, 0, 0, 15, 1, 1, 1,
          15,
        ],
        [15, 0, 18, 0, 1, 15, 0, 15, 0, 0, 15, 1, 15, 0, 0, 15, 0, 18, 0, 15],
        [15, 0, 15, 15, 0, 15, 0, 3, 0, 0, 15, 15, 15, 0, 0, 15, 0, 0, 0, 15],
        [15, 0, 15, 15, 1, 15, 0, 15, 0, 0, 15, 1, 1, 2, 0, 15, 0, 0, 0, 15],
        [
          15, 18, 15, 15, 0, 15, 11, 15, 0, 0, 15, 1, 1, 0, 0, 15, 15, 15, 15,
          15,
        ],
        [15, 0, 15, 15, 0, 15, 15, 15, 1, 0, 15, 3, 3, 0, 18, 0, 2, 33, 33, 15],
        [15, 0, 15, 15, 1, 15, 1, 0, 0, 0, 15, 44, 3, 0, 2, 0, 0, 33, 3, 5],
        [15, 0, 15, 15, 0, 16, 0, 0, 0, 0, 15, 3, 3, 0, 0, 0, 0, 33, 33, 15],
        [15, 0, 0, 0, 18, 15, 0, 0, 0, 1, 15, 1, 1, 0, 0, 2, 0, 1, 1, 15],
        [
          15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
          15, 15, 15,
        ],
      ],
    };
    this.win = false;
    this.player = new Player();
    this.currentLevel = this.player.getLevel();
    this.gameClass = document.querySelector(
      `.gameboard-level${this.currentLevel}`
    );
    this.gameArray = this.levels[`level${this.currentLevel}`];
    this.renderGameBoard();
    this.keys = {
      up: {
        pressed: false,
      },
      down: {
        pressed: false,
      },
      right: {
        pressed: false,
      },
      left: {
        pressed: false,
      },
    };
  }

  clearSpanGameBoard() {
    this.gameClass.querySelectorAll("span").forEach((span) => {
      span.remove();
    });
  }

  renderGameBoard() {
    this.clearSpanGameBoard(this.gameClass);
    let array = this.gameArray;
    const rows = array[0].length;
    const columns = rows;

    this.gameClass.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    this.gameClass.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        var span = document.createElement("span");
        span.className = "cell";
        switch (array[i][j]) {
          case 0: //blank space
            span.setAttribute("id", "blank-space");
            span.innerText = "\u2218";
            break;
          case 1: //coins
            span.setAttribute("id", "coin-space");
            span.innerText = "🪙";
            break;
          case 2: //hazard symbols
            span.setAttribute("id", "hazard-space");
            span.innerText = "\u2623";
            break;
          case 3: // level 1 block
            span.setAttribute("id", "block1-space");
            span.innerText = "\u26DD";
            break;
          case 33: // level 2 block
            span.setAttribute("id", "block2-space");
            span.innerText = "\u26DE";
            break;
          case 4: // key
            span.setAttribute("id", "key-space");
            span.innerText = "🗝";
            break;
          case 44: // key
            span.setAttribute("id", "key-space");
            span.innerText = "🗝";
            break;
          case 5: // door
            span.setAttribute("id", "door-space");
            span.innerText = "\u26EB";
            break;
          case 6: // diamonds
            span.setAttribute("id", "diamond-space");
            span.innerText = "💎";
            break;
          case 7: // lock
            span.setAttribute("id", "lock-space");
            span.innerText = "🔒";
            break;
          case 77: //unlock
            span.setAttribute("id", "unlock-space");
            span.innerText = "🔓";
            break;
          case 8: // player
            this.player.setLocation(j, i);
            span.setAttribute("id", "player-icon");
            span.innerText = "\u265B";
            break;
          case 9: // checked space
            span.setAttribute("id", "checked-space");
            span.innerText = "\u2219";
            break;
          case 10: // Pickaxe
            span.setAttribute("id", "pickaxe-icon");
            span.innerText = "\u26CF";
            break;
          case 11: // scythe
            span.setAttribute("id", "scythe-icon");
            span.innerText = "\u262D";
            break;
          case 12: // tools
            span.setAttribute("id", "tools-space");
            span.innerText = "⚒";
            break;
          case 13: // emerald
            span.setAttribute("id", "emerald-space");
            span.innerText = "♦";
            break;
          case 14: // gun
            span.setAttribute("id", "gun-space");
            span.innerText = "🔫";
          case 15: // level 3 block
            span.setAttribute("id", "block3-space");
            span.innerText = "\u26CB";
            break;
          case 16: // reset point
            span.setAttribute("id", "reset-space");
            span.innerText = "\u2727";
            break;
          case 17: // secret wall
            span.setAttribute("id", "secret-space");
            span.innerText = "\u26CB";
            break;
          case 18: //ruby
            span.setAttribute("id", "ruby-space");
            span.innerText = "⌔";
            break;

          default:
            this.gameClass.appendChild(span);
            break;
        }
        this.gameClass.appendChild(span);
      }
    }
  }

  checkValid(keyPressed) {
    const { x, y } = this.player.getLocation();

    switch (keyPressed) {
      case "w":
        if (y - 1 < 0) {
          return false;
        }

        switch (this.gameArray[y - 1][x]) {
          case 3:
          case 33:
          case 15:
            return false;
          default:
            return true;
        }
      case "s":
        if (y + 1 >= this.gameArray.length) {
          return false;
        }
        switch (this.gameArray[y + 1][x]) {
          case 3:
          case 33:
          case 15:
            return false;
          default:
            return true;
        }
      case "d":
        if (x + 1 >= this.gameArray.length) {
          return false;
        }
        switch (this.gameArray[y][x + 1]) {
          case 3:
          case 33:
          case 15:
            return false;
          default:
            return true;
        }
      case "a":
        if (x - 1 < 0) {
          return false;
        }
        switch (this.gameArray[y][x - 1]) {
          case 3:
          case 33:
          case 15:
            return false;
          case 1:
          default:
            return true;
        }
      default:
        return false;
    }
  }

  getGameClass() {
    return this.gameClass;
  }

  movePlayerUp() {
    const { x, y } = this.player.getLocation();

    switch (this.gameArray[y - 1][x]) {
      case 1:
        this.player.addCoins();
        break;
      case 2:
        this.player.decreaseHealth();
        break;
      case 6:
        this.player.addDiamonds();
        break;
      case 10:
        this.pickaxeActivate();
        break;
      case 4:
        this.unlock();
        break;
      case 44:
        this.player.setWin(true);
        break;
      case 11:
        this.scytheActivate();
        break;
      case 13:
        this.player.addEmeralds();
        break;
      case 77:
        this.update();
      case 7:
        return;
      case 16:
        this.resetPoint();
        break;
      case 18:
        this.player.addRubys();
        break;
      case 5:
        if (this.player.getWin()) {
          this.win = true;
        }
        break;
    }

    this.gameArray[y][x] = 9;
    this.gameArray[y - 1][x] = 8;
    this.player.setLocation(x, y - 1);
  }

  movePlayerDown() {
    const { x, y } = this.player.getLocation();

    switch (this.gameArray[y + 1][x]) {
      case 1:
        this.player.addCoins();
        break;
      case 2:
        this.player.decreaseHealth();
        break;
      case 10:
        this.pickaxeActivate();
        break;
      case 6:
        this.player.addDiamonds();
        break;
      case 4:
        this.unlock();
        break;
      case 44:
        this.player.setWin(true);
        break;
      case 11:
        this.scytheActivate();
        break;
      case 13:
        this.player.addEmeralds();
        break;
      case 77:
        this.update();
      case 7:
        return;
      case 16:
        this.resetPoint();
        break;
      case 18:
        this.player.addRubys();
        break;
      case 5:
        if (this.player.getWin()) {
          this.win = true;
        }
        break;
    }

    this.gameArray[y][x] = 9;
    this.gameArray[y + 1][x] = 8;
    this.player.setLocation(x, y + 1);
  }

  movePlayerRight() {
    const { x, y } = this.player.getLocation();

    switch (this.gameArray[y][x + 1]) {
      case 1:
        this.player.addCoins();
        break;
      case 2:
        this.player.decreaseHealth();
        break;
      case 10:
        this.pickaxeActivate();
        break;
      case 6:
        this.player.addDiamonds();
        break;
      case 4:
        this.unlock();
        break;
      case 44:
        this.player.setWin(true);
        break;
      case 11:
        this.scytheActivate();
        break;
      case 13:
        this.player.addEmeralds();
        break;
      case 77:
        this.update();
      case 7:
        return;
      case 16:
        this.resetPoint();
        break;
      case 18:
        this.player.addRubys();
        break;
      case 5:
        if (this.player.getWin()) {
          this.win = true;
        }
        break;
    }

    this.gameArray[y][x] = 9;
    this.gameArray[y][x + 1] = 8;
    this.player.setLocation(x + 1, y);
  }

  movePlayerLeft() {
    const { x, y } = this.player.getLocation();

    switch (this.gameArray[y][x - 1]) {
      case 1:
        this.player.addCoins();
        break;
      case 2:
        this.player.decreaseHealth();
        break;
      case 10:
        this.pickaxeActivate();
        break;
      case 6:
        this.player.addDiamonds();
        break;
      case 4:
        this.unlock();
        break;
      case 44:
        this.player.setWin(true);
        break;
      case 11:
        this.scytheActivate();
        break;
      case 13:
        this.player.addEmeralds();
        break;
      case 77:
        this.update();
      case 7:
        return;
      case 16:
        this.resetPoint();
        break;
      case 18:
        this.player.addRubys();
        break;
      case 5:
        if (this.player.getWin()) {
          this.win = true;
        }
        break;
    }

    this.gameArray[y][x] = 9;
    this.gameArray[y][x - 1] = 8;
    this.player.setLocation(x - 1, y);
  }

  getPlayer() {
    return this.player;
  }

  pickaxeActivate() {
    for (let i = 0; i < this.gameArray.length; i++) {
      for (let j = 0; j < this.gameArray[i].length; j++) {
        if (this.gameArray[i][j] == 3) {
          this.gameArray[i][j] = 6;
        }
      }
    }

    this.player.addWeapons("\u26CF");
  }

  scytheActivate() {
    for (let i = 0; i < this.gameArray.length; i++) {
      for (let j = 0; j < this.gameArray[i].length; j++) {
        if (this.gameArray[i][j] == 33) {
          this.gameArray[i][j] = 13;
        }
      }
    }

    this.player.addWeapons("\u262D");
  }

  unlock() {
    for (let i = 0; i < this.gameArray.length; i++) {
      for (let j = 0; j < this.gameArray[i].length; j++) {
        if (this.gameArray[i][j] == 7) {
          this.gameArray[i][j] = 77;
        }
      }
    }
  }

  resetPoint() {
    this.player.clearWeapons();
    for (let i = 0; i < this.gameArray.length; i++) {
      for (let j = 0; j < this.gameArray[i].length; j++) {
        switch (this.gameArray[i][j]) {
          case 13:
            this.gameArray[i][j] = 33;
            break;
          case 6:
            this.gameArray[i][j] = 3;
        }
      }
    }
  }

  getGameWin() {
    return this.win;
  }

  resetLevels() {}

  update() {
    if (this.currentLevel >= Object.keys(this.levels).length) {
      return;
    } else {
      this.clearSpanGameBoard();
      this.gameClass.style.display = "none";
      this.player.setLevel(++this.currentLevel);
      this.gameClass = document.querySelector(
        `.gameboard-level${this.currentLevel}`
      );
      this.gameClass.style.display = "grid";
      this.gameArray = this.levels[`level${this.currentLevel}`];
      this.player.clearWeapons();
      this.renderGameBoard();
    }
  }
}
