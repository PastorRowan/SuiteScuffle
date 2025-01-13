
import { CardMdl } from "@models/CardMdl";

import CardDisplay from "./CardDisplay";

import { useAtom } from "jotai";

import { useState } from "react";
import {
    handleMcClickCardAtom,
} from "@state/events/atoms/index";
import {
    isCardHighlightedAtom,
    isCardRaisedAtom,
} from "@state/display/atoms/index";

// Define props for the component
interface CardProps {
    cardMdl: CardMdl,
    startFlipped?: boolean; // Whether the card is face-up
    isFlippable?: boolean,
    isSelectable?: boolean,
};

// Functional Component in TypeScript
export default function InteractableCard({
    cardMdl,
    startFlipped = false,
    isFlippable = true,
    isSelectable = true,
}: CardProps): JSX.Element {

    const [ flipped ] = useState(startFlipped); // State to manage the flip
    const [ isMcHovered, setIsMcHovered ] = useState(false); // State to manage hover effect
    const [ _ , handleMcClickCard ] = useAtom(handleMcClickCardAtom);
    const [ isCardHighlightedFunc ] = useAtom(isCardHighlightedAtom);
    const [ isCardRaised ] = useAtom(isCardRaisedAtom);

    const {
        id,
        rank,
        suite,
        playerId,
    } = cardMdl.getProps();

    // Toggle flip when the card is clicked
    function handleClick(id: string): void {
        handleMcClickCard(id);
    };

    return (
        <button
            {...(id ? { id } : {})} // Conditionally add 'id' only if it's defined
            className={`aspect-[37/54] w-[65px] duration-300 ${
                (isMcHovered || isCardRaised(id)) ? "transform translate-y-[-10px]" : "transform translate-y-0"
            } ${
                isCardHighlightedFunc(id) ? "outline outline-red-500" : ""
            }`} // Hover effect: move card up slightly
            onClick={() => handleClick(id)}
            onMouseEnter={() => setIsMcHovered(true)} // Set hover state when mouse enters
            onMouseLeave={() => setIsMcHovered(false)} // Reset hover state when mouse leaves
        >
            <CardDisplay
                rank={rank}
                suite={suite}
                frontFacing={!flipped}
            />
        </button>
    );

};
