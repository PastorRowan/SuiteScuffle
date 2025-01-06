
import { ICard } from "@interfaces/ICard";

// src/models/Card.ts
export class CardMdl implements ICard {

    private suit: string;
    private value: string;

    constructor(suit: string, value: string) {
        this.suit = suit;
        this.value = value;
    };

    // Get the suit of the card
    getSuit(): string {
        return this.suit;
    };

    // Get the value of the card
    getValue(): string {
        return this.value;
    };

    // Optionally, you can add a method to represent the card as a string (e.g., "Ace of Spades")
    toString(): string {
        return `${this.value} of ${this.suit}`;
    };

    // You can extend this class further by adding methods based on game rules
    // e.g., compare two cards, check for special abilities, etc.
};
