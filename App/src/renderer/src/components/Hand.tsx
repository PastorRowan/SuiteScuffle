
import ControlledCard from "./ControlledCard";
import EnemyCard from "./EnemyCard";
import { CardMdl } from "@models/CardMdl";

import { useAtom } from "jotai";
import {
    selectControlledPlayerAtom,
} from "@renderer/state/game/atoms/index";

interface Hand {
    cardMdls: CardMdl[],
};

export default function Hand({
    cardMdls = [],
}: Hand): JSX.Element {
    
    // const [ controlledPlayer ] = useAtom(selectControlledPlayerAtom);

    return (
        <div
            className="flex justify-center"
        >

            {cardMdls.map((cardMdl: CardMdl) => {

                const isControlledCard = true; // controlledPlayer?.isPlayerCard(cardMdl.getId());

                return (
                    isControlledCard ?
                    <ControlledCard
                        cardMdl={cardMdl}
                        key={cardMdl.getId()}
                    />
                    :
                    <ControlledCard
                        cardMdl={cardMdl}
                        key={cardMdl.getId()}
                    />
                );
            })}
        </div>
    );
};
