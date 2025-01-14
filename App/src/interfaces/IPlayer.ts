
// src/models/interfaces/IPlayer.ts
export interface IPlayer {
    id: string;
    name: string;
    score?: number;
    isTurn?: boolean;
    hand?: Array<string>;
    field?: Array<string>;
    isPlayerCard(id: string): boolean,
    getHand(): Array<string>,
    getField(): Array<string>,
    getId(): string;
    getName(): string;
    setName(name: string): void;
    getScore(): number;
    incrementScore(points: number): void;
    isPlayerTurn(): boolean;
    setTurnStatus(status: boolean): void;
    toString(): string;
};
