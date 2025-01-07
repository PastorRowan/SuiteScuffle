
// Components
import GameBoard from "./components/GameBoard";

// state
import { useAtom } from 'jotai';
import { gameStateAtom, currentPlayerAtom, controlledPlayerAtom, nextTurnAtom } from "@state/atoms/atoms";

function App(): JSX.Element {

    // Accessing the state using Jotai's useAtom hook
    const [gameState] = useAtom(gameStateAtom);
    const [currentPlayer] = useAtom(currentPlayerAtom);

    return (
        <div>
            <GameBoard
                id="1"
                players={gameState.players}
                currentTurn={currentPlayer.id}
            />
        </div>
    );

}

export default App;
