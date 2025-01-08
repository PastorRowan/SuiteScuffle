
import { CardMdl } from "@models/CardMdl";

import CardDisplay from "./CardDisplay";

import { useState } from "react";
import { useAtom } from "jotai";
import {
    isControlledPlayerTurnAtom,
    controlledPlayerSelectedCardsAtom,
    currentPlayerFieldAtom,
    currentPlayerHandAtom,
    controlledPlayerAtom,
} from "@state/atoms/atoms";

// Define props for the component
interface CardProps {
    cardMdl: CardMdl,
    startFlipped?: boolean; // Whether the card is face-up
    isFlippable?: boolean,
    isSelectable?: boolean,
};

// Functional Component in TypeScript
export default function ControlledCard({
    cardMdl,
    startFlipped = false,
    isFlippable = true,
    isSelectable = true,
}: CardProps): JSX.Element {

    const [ flipped, setFlipped ] = useState(startFlipped); // State to manage the flip
    const [ isHovered, setIsHovered ] = useState(false); // State to manage hover effect
    const [ isControlledPlayerTurn ] = useAtom(isControlledPlayerTurnAtom);
    const [ controlledPlayerSelectedCards, setControlledPlayerSelectedCards ] = useAtom(controlledPlayerSelectedCardsAtom);
    const [ controlledPlayer ] = useAtom(controlledPlayerAtom);
    // const [ currentPlayerField, setCurrentPlayerField ] = useAtom(currentPlayerFieldAtom);
    // const [ currentPlayerHand, setCurrentPlayerHand ] = useAtom(currentPlayerHandAtom);

    const {
        id,
        rank,
        suite,
        playerId,
    } = cardMdl.getProps();

    const isSelected = controlledPlayerSelectedCards.some((card: CardMdl) => card.getId() === id);

    // Toggle flip when the card is clicked
    function handleClick(): void {

        if (!isControlledPlayerTurn || !controlledPlayer?.isPlayerCard(id)) {
            return;
        };
    
        setControlledPlayerSelectedCards((prevSelectedCards) => {
            if (isSelected) {
                // Remove the card from the selection
                return prevSelectedCards.filter((card) => card.getId() !== id);
            } else {
                // Add the card to the selection
                return [...prevSelectedCards, cardMdl];
            };
        });
    };
    

    // Decide which image source based on rank and suite
    let cardImageSrc = `/src/assets/cards/back.svg`; // Default to back image
    if (flipped) {

    } else if (rank === "joker" && suite === "joker") {
        cardImageSrc = `/src/assets/cards/joker.svg`;
    } else if ((typeof rank === "number") && (1 <= rank && rank <= 13)) {
        cardImageSrc = `/src/assets/cards/${rank}_of_${suite}.svg`;
    } else {
        throw new Error(`suite and rank invalid: suite: ${suite} typeof: ${typeof suite} rank: ${rank} typeof: ${typeof rank}`);
    };

    return (
        <button
            {...(id ? { id } : {})} // Conditionally add 'id' only if it's defined
            className={`aspect-[37/54] w-[65px] duration-300 ${
                isHovered ? "transform translate-y-[-10px]" : "transform translate-y-0"
            } ${
                isSelected ? "outline outline-red-500" : ""
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
