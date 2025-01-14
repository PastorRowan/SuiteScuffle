
import { atom } from "jotai";

const currentTurnPlayerSelectedHandCardsIdsAtomBase = atom<string[]>([]);

export const selectCurrentTurnPlayerSelectedHandCardsIdsAtom = atom(
    get => {
        const currentTurnPlayerSelectedHandCardsIds = get(currentTurnPlayerSelectedHandCardsIdsAtomBase);
        return currentTurnPlayerSelectedHandCardsIds;
    },
);

export const hasCurrentTurnPlayerSelectedAnyHandCardsAtom = atom(
    get => {
        const currentTurnPlayerSelectedHandCardsIds = get(currentTurnPlayerSelectedHandCardsIdsAtomBase);
        const hasCurrentTurnPlayerSelectedAnyHandCards = currentTurnPlayerSelectedHandCardsIds.length > 0;
        return hasCurrentTurnPlayerSelectedAnyHandCards;
    },
);

export const addCurrentTurnPlayerSelectedHandCardIdAtom = atom(
    null,
    () => {
        
    },
);
