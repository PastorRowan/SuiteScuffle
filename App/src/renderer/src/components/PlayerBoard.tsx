
import Field from "./Field";
import Hand from "./Hand";

export interface IPlayerBoardProps {
    className: string;
    playerId: string;
};

export default function PlayerBoard({
    className = "",
    playerId,
}: IPlayerBoardProps): JSX.Element {
    return (
        <div
            className={className}
        >
            <Field
                playerId={playerId}
            />
            <Hand
                playerId={playerId}
            />
        </div>
    );
};
