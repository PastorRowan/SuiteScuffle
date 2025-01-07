
// import { Player } from "@renderer/models/Player";
import GameInfo from "./GameInfo";
import PlayerBoard from "./PlayerBoard";
import { PlayerMdl } from "@models/PlayerMdl";
import Deck from "./Deck";

// Define the props interface for GameBoard
interface GameBoardProps {
    id: string;
    players: PlayerMdl[];
    currentTurn: string;
};

export default function GameBoard({
    id,
    players,
    currentTurn,
}: GameBoardProps ): JSX.Element {
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
            <div className="w-full h-[80%] bg-green-500 bg-opacity-50">

                {players.map((playerMdl: PlayerMdl, index: Number) => {
                    let positionClass = "";
                    switch (index) {
                        case 0:
                            positionClass = "absolute bottom-0 left-1/2 transform -translate-x-1/2";
                            break;
                        case 1:
                            positionClass = "absolute top-0 left-1/2 transform -translate-x-1/2 rotate-180";
                            break;
                        case 2:
                            positionClass = "absolute left-0 top-1/2 transform -translate-y-1/2";
                            break;
                        case 3:
                            positionClass = "absolute right-0 top-1/2 transform -translate-y-1/2";
                            break;
                        default:
                            break;
                    };
                    return (
                        <PlayerBoard
                            className={positionClass}
                            field={playerMdl.getField()}
                            hand={playerMdl.getHand()}
                            key={playerMdl.getId()}
                        />
                    );
                })}
                
            </div>
        </div>
    );
};
