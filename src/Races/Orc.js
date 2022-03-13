"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.health = 74;
        // this.raceCount = 0;
        Orc.addCharacter();
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
Orc.raceCount = 0;
exports.default = Orc;
