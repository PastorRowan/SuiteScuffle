
import { atom } from "jotai";

// import { atomEffect } from "jotai-effect";

import { selectMc } from "./gameStateAtoms";
import { selectEnemiesAtom } from "./players";
import { CardMdl } from "@models/CardMdl";
import { sampleCards } from "./sampleCards";

const cardsAtomBase = atom<Record<string, CardMdl>>(sampleCards);

export const selectCardsAtom = atom(
    get => {
        const cards = get(cardsAtomBase);
        return cards;
    },
);

export const selectCardAtom = atom(
    get => {
        const cards = get(cardsAtomBase);
        return (cardId: string) => {
            return cards[cardId];
        };
    },
);

// Define the atom with explicit types
const selectedCardsAtomBase = atom<{
    mc: string[];    // Array of player-selected card IDs (strings)
    enemy: string[]; // Array of enemy-selected card IDs (strings)
}>({
    mc: [],
    enemy: [],
});

export const selectSelectedCardsMapAtom = atom(
    get => {
        const selectedCardsMap = get(selectedCardsAtomBase);
        return selectedCardsMap;
    },
);

export const selectSelectedCardsIdsAtom = atom<string[]>(
    get => {
        const selectedCardsMap = get(selectSelectedCardsMapAtom);
        // Combine all arrays from keys dynamically
        const allSelectedCards = Object.keys(selectedCardsMap).flatMap(
            (key) => selectedCardsMap[key],
        );
        return allSelectedCards;
    },
);

export const selectMcSelectedCardsIdsAtom = atom(
    get => {
        const selectedCardsMap = get(selectSelectedCardsMapAtom);
        return selectedCardsMap.mc;
    },
);

export const selectEnemySelectedCardsAtom = atom(
    get => {
        const selectedCardsMap = get(selectSelectedCardsMapAtom);
        return selectedCardsMap.enemy;
    },
);

export const isCardSelectedAtom = atom(
    get => {
        const selectSelectedCardsIds = get(selectSelectedCardsIdsAtom);
        return (cardId: string) => selectSelectedCardsIds.some(
            (selectedCardId) => {
                return selectedCardId === cardId;
            },
        );
    },
);

export const cardOwnershipAtom = atom(

    (get) => {

        const mc = get(selectMc);

        const enemies = get(selectEnemiesAtom);

        return (cardId: string): "mc" | "enemy" | "unknown" => {

            if (!mc) {
                console.warn("No main character (MC) in state, returning 'unknown'");
                return "unknown";
            };

            const isPlayerCard = mc.isPlayerCard(cardId);

            if (isPlayerCard) {
                return "mc";
            };

            const isEnemyCard = Object.values(enemies).some(
                enemy => enemy.isPlayerCard(cardId),
            );

            if (isEnemyCard) {
                return "enemy";
            };

            console.error(`Card with ID "${cardId}" does not belong to MC or any enemy, returning 'unknown'`);

            return "unknown";

        };

    },

);

export const isMcCardAtom = atom(
    get => {
        const mc = get(selectMc);
        return (id: string) => mc?.isPlayerCard(id);
    },
);

export const isEnemyCardAtom = atom(
    get => {
        const mc = get(selectMc);
        return (id: string) => {
            const isPlayerCard = mc?.isPlayerCard(id);
            if (isPlayerCard === null) {
                console.warn("There is no mc in state, returning null");
                return null;
            };
            return !isPlayerCard;
        };
    },
);

export const isMcSelectedAnyCardsAtom = atom(
    get => {
        const mcSelectedCards = get(selectMcSelectedCardsIdsAtom);
        const isMcSelectedAnyCards = mcSelectedCards.length > 0;
        return isMcSelectedAnyCards;
    },
);

export const isMcSelectedAnyMcCardsAtom = atom(
    get => {
        const mcSelectedCards = get(selectMcSelectedCardsIdsAtom);
        const isMcCard = get(isMcCardAtom);
        const isMcSelectedAnyMcCards = mcSelectedCards.some(
            (cardId: string) => isMcCard(cardId)
        );
        return isMcSelectedAnyMcCards;
    },
);

export const isMcSelectedAnyEnemyCardsAtom = atom(
    get => {
        const mcSelectedCards = get(selectMcSelectedCardsIdsAtom);
        const isEnemyCard = get(isEnemyCardAtom);
        const isMcSelectedAnyEnemyCards = mcSelectedCards.some(
            (cardId: string) => isEnemyCard(cardId)
        );
        return isMcSelectedAnyEnemyCards;
    },
);

export const selectCardMdlsViaIdsAtom = atom(
    get => {
        const selectCard = get(selectCardAtom);
        return (cardIds: string[]) => {
            return cardIds.map(
                (cardId: string) => {
                    return selectCard(cardId);
                },
            );
        };
    },
);

export const toggleMcCardSelectionAtom = atom(
    null,
    (get, set, cardId: string) => {
        const selectedCardsMap = get(selectSelectedCardsMapAtom);

        // Check if the card is already selected
        const isCardAlreadySelected = selectedCardsMap.mc.includes(cardId);

        if (isCardAlreadySelected) {
            // If it's already selected, remove it from the selection
            set(selectedCardsAtomBase, {
                ...selectedCardsMap,
                mc: selectedCardsMap.mc.filter((id) => id !== cardId),
            });
        } else {
            // If it's not selected, add it to the selection
            set(selectedCardsAtomBase, {
                ...selectedCardsMap,
                mc: [...selectedCardsMap.mc, cardId],
            });
        }
    }
);

