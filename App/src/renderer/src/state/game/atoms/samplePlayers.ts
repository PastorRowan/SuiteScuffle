
import { PlayerMdl } from "@models/PlayerMdl";

// Sample players
export const samplePlayers: Record<string, PlayerMdl> = {
    "1": new PlayerMdl({
        id: "1",
        name: "Alice",
        hand: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
        ],
        field: [

        ],
    }),
    "2": new PlayerMdl({
        id: "2",
        name: "Bob",
        hand: [
            "7",
            "8",
            "9",
        ],
        field: [
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
        ],
    }),
};
