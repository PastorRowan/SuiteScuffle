
// Components
import GameBoard from "./components/GameBoard";

// state
import { useAtom } from 'jotai';
import { selectGameStateAtom, currentPlayerAtom } from "@renderer/state/game/atoms/index";

function App(): JSX.Element {

    // Accessing the state using Jotai's useAtom hook
    const [ gameState ] = useAtom(selectGameStateAtom);
    const [ currentPlayer ] = useAtom(currentPlayerAtom);

    return (
        <div>
            <GameBoard
                id="1"
                players={gameState.players}
                currentTurn={currentPlayer.id}
            />
        </div>
    );

};

/*
            <GameBoard
                id="1"
                players={gameState.players}
                currentTurn={currentPlayer.id}
            />
*/

export default App;
