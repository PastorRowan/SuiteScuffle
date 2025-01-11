
import { selectControlledPlayerSelectedCardsAtom } from "@renderer/state/game/atoms";
import { atom } from "jotai";

export const isCardSelectedAtom = atom(
    get => {
        const selectedCards = get(selectControlledPlayerSelectedCardsAtom);
        return (cardId: string) => selectedCards.some(card => card.getId() === cardId);
    },
);
