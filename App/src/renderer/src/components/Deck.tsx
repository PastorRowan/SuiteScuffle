
// import { IDeck } from "@interfaces/IDeck";
import Card from "./Card";

export default function Deck() {
    return (
        <Card
            id="deck"
            rank={1}
            suite="clubs"
            startFlipped={true}
            isFlippable={false}
        />
    );
};
