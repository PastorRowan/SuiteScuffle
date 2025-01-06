
import { IPlayerBoard } from "@interfaces/IPlayerBoard";

import Field from "./Field";

import Hand from "./Hand";

export default function PlayerBoard({
    field = [],
    hand = [],
}: IPlayerBoard): JSX.Element {
    return (
        <div>
            <Field
                field={field}
            />
            <Hand
                hand={hand}
            />
        </div>
    );
};
