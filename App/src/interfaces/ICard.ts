
// thinking about making a dedicated types folder
export type CardRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker";

// src/models/interfaces/ICard.ts
export interface ICard {
    id: string;
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker";
    suite: "clubs" | "spades" | "hearts" | "diamonds" | "joker";
    getId(): string,
    getRank(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker",
    getSuite(): string;
    toString(): string;
};
