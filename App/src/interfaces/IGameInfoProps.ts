
import { Player } from "@renderer/models/Player";

// Define props for the component
export interface IGameInfoProps {
    id: string; // Unique identifier for the game
    players: Player[]; // Array of player names
    currentTurn: string; // The player whose turn it is
};
