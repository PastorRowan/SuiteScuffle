
import Card from "./Card";
import { CardMdl } from "@models/CardMdl";

interface IField {
    cardMdls: CardMdl[];
    isPlayersTurn: boolean,
    isControlledPlayer: boolean,
};

export default function Field({
    cardMdls = [],
    isPlayersTurn = false,
    isControlledPlayer = false,
}: IField): JSX.Element {
    return (
        <>
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
            {isPlayersTurn ? <h1>this players turn</h1> : <h1>not this players turn</h1>}
        </div>
        </>

    );

};
