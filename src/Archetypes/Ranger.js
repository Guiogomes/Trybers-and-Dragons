"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Ranger extends Archetypes_1.default {
    constructor(name, special = 0, cost = 0) {
        super(name, special, cost);
        this.damage = 'stamina';
        Ranger.addArchetype();
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
Ranger.archetypeCount = 0;
exports.default = Ranger;
