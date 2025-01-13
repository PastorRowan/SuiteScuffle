
// import { Player } from "@renderer/models/Player";
import GameInfo from "./GameInfo";
import PlayerBoard from "./PlayerBoard";
import { PlayerMdl } from "@models/PlayerMdl";
import Deck from "./Deck";
import { useAtom } from "jotai";
import { playerBoardOrderDisplayAtom } from "@renderer/state/display/atoms/player";

export default function GameBoard(): JSX.Element {

    const [ playerBoardOrder ] = useAtom(playerBoardOrderDisplayAtom);

    return (
        <div className="w-full h-screen bg-pink-500 bg-opacity-50">
            <div className="w-full ml-4">
                {/* <GameInfo /> */}
            </div>
            <div
                className="absolute inset-0 flex items-center justify-center"
            >
                <Deck />
            </div>
            {/* Render Player Boards */}

            {playerBoardOrder.map((playerId: string, index: Number) => {
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
                        playerId={playerId}
                        key={playerId}
                    />
                );
            })}
        </div>
    );
};
