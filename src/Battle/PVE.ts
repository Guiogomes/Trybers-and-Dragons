import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Monster from '../Monster';
import getRandomInt from '../utils';

const rounds: number[] = [getRandomInt(1, 10)];

export default class PVE extends Battle {
  protected _player: Fighter;
  protected _enemies: SimpleFighter[];
  // enemy: SimpleFighter;

  constructor(
    player: Fighter = new Character(''),
    enemies: SimpleFighter[] = [new Monster()],
  ) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  defineWhichEnemyGoes(): SimpleFighter {
    if (this._enemies.length === 1) return this._enemies[0];
    const enemyIndex = getRandomInt(0, this._enemies.length - 1);
    return this._enemies[enemyIndex];
  }
  
  battle(turn: number): void {
    const enemy = this.defineWhichEnemyGoes();
    if (turn % 2 === 0) {
      this._player.attack(enemy);
    } else {
      enemy.attack(this._player);
    }
  }
  
  lifeEnemies(): boolean {
    return this._enemies.every((enemy) => enemy.lifePoints !== -1);
  }

  // Função figth feita com ajuda de Bel Albuquerque - turma 14B
  // me ajudou a ver que aleatorizar tudo estava afetando o comportamento
  // e memory leak do for.

  fight(): number {
    for (let index = 0;
      this._player.lifePoints !== -1 && this.lifeEnemies();
      index += 1) {
      this.battle(rounds[index]);
      rounds.push(rounds[index] + 1);
    }
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}