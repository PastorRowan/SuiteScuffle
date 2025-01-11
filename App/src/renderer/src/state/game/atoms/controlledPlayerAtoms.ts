
import { atom, useAtomValue } from "jotai";
import { PlayerMdl } from "@models/PlayerMdl";
import { CardMdl } from "@models/CardMdl";

import { samplePlayers } from "./samplePlayers";

import { selectGameStateAtom } from "./gameStateAtoms";

const controlledPlayerAtomBase = atom<PlayerMdl | null>(samplePlayers[0]);

// Selector atom for controlled player
export const selectControlledPlayerAtom = atom(
    (get) => get(controlledPlayerAtomBase),
);

// Create an atom to check if it's the controlled player's turn
export const isControlledPlayerTurnAtom = atom<boolean>(
    (get) => {
        const gameState = get(selectGameStateAtom);
        const controlledPlayer = get(selectControlledPlayerAtom);
        return controlledPlayer?.getId() === gameState.players[gameState.currentTurn].getId();
    },
);

// Allow selecting multiple controlled player cards
const controlledPlayerSelectedCardsAtomBase = atom<CardMdl[]>([]);

export const selectControlledPlayerSelectedCardsAtom = atom<CardMdl[]>(
    (get) => get(controlledPlayerSelectedCardsAtomBase),
);

export const hasControlledPlayerSelectedCardsAtom = atom<boolean>((get) => {
    const selectedCards = get(selectControlledPlayerSelectedCardsAtom);
    return selectedCards.length > 0;
});

export const isControlledCardSelectedAtom = atom(
    (get) => {
        const selectedCards = get(selectControlledPlayerSelectedCardsAtom);
        return (id: string) => selectedCards.some((card) => card.getId() === id);
    },
);

const controlledPlayerSelectedEnemyCardAtomBase = atom<CardMdl | null>(null);

export const selectControlledPlayerSelectedEnemyCardAtom = atom(
    (get) => get(controlledPlayerSelectedEnemyCardAtomBase),
);

export const hasControlledPlayerSelectedEnemyCardAtom = atom<boolean>(
    (get) => {
        const selectedEnemyCard = get(selectControlledPlayerSelectedEnemyCardAtom);
        return selectedEnemyCard instanceof CardMdl;
    },
);

// Atom to check if a specific card ID is selected
export const isControlledEnemyCardSelectedAtom = atom(
    (get) => {
        const selectedCard = get(selectControlledPlayerSelectedEnemyCardAtom);
        return (id: string) => selectedCard?.getId() === id;
    },
);

// Atom to toggle the selection of a specific card
export const toggleCardSelectionAtom = atom(

    null, // This is the convention for write-only atoms
    (get, set, cardMdl: CardMdl) => {
        // Retrieve the current state of selected cards

        const id = cardMdl.getId();

        const selectedCards = get(selectControlledPlayerSelectedCardsAtom);

        // Retrieve the current state of selected enemy card
        const selectedEnemyCard = get(selectControlledPlayerSelectedEnemyCardAtom);

        // Check if the card is already selected
        const isControlledCardSelected = get(isControlledCardSelectedAtom);
        const isControlledEnemyCardSelected = get(isControlledEnemyCardSelectedAtom);

        console.log("isControlledCardSelected: ", isControlledCardSelected(id));
        console.log("isControlledCardSelected: ", isControlledEnemyCardSelected(id));
        console.log("selectedEnemyCard: ", selectedEnemyCard);

        if (isControlledCardSelected(id)) {
            // If it's already selected, deselect it
            set(
                controlledPlayerSelectedCardsAtomBase,
                selectedCards.filter((selectedCard) => selectedCard.getId() !== id)
            );
        } else if (isControlledEnemyCardSelected(id)) {
            // If it's an enemy card, deselect it
            set(controlledPlayerSelectedEnemyCardAtomBase, null);
        } else {
            console.warn("Cannot find card");
        };

    },

);
