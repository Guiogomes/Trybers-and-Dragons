"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Warrior extends Archetypes_1.default {
    constructor(name, special = 0, cost = 0) {
        super(name, special, cost);
        this.damage = 'stamina';
        Warrior.addArchetype();
    }
    static addArchetype() {
        this.archetypeCount += 1;
    }
    get energyType() {
        return this.damage;
    }
    static createdArchetypeInstances() {
        return this.archetypeCount;
    }
}
Warrior.archetypeCount = 0;
exports.default = Warrior;
