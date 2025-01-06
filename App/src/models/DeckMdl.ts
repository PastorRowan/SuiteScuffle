
// src/models/Deck.ts
import { IDeck } from "@interfaces/ICard";
import { Card } from "./CardMdl"; // Assuming you have a Card class or interface for cards

export class DeckMdl implements IDeck {

    private cards: Card[] = [];
    private drawnCards: Card[] = [];

    constructor(cards: Card[] = []) {
        this.cards = cards;
        this.drawnCards = [];
        this.shuffle(); // Automatically shuffle the deck upon initialization
    };

    // Shuffle the deck
    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
        };
    };

    // Draw a card from the deck
    drawCard(): Card | null {
        const card = this.cards.pop();
        if (card) {
            this.drawnCards.push(card);
        };
        return card || null;
    };

    // Get all remaining cards
    getRemainingCards(): Card[] {
        return this.cards;
    }

    // Get all drawn cards
    getDrawnCards(): Card[] {
        return this.drawnCards;
    };

    // Reset the deck with a new set of cards
    resetDeck(newCards: Card[]): void {
        this.cards = [...newCards];
        this.drawnCards = [];
        this.shuffle(); // Shuffle the deck again
    };

    // Optionally, you can create additional methods like:
    // - Get the top card
    // - Re-shuffling the deck without changing the drawn cards
    // - Custom methods depending on game rules
};
