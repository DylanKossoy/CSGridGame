import { Coordinate } from "./Coordinates.js";

export class Player {
  constructor() {
    this.health = 100;
    this.coins = 0;
    this.diamonds = 0;
    this.rubys = 0;
    this.emeralds = 0;
    this.weapons = [];
    this.level = 1;
    this.key = false;
    this.playerIcon = "\u265B";
    this.location = new Coordinate(0, 0);
    this.playerWin = false;
  }

  setLevel(level) {
    this.level = level;
  }
  getLevel() {
    return this.level;
  }
  getHealth() {
    return this.health;
  }
  getCoins() {
    return this.coins;
  }
  getKey() {
    return this.key;
  }
  getDiamonds() {
    return this.diamonds;
  }
  getEmeralds() {
    return this.emeralds;
  }
  getLocation() {
    return this.location;
  }
  getRubys() {
    return this.rubys;
  }
  addRubys() {
    this.rubys += 5;
  }
  setLocation(x, y) {
    this.location.x = x;
    this.location.y = y;
  }
  clearWeapons() {
    this.weapons.length = 0;
  }
  showWeapons() {
    let weapons = "";

    this.weapons.forEach((weapon) => {
      weapons += `${weapon}, `;
    });

    return weapons;
  }

  setHealth(health) {
    this.health = health;
  }
  addEmeralds() {
    this.emeralds += 10;
  }
  addWeapons(name) {
    this.weapons.push(name);
  }
  addDiamonds() {
    this.diamonds += 1;
  }
  addCoins() {
    this.coins += 100;
  }

  addMoneyBag() {
    this.coins += 1000;
  }

  decreaseHealth() {
    if (this.checkLose()) {
      return;
    }
    this.health -= 30;
  }

  checkLose() {
    if (this.health <= 0) {
      return true;
    }
    return false;
  }

  setWin(win) {
    this.win = win;
  }

  getWin() {
    return this.win;
  }

  resetPlayer() {
    this.health = 100;
    this.coins = 0;
    this.diamonds = 0;
    this.rubys = 0;
    this.emeralds = 0;
    this.weapons = [];
    this.level = 1;
    this.key = false;
    this.playerIcon = "\u265B";
    this.location = new Coordinate(0, 0);
  }

  showStats() {
    return `Health: ${this.health}\nCoins: ${this.coins}\nWeapons: ${this.weapons} `;
  }
}
