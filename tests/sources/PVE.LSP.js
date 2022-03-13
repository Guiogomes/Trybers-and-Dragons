"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("../../src/Battle");
const Character_1 = require("../../src/Character");
const Monster_1 = require("../../src/Monster");
const fight = (battle) => battle.fight();
const result = () => {
    const player1 = new Character_1.default('');
    for (let i = 0; i < 500; i++)
        player1.levelUp();
    const monster = new Monster_1.default();
    const pve1 = new Battle_1.PVE(player1, [monster]);
    const player2 = new Character_1.default('');
    const monsters = [];
    for (let i = 0; i < 500; i++)
        monsters.push(new Monster_1.default());
    const pve2 = new Battle_1.PVE(player2, monsters);
    return [fight(pve1), fight(pve2)];
};
