"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.health = 99;
        // this.raceCount = 0;
        Elf.addCharacter();
    }
    static addCharacter() {
        this.raceCount += 1;
    }
    static createdRacesInstances() {
        return this.raceCount;
    }
    get maxLifePoints() {
        return this.health;
    }
}
Elf.raceCount = 0;
exports.default = Elf;
