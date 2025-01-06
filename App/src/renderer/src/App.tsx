
// Components
import GameBoard from "./components/GameBoard";
import { Player } from "@models/Player";

function App(): JSX.Element {

    // Sample players
    const players: Player[] = [
        new Player("1", "Alice"),
        new Player("2", "Bob"),
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
