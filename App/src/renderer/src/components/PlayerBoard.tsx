
import { IPlayerBoard } from "@interfaces/IPlayerBoard";

import Field from "./Field";

import Hand from "./Hand";

export default function PlayerBoard({
    className = "",
    playerId = "",
    field = [],
    hand = [],
    isControlledPlayer = false,
    isPlayersTurn = false,
}: IPlayerBoard): JSX.Element {

    console.log("isControlledPlayer: ", isPlayersTurn);

    console.log("playerId: ", playerId);

    return (
        <div
            className={className}
        >
            <Field
                cardMdls={field}
                isPlayersTurn={isPlayersTurn}
                isControlledPlayer={isControlledPlayer}
            />
            <Hand
                cardMdls={hand}
                isPlayersTurn={isPlayersTurn}
                isControlledPlayer={isControlledPlayer}
            />
        </div>
    );
};
