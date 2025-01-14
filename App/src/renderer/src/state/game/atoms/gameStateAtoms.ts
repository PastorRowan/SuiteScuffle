
import { atom } from "jotai";

import {
    isMcSelectedAnyEnemyCardsAtom,
    isMcSelectedAnyMcCardsAtom,
} from "./cards";

import {
    selectPlayerAtom,
    // selectPlayersAtom,
} from "./players";

/*
interface GameState {
    controlledPlayerId: string,
    turnOrder: Array<string>,
    currentTurnPlayerId: string;
    status: "idle" | "battling",
};
*/

// Initialize the atom with the state
const gameStateAtomBase = atom({
    mcPlayerId: "1",
    turnOrder: ["1", "2"],
    currentTurnPlayerId: "1",
    status: "idle",
});

export const selectGameStateAtom = atom(
    get => get(gameStateAtomBase),
);

export const selectMcIdAtom = atom(
    get => {
        const gameStateAtom = get(selectGameStateAtom);
        const controlledPlayerId = gameStateAtom.mcPlayerId
        return controlledPlayerId;
    },
);

// add warning if there is no mc
export const selectMc = atom(
    get => {
        const mcPlayerId = get(selectMcIdAtom);
        const selectPlayer = get(selectPlayerAtom);
        return selectPlayer(mcPlayerId);
    },
);

export const selectMcHand = atom(
    get => {
        const mc = get(selectMc);
        const mcHand = mc?.getHand();
        return mcHand;
    },
);

export const selectMcField = atom(
    get => {
        const mc = get(selectMc);
        const mcField = mc?.getField();
        return mcField;
    },
);

// Create an atom to manage the current player based on currentTurn
export const selectCurrentTurnPlayerIdAtom = atom(
    get => {
        const gameState = get(selectGameStateAtom);
        const currentTurnPlayerId = gameState.currentTurnPlayerId;
        return currentTurnPlayerId;
    },
);

export const selectCurrentTurnPlayerAtom = atom(
    get => {
        const currentTurnPlayerId = get(selectCurrentTurnPlayerIdAtom);
        const selectPlayer = get(selectPlayerAtom);
        return selectPlayer(currentTurnPlayerId);
    },
);

export const selectTurnOrderAtom = atom(
    get => {
        const gameState = get(selectGameStateAtom);
        return gameState.turnOrder;
    },
);

// Create an atom to switch the turn to the next player
export const nextTurnAtom = atom(
    null,
    (get, set) => {
        const gameState = get(selectGameStateAtom);
        const currentTurnPlayerIndex = gameState.turnOrder.indexOf(gameState.currentTurnPlayerId);

        // Get the next player in the turn order (cycle back to the first player if at the end)
        const nextPlayerIndex = (currentTurnPlayerIndex + 1) % gameState.turnOrder.length;
        const nextPlayerId = gameState.turnOrder[nextPlayerIndex];

        // Update the current turn player
        set(gameStateAtomBase, {
            ...gameState,
            currentTurnPlayerId: nextPlayerId,
            // Optional: You can reset the status here if needed
            status: "idle", // Reset status or set it to "battling" as needed
        });
    },
);

export const isMcTurn = atom(
    (get) => {
        const mcPlayerId = get(selectMcIdAtom);
        const currentTurnPlayerId = get(selectCurrentTurnPlayerIdAtom);
        // Check if the controlled player is the one whose turn it is
        return mcPlayerId === currentTurnPlayerId;
    },
);

// a cool idea might be basically if we want to know whether a battle will take place is if currentTurn player has
// selected one or more of currentTurnPlayerCard then one enemy car dyeah that makes sense

export const isBattleReady = atom(
    get => {
        const isMcSelectedAnyMcCards = get(isMcSelectedAnyMcCardsAtom);
        const isMcSelectedAnyEnemyCards = get(isMcSelectedAnyEnemyCardsAtom);
        return isMcSelectedAnyMcCards && isMcSelectedAnyEnemyCards;
    },
);
