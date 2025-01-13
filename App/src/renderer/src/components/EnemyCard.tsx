
import CardDisplay from "./CardDisplay";

// Functional Component in TypeScript
export default function UninteractableCard(): JSX.Element {

    return (
        <div
            className=
                {`aspect-[37/54] w-[65px] duration-300 ${
                    ""// isHovered ? "transform translate-y-[-10px]" : "transform translate-y-0"
                }
            `}
        >
            <CardDisplay
                frontFacing={false}
            />
        </div>
    );

};
