import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Monster from '../Monster';
// import getRandomInt from '../utils';

// const rounds: number[] = [getRandomInt(1, 10)];

export default class PVE extends Battle {
  protected _player: Fighter;
  protected _enemies: SimpleFighter[];

  constructor(
    player: Fighter = new Character(''),
    enemies: SimpleFighter[] = [new Monster()],
  ) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  battle(turn: number): void {
    let index = 0;
    const defineEnemy = this._enemies[index] === undefined
      ? this._enemies[0] : this._enemies[index];
    if (turn % 2 === 0) {
      this._player.attack(defineEnemy);
      index += 1;
    } else {
      defineEnemy.attack(this._player);
    }
  }
  
  // fight(): number {
  //   let index = 0;
  //   const enemiesLife = this._enemies
  //     .every((enemy) => enemy.lifePoints !== -1); 
  //   while (this.player.lifePoints !== -1
  //     && enemiesLife) {
  //     this.battle(rounds[index]);
  //     index += 1;
  //     rounds.push(getRandomInt(1, 10));
  //   }
  //   return this.player.lifePoints === -1 ? -1 : 1;
  // }
}