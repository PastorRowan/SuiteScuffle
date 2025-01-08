
// import { Player } from "@renderer/models/Player";
import GameInfo from "./GameInfo";
import PlayerBoard from "./PlayerBoard";
import { PlayerMdl } from "@models/PlayerMdl";
import Deck from "./Deck";

import { useAtom } from "jotai";
import { currentPlayerAtom, controlledPlayerAtom } from "@state/atoms/atoms";

// Define the props interface for GameBoard
interface GameBoardProps {
    id: string;
    players: PlayerMdl[];
    currentTurn: string; // make type id or even player id just makes things easier
};

export default function GameBoard({
    id,
    players,
    currentTurn,
}: GameBoardProps ): JSX.Element {

    // Using Jotai's useAtom hook to access the atoms
    const [ currentPlayer ] = useAtom(currentPlayerAtom); // Current player atom
    const [ controlledPlayer, setControlledPlayer ] = useAtom(controlledPlayerAtom); // Controlled player atom

    return (
        <div className="w-full h-screen bg-pink-500 bg-opacity-50">
            <div className="w-full ml-4">
                <GameInfo
                    id={id}
                    players={players}
                    currentTurn={currentTurn}
                />
            </div>
            <div
                className="absolute inset-0 flex items-center justify-center"
            >
                <Deck />
            </div>
            {/* Render Player Boards */}

            {players.map((playerMdl: PlayerMdl, index: Number) => {
                let positionClass = "";
                switch (index) {
                    case 0:
                        positionClass = "w-full absolute bottom-0 left-0"; // transform -translate-x-1/2
                        break;
                    case 1:
                        positionClass = "w-full absolute top-0 left-0"; // transform -translate-x-1/2 rotate-180
                        break;
                    // not working atm
                    case 2:
                        positionClass = "w-full absolute left-0 top-1/2 transform -translate-y-1/2";
                        break;
                    case 3:
                        positionClass = "w-full absolute right-0 top-1/2 transform -translate-y-1/2";
                        break;
                    default:
                        break;
                };
                return (
                    <PlayerBoard
                        className={positionClass}
                        playerMdl={playerMdl}
                        key={`player ${playerMdl.getId()}`}
                    />
                );
            })}
        </div>
    );
};
