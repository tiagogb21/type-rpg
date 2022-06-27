import Race from './Race';

export class Orc extends Race {
  private _maxLifePoints: number;
  private static _countCreateRacesInstances: 0;

  constructor(
    maxLifePoints: number,
    countCreateRacesInstances: number
  ) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    this._countCreateRacesInstances = countCreateRacesInstances
  }
  
  createdRacesInstances(80) 
}
