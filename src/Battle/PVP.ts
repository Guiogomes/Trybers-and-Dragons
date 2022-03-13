import Battle from './Battle';
import Fighter from '../Fighter';
import Character from '../Character';
import getRandomInt from '../utils';

const rounds: number[] = [getRandomInt(1, 10)];

export default class PVP extends Battle {
  protected _character1: Fighter;
  protected _character2: Fighter;

  constructor(
    player: Fighter = new Character(''),
    player2: Fighter = new Character(''),
  ) {
    super(player);
    this._character1 = player;
    this._character2 = player2;
  }

  battle(turn: number): void {
    if (turn % 2 === 0) {
      this._character1.attack(this._character2);
    } else {
      this._character2.attack(this._character1);
    }
  }

  fight(): number {
    let index = 0;
    while (this._character1.lifePoints !== -1
      && this._character2.lifePoints !== -1) {
      this.battle(rounds[index]);
      index += 1;
      rounds.push(getRandomInt(1, 10));
    }
    return this._character1.lifePoints === -1 ? -1 : 1;
  }
}
