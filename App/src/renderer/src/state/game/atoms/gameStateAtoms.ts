
import { atom } from "jotai";

import { PlayerMdl } from "@models/PlayerMdl";

import { samplePlayers } from "./samplePlayers";

import { hasControlledPlayerSelectedCardsAtom, hasControlledPlayerSelectedEnemyCardAtom } from "./controlledPlayerAtoms";

interface GameState {
    players: PlayerMdl[];
    currentTurn: number; // Index of the player whose turn it is
};

// Initialize the atom with the state
const gameStateAtomBase = atom<GameState>({
    players: samplePlayers,
    currentTurn: 0, // Start with Player 1"s turn
});

export const selectGameStateAtom = atom<GameState>(
    (get) => get(gameStateAtomBase),
);

// Create an atom to manage the current player based on currentTurn
export const currentPlayerAtom = atom(
    (get) => {
        const gameState = get(selectGameStateAtom);
        return gameState.players[gameState.currentTurn];
    },
);

// Create an atom to switch the turn to the next player
export const nextTurnAtom = atom(
    null,
    (get, set) => {
        const gameState = get(selectGameStateAtom);
        const nextTurn = (gameState.currentTurn + 1) % gameState.players.length;
        set(gameStateAtomBase, { ...gameState, currentTurn: nextTurn });
    },
);

// Atom to check if both a controlled card and an enemy card are selected
export const isBattleReadyAtom = atom<boolean>((get) => {

    const hasSelectedControlledCards = get(hasControlledPlayerSelectedCardsAtom);
    const hasSelectedEnemyCard = get(hasControlledPlayerSelectedEnemyCardAtom);

    return hasSelectedControlledCards && hasSelectedEnemyCard;

});

// Atom to track the battle state (notStarted, inProgress, resolved)
export const isBattlingAtom = atom<boolean>((get) => {

    const isBattleReady = get(isBattleReadyAtom);

    return isBattleReady;

});
