
import { atom } from "jotai";

const currentTurnPlayerSelectedEnemyFieldCardsIdsAtomBase = atom<string[]>([]);

export const selectCurrentTurnPlayerSelectedEnemyFieldCardsIdsAtom = atom(
    get => {
        const currentTurnPlayerSelectedEnemyFieldCardsIds = get(currentTurnPlayerSelectedEnemyFieldCardsIdsAtomBase);
        return currentTurnPlayerSelectedEnemyFieldCardsIds;
    },
);

export const hasCurrentTurnPlayerSelectedAnyEnemyFieldCardsAtom = atom(
    get => {
        const currentTurnPlayerSelectedEnemyFieldCardsIds = get(selectCurrentTurnPlayerSelectedEnemyFieldCardsIdsAtom);
        const hasCurrentTurnPlayerSelectedAnyEnemyFieldCards = currentTurnPlayerSelectedEnemyFieldCardsIds.length > 0;
        return hasCurrentTurnPlayerSelectedAnyEnemyFieldCards;
    },
);

export const addCurrentTurnPlayerSelectedEnemyFieldCardIdAtom = atom(
    null,
    () => {
        
    },
);
