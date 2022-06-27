// archetype por padrão com uma instância de Mage;
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private name: string;
  constructor(name: string) {
    this.name = name;
    this._race = new Elf(this.name, 50);
    this._archetype = new Mage(this.name);
    // maxLifePoints (default): metade do maxLifePoints da raça instanciada;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    // lifePoints (default): mesmo valor de maxLifePoints da classe;
    this._lifePoints = this._maxLifePoints;
    // strength, defense: valores aleatórios, mínimo 1 e máximo 10 pontos;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    // Sempre que este método for chamado os atributos maxLifePoints, strength, dexterity e defense terão um incremento de no mínimo 1 e no máximo 10 pontos; 
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    // O montante de energia deve rá ficar cheio
    this._energy.amount = 10;

    // O atributo maxLifePoints do Character nunca poderá ser maior que o maxLifePoints de sua raça
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    // O atributo lifePoints deve ser atualizado, recebendo o novo valor de maxLifePoints
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    // This is a critical method
    enemy.receiveDamage(2 * this._strength);
  }
}
