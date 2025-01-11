
import { PlayerMdl } from "@models/PlayerMdl";

import Field from "./Field";

import Hand from "./Hand";

import ControlledCard from "./ControlledCard";

export interface IPlayerBoardProps {
    className: string;
    playerMdl: PlayerMdl;
};

export default function PlayerBoard({
    className = "",
    playerMdl,
}: IPlayerBoardProps): JSX.Element {

    const cardMdl = playerMdl.getField()[0];

    return (
        <div
            className={className}
        >
            <ControlledCard
                cardMdl={cardMdl}
            />
        </div>
    );
};

/*
            <Field
                cardMdls={playerMdl.getField()}
            />
            <Hand
                cardMdls={playerMdl.getHand()}
            />
*/
