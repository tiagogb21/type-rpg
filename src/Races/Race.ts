export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  private readonly _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = maxLifePoints
  }

  get name () {
    return this._name;
  }

  get dexterity () {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented')
  }

  abstract get maxLifePoints(): number;
}