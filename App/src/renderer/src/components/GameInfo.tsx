
import { IGameInfoProps } from "@interfaces/IGameInfoProps";
import { useState, useEffect } from "react";

export default function GameInfo({ id, players, currentTurn }: IGameInfoProps): JSX.Element {
    
    const [isVisible, setIsVisible] = useState(false); // State to control visibility

    useEffect(() => {
        // Function to handle the Tab key press
        function handleTabPress(event: KeyboardEvent) {
            if (event.key === "Tab") {
                // Toggle visibility when Tab is pressed
                setIsVisible((prevVisible) => !prevVisible);
            };
        };

        // Add event listener for keydown event
        window.addEventListener("keydown", handleTabPress);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleTabPress);
        };
    }, [])

    return (
        <div className={`h-[20%] ${isVisible ? "visible" : "invisible"}`}>
            <h1>Game ID: {id}</h1>
            <h2>Players:</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.getId()}>
                        {player.getName()} - Score: {player.getScore()}
                    </li>
                ))}
            </ul>
            <h3>Current Turn: {currentTurn}</h3>
        </div>
    );
};
