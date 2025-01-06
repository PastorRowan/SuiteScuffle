
import { IDeck } from "@interfaces/IDeck";

export default function Deck({
    cards: [],
}): IDeck {
    return (
        <div
            id="deck" 
            className=""
        >
            <img
                src="/src/assets/cards/back.svg"
            />
        </div>
    );
};
