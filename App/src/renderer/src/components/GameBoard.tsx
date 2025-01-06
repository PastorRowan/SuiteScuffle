
// import { Player } from "@renderer/models/Player";
import { IGameState } from "@interfaces/IGameState";
import GameInfo from "./GameInfo";
import PlayerBoard from "./PlayerBoard";
import { PlayerMdl } from "@models/PlayerMdl";

export default function GameBoard({
    id,
    players,
    currentTurn
}: IGameState): JSX.Element {
    return (
        <div className="w-full h-screen bg-pink-500 bg-opacity-50">
            <div className="w-full ml-4">
                <GameInfo
                    id={id}
                    players={players}
                    currentTurn={currentTurn}
                />
            </div>
            <div className="w-full h-[80%] bg-green-500 bg-opacity-50">

                {players.map((playerMdl: PlayerMdl) => {
                    return (
                        <PlayerBoard
                            field={playerMdl.getField()}
                            hand={playerMdl.getHand()}
                        />
                    );
                })}
                
            </div>
        </div>
    );
};
