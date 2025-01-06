
import { IPlayer } from "./IPlayer";

// src/models/interfaces/IGameState.ts
export interface IGameState {
    gameId: string;          // Unique identifier for the game
    players: IPlayer[];      // Array of players (could be an array of Player objects or data)
    currentTurn: string;     // The ID or name of the current player whose turn it is
    gameStatus: "not-started" | 'in-progress' | 'ended'; // Current status of the game
    scores: Record<string, number>; // A map of player IDs to their scores
    winner?: string;         // The winner, if the game is over
    gameData?: any;          // Any game-specific data, like the board or pieces (can be customized)
};
