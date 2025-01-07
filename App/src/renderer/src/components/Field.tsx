
import Card from "./Card";
import { CardMdl } from "@models/CardMdl";

interface IField {
    cardMdls: CardMdl[];
};

export default function Field({
    cardMdls = [],
}: IField): JSX.Element {
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
