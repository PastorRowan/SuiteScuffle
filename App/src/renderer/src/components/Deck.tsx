
// import { IDeck } from "@interfaces/IDeck";
import Card from "./Card";
import { useAtom } from "jotai";
import { nextTurnAtom } from "@state/atoms/atoms";

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
        <Card
            id="deck"
            cardMdl={null}
            rank={1}
            suite="clubs"
            startFlipped={true}
            isFlippable={false}
        />
        </>
    );
};
