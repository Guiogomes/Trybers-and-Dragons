import Race from './Race';

class Halfling extends Race {
  health: number;
  static raceCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.health = 60;
    // this.raceCount = 0;
    Halfling.addCharacter();
  }

  static addCharacter() {
    this.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }

  get maxLifePoints(): number {
    return this.health;
  }
}

export default Halfling;