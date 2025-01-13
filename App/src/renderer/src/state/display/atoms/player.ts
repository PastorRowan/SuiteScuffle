
import { atom } from "jotai";
import {
    selectMcIdAtom,
    selectTurnOrderAtom,
} from "@state/game/atoms";

export const playerBoardOrderDisplayAtom = atom(
    get => {
        const mcId = get(selectMcIdAtom);
        const turnOrder = get(selectTurnOrderAtom);

        // Filter out mcId from the turn order and prepend it
        const orderedTurn = [mcId, ...turnOrder.filter(id => id !== mcId)];

        return orderedTurn;
    },
);
