
import { useState } from "react";

// Define props for the component
interface CardProps {
    id: string | undefined,
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker",
    suite: "clubs" | "spades" | "hearts" | "diamonds" | "joker",
    startFlipped?: boolean; // Whether the card is face-up
    isSelected?: boolean; // Optional: Whether the card is currently selected
    isFlippable?: boolean,
    isSelectable?: boolean,
};

// Functional Component in TypeScript
export default function Card({
    id,
    rank,
    suite,
    startFlipped = false,
    isFlippable = true,
    isSelected = false,
    isSelectable = true,
}: CardProps): JSX.Element {

    const [
        flipped,
        setFlipped,
    ] = useState(startFlipped); // State to manage the flip

    // Toggle flip when the card is clicked
    function handleClick(): void {
        if (isFlippable) {
            setFlipped((prev) => !prev);
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
            className="aspect-[37/54] w-[65px]" // w-[222px] h-[324px]
            onClick={handleClick}
        >
            {
                <img
                    className="h-full"
                    src={cardImageSrc}
                    alt={`Card ${rank} of ${suite}`}
                />
            }
        </div>
    );

};
