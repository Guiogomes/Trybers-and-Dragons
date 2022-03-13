"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("./Races");
const Archetypes_1 = require("./Archetypes");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        // this.name = name;
        this._race = new Races_1.Elf(name, (0, utils_1.default)(1, 20));
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._dexterity = this._race.dexterity;
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() { return this._race; }
    get archetype() { return this._archetype; }
    get maxLifePoints() { return this._maxLifePoints; }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() { return Object.assign({}, this._energy); }
    receiveDamage(attackPoints) {
        const dano = attackPoints - this._defense;
        if (dano > 0) {
            this._lifePoints -= dano;
            if (this._lifePoints <= 0) {
                this._lifePoints = -1;
            }
        }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        this._lifePoints = this._maxLifePoints;
    }
    // problema resolvido com ajuda de Ivanielson Cabral - turma 14B
    // implementação do special estava afetando a criação
    // do Character
    special(enemy) {
        enemy.receiveDamage(this._strength * 4);
    }
}
exports.default = Character;
