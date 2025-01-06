
import { useState } from "react";

// Define props for the component
interface CardProps {
    id: string; // Unique identifier for the card
    rank: string; // The rank of the card (e.g., "2", "King", "Ace")
    suit: string; // The suit of the card (e.g., "Hearts", "Spades")
    startFlipped: boolean; // Whether the card is face-up
    isSelected?: boolean; // Optional: Whether the card is currently selected
  } 

// Functional Component in TypeScript
function Card({
    id,
    rank,
    suit,
    startFlipped, 
    isSelected,
}: CardProps): JSX.Element {

    const [
        flipped,
        setFlipped,
    ] = useState(startFlipped); // State to manage the flip

    // Toggle flip when the card is clicked
    function handleClick(): void {
        setFlipped((prev) => !prev);
    };

    return (
        <div
            className=""
            onClick={handleClick}
        >
            <div className="aspect-[37/54] w-[222px] h-[324px]">
                {
                    flipped ? (
                            <img
                                src="/src/assets/cards/2_of_clubs.svg"
                            />
                    ) : (
                            <img
                                src="/src/assets/cards/back.svg"
                            />
                    )
                }
            </div>
        </div>
    );

};

export default Card;
