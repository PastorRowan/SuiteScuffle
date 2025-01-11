
import { CardMdl } from "@models/CardMdl";

import CardDisplay from "./CardDisplay";

import { useAtom } from "jotai";

import { useState } from "react";
import {
    isControlledCardSelectedAtom,
    toggleCardSelectionAtom,
} from "@renderer/state/game/atoms/index";

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

    const [ flipped ] = useState(startFlipped); // State to manage the flip
    const [ isHovered, setIsHovered ] = useState(false); // State to manage hover effect
    const [ isControlledCardSelected ] = useAtom(isControlledCardSelectedAtom);
    const [ _ , toggleCardSelection ] = useAtom(toggleCardSelectionAtom);
    const isSelected = isControlledCardSelected(cardMdl.getId());

    console.log("isSelected: ", isSelected);
    // const toggleCardSelection = () => {};

    const {
        id,
        rank,
        suite,
        playerId,
    } = cardMdl.getProps();

    // Toggle flip when the card is clicked
    function handleClick(cardMdl: CardMdl): void {
        toggleCardSelection(cardMdl);
    };

    return (
        <button
            {...(id ? { id } : {})} // Conditionally add 'id' only if it's defined
            className={`aspect-[37/54] w-[65px] duration-300 ${
                isHovered ? "transform translate-y-[-10px]" : "transform translate-y-0"
            } ${
                isSelected ? "outline outline-red-500" : ""
            }`} // Hover effect: move card up slightly
            onClick={() => handleClick(cardMdl)}
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
