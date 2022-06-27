import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  lifePoints: number;
  energy?: Energy;
  strength: number;

  receiveDamage(attackPoints: number): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  attack(target: Fighter): void;
}
