
import { IField } from "@interfaces/IField";
import Card from "./Card";
import React from "react";

export default function Field({
    cardMdls,
}: IField): JSX.Element {
    return (
        <div>
            {cardMdls.map((cardMdl) => (
                <Card
                    id={cardMdl.getId()}
                    rank={cardMdl.getRank()}
                    suite={cardMdl.getSuite()}
                    key={cardMdl.getId()}
                />
            ))}
        </div>
    );
};
