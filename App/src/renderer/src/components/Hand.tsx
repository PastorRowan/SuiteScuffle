
import { IHand } from "@interfaces/IHand";

import Card from "./Card";

export default function Hand({
    cardMdls = [],
}: IHand): JSX.Element {
    return (
        <div>
            {cardMdls.map((cardMdl) => {
                <Card
                    id={cardMdl.getId()}
                    rank={cardMdl.getRank()}
                    suite={cardMdl.getSuite()}
                    key={cardMdl.getId()}
                />
            })}
        </div>
    );
};
