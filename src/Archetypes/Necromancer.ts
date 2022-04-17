import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  damage: EnergyType;
  static archetypeCount = 0;
  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.damage = 'mana';
    Necromancer.addArchetype();
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

export default Necromancer;