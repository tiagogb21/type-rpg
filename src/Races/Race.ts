export class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
    this.instanceNumber = 0;
  }

  get name () {
    return this._name;
  }

  get dexterity () {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    this.instanceNumber += 1;
    return this.instanceNumber;
  }

  get maxLifePoints () {
    
  }
}