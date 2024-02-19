export declare class GroupList {
    protected items: Array<string>;
    protected totalItems: number;
    protected sizeGroup: number;
    protected groups: string[][];
    protected totalGroups: number;
    protected index: number;
    constructor(items: Array<string>, groupSize: number);
    previous(): string[];
    next(): string[];
    first(): string[];
    last(): string[];
    isFirst(): boolean;
    isLast(): boolean;
    hasPrevious(): boolean;
    hasNext(): boolean;
    getIndex(): number;
    getTotalItems(): number;
    getTotalGroups(): number;
    creatGroups(items: string[], chunkSize: number): string[][];
    search(text: string): number;
    goTo(index: number): string[];
    getGroupIndex(icon: string): number;
    getAllItems(): string[];
}
