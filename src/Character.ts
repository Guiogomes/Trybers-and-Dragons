import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this.name = name;
    this._race = new Elf(name);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return this._energy; }
  receiveDamage(attackPoints: number): number {
    const dano = attackPoints - this._defense;
    let damage: number;
    if (dano > 0) {
      damage = this._lifePoints - dano;
      return damage;
    }

    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter): number {
    return this._strength - enemy.strength;
  }

  levelUp(): void {
    
  }
}

export default Character;