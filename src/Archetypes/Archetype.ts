export default class Archetype {
  private readonly name: string;
  private readonly special: number;
  private readonly cost: number;
  constructor(
    name: string,
  ) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }
  static createdArchetypeInstances(): number{
    throw new Error('Not implemented');
  };
}
