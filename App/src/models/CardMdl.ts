
import { ICard } from "@interfaces/ICard";

// src/models/Card.ts
interface CardMdlProps {
    id: string,
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker",
    suite: "clubs" | "spades" | "hearts" | "diamonds" | "joker",
};

export class CardMdl implements ICard {

    public id: string;
    public rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker";
    public suite: "clubs" | "spades" | "hearts" | "diamonds" | "joker";

    constructor({
        id,
        rank,
        suite,
    }: CardMdlProps) {
        this.id = id;
        this.rank = rank;
        this.suite = suite;
    };

    getId(): string {
        return this.id;
    };

    getRank(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker" {
        return this.rank;
    };

    // Get the suit of the card
    getSuite(): "clubs" | "spades" | "hearts" | "diamonds" | "joker" {
        return this.suite;
    };

    // Optionally, you can add a method to represent the card as a string (e.g., "Ace of Spades")
    toString(): string {
        return `${this.rank} of ${this.suite}`;
    };

    // You can extend this class further by adding methods based on game rules
    // e.g., compare two cards, check for special abilities, etc.

};
