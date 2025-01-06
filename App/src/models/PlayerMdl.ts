
import { IPlayer } from "@interfaces/IPlayer";

import { CardMdl } from "./CardMdl";

export class Player implements IPlayer {

    public id: string;
    public name: string;
    public score: number;
    public isTurn: boolean;
    public hand: Array<CardMdl>;
    public field: Array<CardMdl>;

    constructor(id: string, name: string, score: number = 0, isTurn: boolean = false) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.isTurn = isTurn;
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
