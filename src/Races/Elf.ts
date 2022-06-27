import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countCreateRacesInstances: 0;

  constructor(
    name: string,
    dexterity: number
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countCreateRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstance(): number {
    return this._countCreateRacesInstances;
  }
}
