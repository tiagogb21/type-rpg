export class Race {
  name: string;
  dexterity: number;
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }
  get nameInfo () {
    return this.name;
  }
  get dexterityInfo () {
    return this.dexterity;
  }
  createdRacesInstances(): number {

  }
  get maxLifePoints () {
    
  }
}