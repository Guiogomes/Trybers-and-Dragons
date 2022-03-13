"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.health = 80;
        Dwarf.addCharacter();
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
Dwarf.raceCount = 0;
exports.default = Dwarf;
