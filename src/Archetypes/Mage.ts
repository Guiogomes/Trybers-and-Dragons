import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  damage: EnergyType;
  static archetypeCount = 0;
  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.damage = 'mana';
    Mage.addArchetype();
  }

  static addArchetype(): void {
    this.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }
}

export default Mage;