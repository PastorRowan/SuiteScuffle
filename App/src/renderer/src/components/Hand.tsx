
import ControlledCard from "./ControlledCard";
import EnemyCard from "./EnemyCard";
import { CardMdl } from "@models/CardMdl";

import { useAtom } from "jotai";
import {
    controlledPlayerAtom,
} from "@state/atoms/atoms";

interface Hand {
    cardMdls: CardMdl[],
};

export default function Hand({
    cardMdls = [],
}: Hand): JSX.Element {
    
    const [ controlledPlayer ] = useAtom(controlledPlayerAtom);

    return (
        <div
            className="flex justify-center"
        >

            {cardMdls.map((cardMdl: CardMdl) => {

                const isControlledCard = controlledPlayer?.isPlayerCard(cardMdl.getId());

                return (
                    isControlledCard ?
                    <ControlledCard
                        cardMdl={cardMdl}
                        key={cardMdl.getId()}
                    />
                    :
                    <EnemyCard
                        cardMdl={cardMdl}
                        key={cardMdl.getId()}
                    />
                );
            })}
        </div>
    );
};
