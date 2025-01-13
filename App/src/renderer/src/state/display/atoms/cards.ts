
import {
    selectMcSelectedCardsAtom,
    selectCardsAtom,
    selectMcHand,
    isCardSelectedAtom,
} from "@state/game/atoms";

import { atom } from "jotai";

import { CardMdl } from "@models/CardMdl";

// Highlighted state: whether a card is highlighted (e.g., for hover effect)
export const isCardHighlightedAtom = atom(
    get => {
        const selectMcSelectedCards = get(selectMcSelectedCardsAtom);
        return (cardId: string) => selectMcSelectedCards.some((id) => id === cardId);
    },
);

export const isCardRaisedAtom = atom(
    get => {
        const isCardSelected = get(isCardSelectedAtom);
        return (cardId: string) => isCardSelected(cardId);
    },
);

// Display State: MC's Hand (as an array of CardMdl objects with display properties)
export const mcHandDisplayAtom = atom(
    get => {
        const mcHand = get(selectMcHand);
        const cardsMap = get(selectCardsAtom);
        const mcHandCardMdls = mcHand?.map((cardId: string) => {
            return cardsMap[cardId];
        });
        return mcHandCardMdls;
    },
);

// Display State: MC's Field (as an array of CardMdl objects with display properties)
const mcFieldDisplayAtomBase = atom<CardMdl[]>([]);

// Display State: MC's Hand (as an array of CardMdl objects with display properties)
/*
export const playerHandDisplayAtom = atom(
    get => {
        const selectPlayerHand = get(selectPlayerHandAtom);
        return (cardId: string) => {
            const playerHand = selectPlayerHand(cardId);
            const cardsMap = get(selectCardsAtom);
            const handCardMdls = playerHand?.map(
                (cardId: string) => {
                    return cardsMap[cardId];
                },
            );
            return handCardMdls;
        };
    },
);
*/
