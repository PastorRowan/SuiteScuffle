
import { PlayerMdl } from "@models/PlayerMdl";

import Field from "./Field";

import Hand from "./Hand";

export interface IPlayerBoardProps {
    className: string;
    playerMdl: PlayerMdl;
};

export default function PlayerBoard({
    className = "",
    playerMdl,
}: IPlayerBoardProps): JSX.Element {

    return (
        <div
            className={className}
        >
            <Field
                cardMdls={playerMdl.getField()}
            />
            <Hand
                cardMdls={playerMdl.getHand()}
            />
        </div>
    );
};
