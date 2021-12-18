export enum ItemState {
    Normal = "?",
    Clicked = "Ñee ñee 👻",
    Blocked = "X",
    Found = "Nouuuuu 😣",
}

export default class Item {
    x: number;
    y: number;
    state: ItemState;
    blockTimer: NodeJS.Timeout | null = null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.state = ItemState.Normal;
    }

    print(): string {
        return `${this.x}x${this.y}`;
    }

    hasSamePosition(x: number, y: number): boolean {
        return this.x == x && this.y == y;
    }
}