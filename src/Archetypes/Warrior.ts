import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  damage: EnergyType;
  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    this.damage = 'mana';
  }
}

export default Warrior;