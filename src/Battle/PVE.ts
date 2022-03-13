import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Monster from '../Monster';
import getRandomInt from '../utils';

export default class PVE extends Battle {
  constructor(
    player: Fighter = new Character(''),
    enemies: SimpleFighter[] = [new Monster()],
  ) {

  }
}