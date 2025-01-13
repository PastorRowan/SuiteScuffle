
import { isMcAtom, selectPlayerFieldCardMdlsAtom } from "@state/game/atoms";
import InteractableCard from "./ControlledCard";
import UninteractableCard from "./EnemyCard";
import { CardMdl } from "@models/CardMdl";
import { useAtom } from "jotai";

interface IField {
    playerId: string,
};

export default function Field({
    playerId,
}: IField): JSX.Element {

    const [ selectPlayerFieldCardMdls ] = useAtom(selectPlayerFieldCardMdlsAtom);

    const cardMdls = selectPlayerFieldCardMdls(playerId);

    return (

        <div
            className="flex justify-center"
        >
            {cardMdls?.map((cardMdl: CardMdl) =>
                <InteractableCard
                    cardMdl={cardMdl}
                    key={cardMdl.getId()}
                />
            )}
        </div>

    );

};
