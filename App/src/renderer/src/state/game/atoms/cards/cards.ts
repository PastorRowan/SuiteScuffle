
import { atom } from "jotai";

// import { atomEffect } from "jotai-effect";
import { CardMdl } from "@models/CardMdl";
import { sampleCards } from "@state/game/atoms/sampleCards";
import { selectCurrentTurnPlayerAtom } from "../players";

const cardsAtomBase = atom<Record<string, CardMdl>>(sampleCards);

export const selectCardsMapAtom = atom(
    get => {
        const cards = get(cardsAtomBase);
        return cards;
    },
);

export const selectCardMdlAtom = atom(
    get => {
        const cards = get(selectCardsMapAtom);
        return (cardId: string) => {
            return cards[cardId];
        };
    },
);

export const isCurrentTurnPlayerCardAtom = atom(
    get => {
        const selectCurrentTurnPlayer = get(selectCurrentTurnPlayerAtom);
        return (cardId: string) => {
            return selectCurrentTurnPlayer?.isPlayerCard(cardId);
        };
    },
);

export const toggleCardSelectionAtom = atom(
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
