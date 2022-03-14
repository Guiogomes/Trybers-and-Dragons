import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Monster from '../Monster';
import getRandomInt from '../utils';

const rounds: number[] = [getRandomInt(1, 10)];

export default class PVE extends Battle {
  protected _player: Fighter;
  protected _enemies: SimpleFighter[];
  enemy: SimpleFighter;

  constructor(
    player: Fighter = new Character(''),
    enemies: SimpleFighter[] = [new Monster()],
  ) {
    super(player);
    this._player = player;
    this._enemies = enemies;
    this.enemy = this.defineWhichEnemyGoes();
  }

  defineWhichEnemyGoes(): SimpleFighter {
    if (this._enemies.length === 1) return this._enemies[0];
    const enemyIndex = Math.floor(Math.random() * this._enemies.length);
    return this._enemies[enemyIndex];
  }
  
  battle(turn: number): void {
    if (turn % 2 === 0) {
      this._player.attack(this.enemy);
    } else {
      this.enemy.attack(this._player);
    }
  }
  
  fight(): number {
    for (let index = 0; this._player.lifePoints !== -1
      && this.enemy.lifePoints !== -1; index += 1) {
      this.battle(rounds[index]);
      rounds.push(getRandomInt(1, 10));
    }
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}