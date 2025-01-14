
import { IPlayer } from "@interfaces/IPlayer";

export class PlayerMdl implements IPlayer {

    public id: string;
    public name: string;
    public score: number;
    public isTurn: boolean;
    public hand: Array<string>;
    public field: Array<string>;

    constructor({
        id,
        name,
        score = 0,
        isTurn = false,
        hand = [],
        field = [],
    }: {
        id: string;
        name: string;
        score?: number;
        isTurn?: boolean;
        hand?: Array<string>;
        field?: Array<string>;
    }) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.isTurn = isTurn;
        this.hand = hand;
        this.field = field;
    };

    isPlayerCard(id: string): boolean {

        const allPlayerCards = [...this.getField(), ...this.getHand()];

        return allPlayerCards.some((cardId: string) => cardId === id);

    };

    getHand(): Array<string> {
        return this.hand;
    };

    pushHandCardId(cardId: string): string {
        this.hand.push(cardId);
        return cardId;
    };

    getField(): Array<string> {
        return this.field;
    };

    pushFieldCardId(cardId: string): string {
        this.field.push(cardId);
        return cardId;
    };

    // Getter for player ID
    getId(): string {
        return this.id;
    };

    // Getter and setter for player name
    getName(): string {
        return this.name;
    };

    setName(name: string): void {
        this.name = name;
    };

    // Getter and setter for score
    getScore(): number {
        return this.score;
    };

    incrementScore(points: number): void {
        this.score += points;
    };

    // Getter and setter for turn status
    isPlayerTurn(): boolean {
        return this.isTurn;
    };

    setTurnStatus(status: boolean): void {
        this.isTurn = status;
    };

    // Display player details
    toString(): string {
        return `Player ${this.name} (ID: ${this.id}) has ${this.score} points and it is ${this.isTurn ? "their" : "not their"} turn.`;
    };

};
