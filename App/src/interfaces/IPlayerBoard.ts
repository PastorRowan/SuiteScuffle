
import { CardMdl } from "@models/CardMdl";

export interface IPlayerBoard {
    className: string;
    hand: CardMdl[]; // Array of CardMdl objects for the player's hand
    field: CardMdl[]; // Array of CardMdl objects for the player's field
    isPlayersTurn: boolean,
    isControlledPlayer: boolean,
    playerId: string,
};
