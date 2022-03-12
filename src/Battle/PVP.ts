import Battle from './Battle';
import Fighter from '../Fighter';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(
    private _character1: Fighter = new Character(''),
    private _character2: Fighter = new Character(''),
  ) { }

  fight(): number {
    super.fight();
    this._character1.receiveDamage(this._character2.strength);
    this._character2.receiveDamage(this._character1.strength);
  }
}