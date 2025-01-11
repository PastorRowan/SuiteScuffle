
import { useAtom } from "jotai";

import { nextTurnAtom } from "@renderer/state/game/atoms/index";

import CardDisplay from "./CardDisplay";

export default function Deck() {

    const [, nextTurn] = useAtom(nextTurnAtom); // Access the nextTurnAtom to change the turn

    return (
        <>
        <button
            className="bg-white"
            onClick={() => nextTurn()}
        >
            Next Turn
        </button>
        <CardDisplay
            id="deck"
            className="aspect-[37/54] w-[65px]"
            rank={1}
            suite="clubs"
            frontFacing={false}
        />
        </>
    );
};
