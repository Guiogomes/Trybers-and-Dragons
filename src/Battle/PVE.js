"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
const Character_1 = require("../Character");
const Monster_1 = require("../Monster");
const utils_1 = require("../utils");
const rounds = [(0, utils_1.default)(1, 10)];
class PVE extends Battle_1.default {
    constructor(player = new Character_1.default(''), enemies = [new Monster_1.default()]) {
        super(player);
        this._player = player;
        this._enemies = enemies;
    }
    battle(turn) {
        let index = 0;
        const defineEnemy = this._enemies[index] === undefined
            ? this._enemies[0] : this._enemies[index];
        if (turn % 2 === 0) {
            this._player.attack(defineEnemy);
            index += 1;
        }
        else {
            defineEnemy.attack(this._player);
        }
    }
    fight() {
        let index = 0;
        while (this.player.lifePoints !== -1
            && this._enemies.every((enemy) => enemy.lifePoints !== -1)) {
            this.battle(rounds[index]);
            index += 1;
            rounds.push((0, utils_1.default)(1, 10));
        }
        return this.player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
