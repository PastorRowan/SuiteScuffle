
import { CardMdl } from "@models/CardMdl";

import Card from "./Card";

interface Hand {
    cardMdls: CardMdl[],
};

export default function Hand({
    cardMdls = [],
}: Hand): JSX.Element {
    return (
        <div
            className="flex justify-center"
        >
            {cardMdls.map((cardMdl: CardMdl) => {
                return (
                    <Card
                        id={cardMdl.getId()}
                        rank={cardMdl.getRank()}
                        suite={cardMdl.getSuite()}
                        key={cardMdl.getId()}
                    />
                );
            })}
        </div>
    );
};
