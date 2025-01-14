
import { atom } from "jotai";
import { selectCurrentTurnPlayerHandAtom } from "@state/game/atoms";

const currentTurnPlayerSelectedOwnFieldCardsIdsAtomBase = atom<string[]>([]);

export const selectCurrentTurnPlayerSelectedOwnFieldCardsIdsAtom = atom(
    get => {
        const currentTurnPlayerSelectedOwnFieldCardsIds = get(currentTurnPlayerSelectedOwnFieldCardsIdsAtomBase);
        return currentTurnPlayerSelectedOwnFieldCardsIds;
    },
);

export const hasCurrentTurnPlayerSelectedAnyOwnFieldCardsAtom = atom(
    get => {
        const currentTurnPlayerSelectedOwnFieldCardsIds = get(selectCurrentTurnPlayerSelectedOwnFieldCardsIdsAtom);
        const hasCurrentTurnPlayerSelectedAnyOwnFieldCards = currentTurnPlayerSelectedOwnFieldCardsIds.length > 0;
        return hasCurrentTurnPlayerSelectedAnyOwnFieldCards;
    },
);

export const addCurrentTurnPlayerSelectedOwnFieldCardIdAtom = atom(
    null,
    (get, set, cardId: string) => {
        const currentTurnPlayerHand = get(selectCurrentTurnPlayerHandAtom);
        
    },
);
