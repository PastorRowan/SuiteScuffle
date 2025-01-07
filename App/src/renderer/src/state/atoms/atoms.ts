
// state/atoms.ts
import { atom } from "jotai";

import { PlayerMdl } from "@models/PlayerMdl";
import { CardMdl } from "@models/CardMdl";

import { samplePlayers } from "./samplePlayers";

interface GameState {
    players: PlayerMdl[];
    currentTurn: number; // Index of the player whose turn it is
};

// Initialize the atom with the state
export const gameStateAtom = atom<GameState>({
    players: samplePlayers,
    currentTurn: 0, // Start with Player 1"s turn
});

// Create an atom to manage the current player based on currentTurn
export const currentPlayerAtom = atom(
    (get) => {
        const gameState = get(gameStateAtom);
        return gameState.players[gameState.currentTurn];
    }
);

export const controlledPlayerAtom = atom<PlayerMdl | null>(samplePlayers[0]);

// Create an atom to check if it's the controlled player's turn
export const isControlledPlayerTurnAtom = atom(
    (get) => {
        const gameState = get(gameStateAtom);
        const controlledPlayer = get(controlledPlayerAtom);
        return controlledPlayer?.getId() === gameState.players[gameState.currentTurn].getId();
    }
);

export const controlledPlayerSelectedCardAtom = atom<CardMdl | null>(null);

// Create an atom to switch the turn to the next player
export const nextTurnAtom = atom(
    null,
    (get, set) => {
        const gameState = get(gameStateAtom);
        const nextTurn = (gameState.currentTurn + 1) % gameState.players.length;
        set(gameStateAtom, { ...gameState, currentTurn: nextTurn });
    }
);
