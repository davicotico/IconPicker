
export class GroupList {
  protected items: Array<string>;
  protected totalItems: number;
  protected sizeGroup: number;

  protected groups: string[][] = [];
  protected totalGroups: number = 0;
  
  protected index: number = 0;

  constructor(items: Array<string>, groupSize: number) {
    this.sizeGroup = groupSize;
    this.items = items;
    this.totalItems = this.items.length;
    this.groups = this.creatGroups(this.items, this.sizeGroup);
    this.totalGroups = this.groups.length;
  }

  public previous(): string[] {
    if (this.isFirst()) {
      return this.groups[0];
    }
    this.index--;
    return this.groups[this.index];
  }

  public next(): string[] {
    if (this.isLast()) {
      return this.groups[this.totalGroups - 1];
    }
    this.index++;
    return this.groups[this.index];
  }

  public first(): string[] {
    this.index = 0;
    return this.groups[this.index];
  }

  public last(): string[] {
    this.index = this.groups.length - 1;
    return this.groups[this.index];
  }

  public isFirst(): boolean {
    return (this.index == 0);
  }

  public isLast(): boolean {
    return (this.index + 1 >= this.totalGroups);
  }

  public hasPrevious() {
    let i = this.index - 1;
    return (i >= 0);
  }

  public hasNext() {
    let i = this.index + 1;
    return (i < this.totalGroups);
  }

  public getIndex(): number {
    return this.index;
  }

  public getTotalItems(): number {
    return this.totalItems;
  }

  public getTotalGroups(): number {
    return this.totalGroups;
  }

  public creatGroups(items: string[], chunkSize: number): string[][] {
    return items.reduce((acc: string[][], curr, i) => {
      const index = Math.floor(i / chunkSize);
      if (!acc[index]) {
        acc[index] = [];
      }
      acc[index].push(curr);
      return acc;
    }, []);
  }

  public search(text: string): number { //:  string[][] {
    let result = this.items.filter((item) => item.indexOf(text) >= 0);
    this.groups = this.creatGroups(result, this.sizeGroup);
    this.totalGroups = this.groups.length;
    return result.length;
  }

  public getAllItems() {
    return this.items;
  }
}
