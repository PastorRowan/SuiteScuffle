
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

// Allow selecting multiple controlled player cards
export const controlledPlayerSelectedCardsAtom = atom<CardMdl[]>([]);

export const controlledPlayerSelectedEnemyCardAtom = atom<CardMdl | null>(null);

// Atom to track the battle state (notStarted, inProgress, resolved)
export const battleStateAtom = atom("notStarted" | "inProgress" | "resolved");

// Create an atom to represent the current player's field
export const currentPlayerFieldAtom = atom<CardMdl[]>(
    (get) => {
        const currentPlayer = get(currentPlayerAtom);
        return currentPlayer.getField(); // Assuming getField() returns the player's field
    }
);

// Create an atom to represent the current player's hand
export const currentPlayerHandAtom = atom<CardMdl[]>(
    (get) => {
        const currentPlayer = get(currentPlayerAtom);
        return currentPlayer.getHand(); // Assuming getHand() returns the player's hand
    }
);

// Create an atom to switch the turn to the next player
export const nextTurnAtom = atom(
    null,
    (get, set) => {
        const gameState = get(gameStateAtom);
        const nextTurn = (gameState.currentTurn + 1) % gameState.players.length;
        set(gameStateAtom, { ...gameState, currentTurn: nextTurn });
    }
);

// Atom to check if both a controlled card and an enemy card are selected
export const isBattleReadyAtom = atom((get) => {
    const controlledPlayerCard = get(controlledPlayerSelectedCardAtom);
    const enemyCard = get(controlledPlayerSelectedEnemyCardAtom);

    // Both a controlled card and an enemy card must be selected
    return controlledPlayerCard !== null && enemyCard !== null;
});

// Atom to represent the controlled player's enemy-selected card
export const controlledPlayerEnemySelectedCardAtom = atom<CardMdl | null>(
    (get) => {
        const gameState = get(gameStateAtom);
        const controlledPlayer = get(controlledPlayerAtom);

        // Find the enemy players (all players except the controlled player)
        const enemyPlayers = gameState.players.filter(
            (player) => player.getId() !== controlledPlayer?.getId()
        );

        // Check for the first enemy-selected card (logic depends on your game rules)
        for (const enemy of enemyPlayers) {
            const selectedCard = enemy.getField().find((card: CardMdl) => card.isSelected); // Example condition
            if (selectedCard) return selectedCard;
        };

        return null; // No selected card
    }
);
