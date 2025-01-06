
// src/models/interfaces/ICard.ts
export interface ICard {
    suit: string;
    value: string;
    getSuit(): string;
    getValue(): string;
    toString(): string;
};
