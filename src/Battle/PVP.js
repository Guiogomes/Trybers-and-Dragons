"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
const Character_1 = require("../Character");
const utils_1 = require("../utils");
const rounds = [(0, utils_1.default)(1, 10)];
class PVP extends Battle_1.default {
    constructor(player = new Character_1.default(''), player2 = new Character_1.default('')) {
        super(player);
        this._character1 = player;
        this._character2 = player2;
    }
    battle(turn) {
        if (turn % 2 === 0) {
            this._character1.attack(this._character2);
        }
        else {
            this._character2.attack(this._character1);
        }
    }
    fight() {
        let index = 0;
        while (this._character1.lifePoints !== -1
            && this._character2.lifePoints !== -1) {
            this.battle(rounds[index]);
            index += 1;
            rounds.push((0, utils_1.default)(1, 10));
        }
        return this._character1.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVP;
