
import { CardMdl } from "@models/CardMdl";

import { useState } from "react";
import { useAtom } from "jotai";
import { isControlledPlayerTurnAtom, controlledPlayerSelectedCardAtom  } from "@state/atoms/atoms";

// Define props for the component
interface CardProps {
    id: string | null,
    cardMdl: CardMdl | null,
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker",
    suite: "clubs" | "spades" | "hearts" | "diamonds" | "joker",
    startFlipped?: boolean; // Whether the card is face-up
    isSelected?: boolean; // Optional: Whether the card is currently selected
    isFlippable?: boolean,
    isSelectable?: boolean,
    isControlledPlayersTurn?: boolean,
};

// Functional Component in TypeScript
export default function Card({
    id,
    cardMdl,
    rank,
    suite,
    startFlipped = false,
    isFlippable = true,
    isSelected = false,
    isSelectable = true,
    isControlledPlayersTurn = false,
}: CardProps): JSX.Element {

    const [ flipped, setFlipped ] = useState(startFlipped); // State to manage the flip
    const [ isHovered, setIsHovered ] = useState(false); // State to manage hover effect
    const [ isControlledPlayerTurn ] = useAtom(isControlledPlayerTurnAtom);
    const [ controlledPlayerSelectedCard, setControlledPlayerSelectedCard ] = useAtom(controlledPlayerSelectedCardAtom);

    // Toggle flip when the card is clicked
    function handleClick(): void {
        /*
        if (isFlippable && isControlledPlayerTurn) {
            setFlipped((prev) => !prev);
        };
        */
        if (!isControlledPlayerTurn || isControlledPlayerCard || id === null) {
            return;
        };

        // If this card is not the currently selected card, update the selection
        if (controlledPlayerSelectedCard?.getId() !== id) {
            // Set this card as the new selected card
            setControlledPlayerSelectedCard(cardMdl);
        } else {
            // Optionally, you can unselect the card if it's clicked again
            setControlledPlayerSelectedCard(null);
        };

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
        <div
            {...(id ? { id } : {})} // Conditionally add 'id' only if it's defined
            className={`aspect-[37/54] w-[65px] duration-300 ${
                isHovered ? "transform translate-y-[-10px]" : "transform translate-y-0"
            } ${
                controlledPlayerSelectedCard?.getId() === id ? "outline outline-red-500" : ""
            }`} // Hover effect: move card up slightly
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)} // Set hover state when mouse enters
            onMouseLeave={() => setIsHovered(false)} // Reset hover state when mouse leaves
        >
            <img
                className="h-full"
                src={cardImageSrc}
                alt={`Card ${rank} of ${suite}`}
            />
        </div>
    );

};
