"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.health = 60;
        // this.raceCount = 0;
        Halfling.addCharacter();
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
Halfling.raceCount = 0;
exports.default = Halfling;
