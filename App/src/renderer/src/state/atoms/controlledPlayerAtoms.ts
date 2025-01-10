
import { atom } from "jotai";

import { PlayerMdl } from "@models/PlayerMdl";
import { CardMdl } from "@models/CardMdl";

import { samplePlayers } from "./samplePlayers";

import { gameStateAtom } from "./gameStateAtoms";

export const controlledPlayerAtomBase = atom<PlayerMdl | null>(samplePlayers[0]);

export const controlledPlayerAtom = atom<PlayerMdl | null>(samplePlayers[0]);

// Create an atom to check if it's the controlled player's turn
export const isControlledPlayerTurnAtom = atom<boolean>(
    (get) => {
        const gameState = get(gameStateAtom);
        const controlledPlayer = get(controlledPlayerAtom);
        return controlledPlayer?.getId() === gameState.players[gameState.currentTurn].getId();
    }
);

// Allow selecting multiple controlled player cards
const controlledPlayerSelectedCardsAtom = atom<CardMdl[]>([]);

export const controlledPlayerSelectedEnemyCardAtom = atom<CardMdl | null>(null);

export const hasControlledPlayerSelectedCardsAtom = atom<boolean>((get) => {
    const selectedCards = get(controlledPlayerSelectedCardsAtom);
    return selectedCards.length > 0;
});

export const hasControlledPlayerSelectedEnemyCardAtom = atom<boolean>((get) => {
    const selectedEnemyCard = get(controlledPlayerSelectedEnemyCardAtom);
    return selectedEnemyCard instanceof CardMdl;
});
