
import { CardMdl } from "@models/CardMdl";
import { atom, WritableAtom } from "jotai";
import {
    isControlledPlayerTurnAtom,
    controlledPlayerSelectedCardsAtom,
    controlledPlayerAtom,
} from "@state/atoms/atoms";

export function selectControlledCard(
    cardMdl: CardMdl,
    selectedCardsAtom: WritableAtom<CardMdl[], (prev: CardMdl[]) => CardMdl[]>,
    isControlledPlayerTurnAtom: WritableAtom<boolean, boolean>,
    controlledPlayerAtom: WritableAtom<any, any>
) {
    return (currentSelection: CardMdl[]): CardMdl[] => {
        const isControlledPlayerTurn = useAtomValue(isControlledPlayerTurnAtom);
        const controlledPlayer = useAtomValue(controlledPlayerAtom);

        if (!isControlledPlayerTurn || !controlledPlayer?.isPlayerCard(cardMdl.getId())) {
            return currentSelection; // Return unchanged selection if invalid
        }

        const isSelected = currentSelection.some((card) => card.getId() === cardMdl.getId());

        return isSelected
            ? currentSelection.filter((card) => card.getId() !== cardMdl.getId()) // Deselect card
            : [...currentSelection, cardMdl]; // Add card to selection
    };
}
