import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _countCreatedArchetypesInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._countCreatedArchetypesInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
      return this._countCreatedArchetypesInstance;
  }

}