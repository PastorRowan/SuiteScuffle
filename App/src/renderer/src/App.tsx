
// Components
import GameBoard from "./components/GameBoard";
import { PlayerMdl } from "@models/PlayerMdl";

// Models
import { CardMdl } from "@models/CardMdl";

function App(): JSX.Element {

    // Sample players
    const players: PlayerMdl[] = [
        new PlayerMdl({
            id: "1",
            name: "Alice",
            hand: [
                new CardMdl({
                    id: "1",
                    rank: 4,
                    suite: "clubs",
                }),
                new CardMdl({
                    id: "2",
                    rank: 2,
                    suite: "spades",
                }),
                new CardMdl({
                    id: "3",
                    rank: 3,
                    suite: "hearts",
                }),
            ],
            field: [
                new CardMdl({
                    id: "4",
                    rank: 4,
                    suite: "diamonds",
                }),
                new CardMdl({
                    id: "5",
                    rank: 5,
                    suite: "clubs",
                }),
                new CardMdl({
                    id: "6",
                    rank: 6,
                    suite: "spades",
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
                }),
                new CardMdl({
                    id: "8",
                    rank: 8,
                    suite: "diamonds",
                }),
                new CardMdl({
                    id: "9",
                    rank: 9,
                    suite: "clubs",
                }),
            ],
            field: [
                new CardMdl({
                    id: "10",
                    rank: 10,
                    suite: "spades",
                }),
                new CardMdl({
                    id: "11",
                    rank: 11,
                    suite: "hearts",
                }),
                new CardMdl({
                    id: "12",
                    rank: 12,
                    suite: "spades",
                }),
                new CardMdl({
                    id: "13",
                    rank: 13,
                    suite: "diamonds",
                }),
                new CardMdl({
                    id: "14",
                    rank: 11,
                    suite: "spades",
                }),
                new CardMdl({
                    id: "13",
                    rank: 12,
                    suite: "hearts",
                }),
                new CardMdl({
                    id: "13",
                    rank: 13,
                    suite: "clubs",
                }),
            ],
        }),
    ];

    return (
        <div>
            <GameBoard
                id="1"
                players={players}
                currentTurn="Alice"
            />
        </div>
    );

}

export default App;
