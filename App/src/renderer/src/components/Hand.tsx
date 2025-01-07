
import { CardMdl } from "@models/CardMdl";

import Card from "./Card";

interface Hand {
    cardMdls: CardMdl[],
    isPlayersTurn: boolean,
    isControlledPlayer: boolean,
};

export default function Hand({
    cardMdls = [],
    isPlayersTurn = false,
    isControlledPlayer = false,
}: Hand): JSX.Element {
    return (
        <div
            className="flex justify-center"
        >
            {cardMdls.map((cardMdl: CardMdl) => {
                return (
                    <Card
                        id={cardMdl.getId()}
                        cardMdl={cardMdl}
                        rank={cardMdl.getRank()}
                        suite={cardMdl.getSuite()}
                        isControlledPlayersTurn={isPlayersTurn && isControlledPlayer}
                        key={cardMdl.getId()}
                    />
                );
            })}
        </div>
    );
};
