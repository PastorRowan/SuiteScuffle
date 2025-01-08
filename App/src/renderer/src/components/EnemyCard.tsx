
import { CardMdl } from "@models/CardMdl";

import CardDisplay from "./CardDisplay";

import { useState } from "react";
import { useAtom } from "jotai";
import {
    isControlledPlayerTurnAtom,
    controlledPlayerSelectedEnemyCardAtom,
    hasControlledPlayerSelectedCardsAtom,
    currentPlayerFieldAtom,
    currentPlayerHandAtom,
    controlledPlayerAtom,
} from "@state/atoms/atoms";

// Define props for the component
interface CardProps {
    cardMdl: CardMdl,
    startFlipped?: boolean; // Whether the card is face-up
};

// Functional Component in TypeScript
export default function EnemyCard({
    cardMdl,
    startFlipped = false,
}: CardProps): JSX.Element {

    const [ flipped, setFlipped ] = useState(startFlipped); // State to manage the flip
    const [ isHovered, setIsHovered ] = useState(false); // State to manage hover effect
    const [ isControlledPlayerTurn ] = useAtom(isControlledPlayerTurnAtom);
    const [ controlledPlayerSelectedEnemyCard, setControlledPlayerSelectedEnemyCard ] = useAtom(controlledPlayerSelectedEnemyCardAtom);
    const [ controlledPlayer, setControlledPlayer ] = useAtom(controlledPlayerAtom);
    const [ hasControlledPlayerSelectedCards ] = useAtom(hasControlledPlayerSelectedCardsAtom);
    // const [ currentPlayerField, setCurrentPlayerField ] = useAtom(currentPlayerFieldAtom);
    // const [ currentPlayerHand, setCurrentPlayerHand ] = useAtom(currentPlayerHandAtom);

    const {
        id,
        rank,
        suite,
        playerId,
    } = cardMdl.getProps();

    // Toggle flip when the card is clicked
    function handleClick(): void {
        /*
        if (isFlippable && isControlledPlayerTurn) {
            setFlipped((prev) => !prev);
        };
        */
        if (!isControlledPlayerTurn || controlledPlayer?.isPlayerCard(id) || !hasControlledPlayerSelectedCards) { // id cannot be null
            return;
        };

        // If this card is not the currently selected card, update the selection
        if (controlledPlayerSelectedEnemyCard?.getId() !== id) {
            // Set this card as the new selected card
            setControlledPlayerSelectedEnemyCard(cardMdl);
        } else {
            // Optionally, you can unselect the card if it's clicked again
            setControlledPlayerSelectedEnemyCard(null);
        };

    };

    return (
        <button
            {...(id ? { id } : {})} // Conditionally add 'id' only if it's defined
            className={`aspect-[37/54] w-[65px] duration-300 ${
                isHovered ? "transform translate-y-[-10px]" : "transform translate-y-0"
            } ${
                controlledPlayerSelectedEnemyCard?.getId() === id ? "outline outline-red-500" : ""
            }`} // Hover effect: move card up slightly
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)} // Set hover state when mouse enters
            onMouseLeave={() => setIsHovered(false)} // Reset hover state when mouse leaves
        >
            <CardDisplay
                rank={rank}
                suite={suite}
                frontFacing={!flipped}
            />
        </button>
    );

};
