
import { PlayerMdl } from "@models/PlayerMdl";
import { CardMdl } from "@models/CardMdl";

// Sample players
export const samplePlayers: PlayerMdl[] = [
    new PlayerMdl({
        id: "1",
        name: "Alice",
        hand: [
            new CardMdl({
                id: "1",
                rank: 4,
                suite: "clubs",
                playerId: "1",
            }),
            new CardMdl({
                id: "2",
                rank: 2,
                suite: "spades",
                playerId: "1",
            }),
            new CardMdl({
                id: "3",
                rank: 3,
                suite: "hearts",
                playerId: "1",
            }),
        ],
        field: [
            new CardMdl({
                id: "4",
                rank: 4,
                suite: "diamonds",
                playerId: "1",
            }),
            new CardMdl({
                id: "5",
                rank: 5,
                suite: "clubs",
                playerId: "1",
            }),
            new CardMdl({
                id: "6",
                rank: 6,
                suite: "spades",
                playerId: "1",
            }),
        ],
    }),
    new PlayerMdl({
        id: "2",
        name: "Bob",
        hand: [
            new CardMdl({
                id: "7",
                rank: 7,
                suite: "hearts",
                playerId: "2",
            }),
            new CardMdl({
                id: "8",
                rank: 8,
                suite: "diamonds",
                playerId: "2",
            }),
            new CardMdl({
                id: "9",
                rank: 9,
                suite: "clubs",
                playerId: "2",
            }),
        ],
        field: [
            new CardMdl({
                id: "10",
                rank: 10,
                suite: "spades",
                playerId: "2",
            }),
            new CardMdl({
                id: "11",
                rank: 11,
                suite: "hearts",
                playerId: "2",
            }),
            new CardMdl({
                id: "12",
                rank: 12,
                suite: "spades",
                playerId: "2",
            }),
            new CardMdl({
                id: "13",
                rank: 13,
                suite: "diamonds",
                playerId: "2",
            }),
            new CardMdl({
                id: "14",
                rank: 11,
                suite: "spades",
                playerId: "2",
            }),
            new CardMdl({
                id: "15",
                rank: 12,
                suite: "hearts",
                playerId: "2",
            }),
            new CardMdl({
                id: "16",
                rank: 13,
                suite: "clubs",
                playerId: "2",
            }),
        ],
    }),
];
