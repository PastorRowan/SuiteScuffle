
import { IPlayerBoard } from "@interfaces/IPlayerBoard";

import Field from "./Field";

import Hand from "./Hand";

export default function PlayerBoard({
    className = "",
    field = [],
    hand = [],
}: IPlayerBoard): JSX.Element {
    return (
        <div
            className={className}
        >
            <Field
                cardMdls={field}
            />
            <Hand
                cardMdls={hand}
            />
        </div>
    );
};
