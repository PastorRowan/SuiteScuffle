
import InteractableCard from "./ControlledCard";
import UninteractableCard from "./EnemyCard";
import { CardMdl } from "@models/CardMdl";
import { useAtom } from "jotai";
import {
    selectPlayerHandCardMdlsAtom,
    isMcAtom,
} from "@state/game/atoms/index";

interface Hand {
    playerId: string,
};

export default function Hand({
    playerId,
}: Hand): JSX.Element {

    const [ selectPlayerFieldCardMdls ] = useAtom(selectPlayerHandCardMdlsAtom);

    const cardMdls = selectPlayerFieldCardMdls(playerId);

    const [ isMcFunc ] = useAtom(isMcAtom);

    const isMc = isMcFunc(playerId);

    return (
        <div
            className="flex justify-center"
        >
            {cardMdls?.map((cardMdl: CardMdl, i: number) =>
                isMc ? (
                    <InteractableCard
                        cardMdl={cardMdl}
                        key={cardMdl.getId()}
                    />
                ) : (
                    <UninteractableCard
                        key={`${i}`}
                    />
                )
            )}
        </div>
    );
};
