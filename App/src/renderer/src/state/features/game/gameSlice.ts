
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGameState } from "@interfaces/IGameState";
import { IPlayer } from "@interfaces/IPlayer";
import { Player } from "@renderer/models/Player";

// Initial state for a generic game
const initialState: IGameState = {
    players: [],
    currentTurn: "",
    gameStatus: "waiting",
};

// Create a game slice with reducers to manage game state
const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        // Action to set players
        setPlayers(state, action: PayloadAction<Player[]>) {
            state.players = action.payload;
        },
        // Action to set current turn (player ID)
        setCurrentTurn(state, action: PayloadAction<string>) {
            state.currentTurn = action.payload;
        },
        // Action to update game status
        setGameStatus(state, action: PayloadAction<"waiting" | "started" | "ended">) {
            state.gameStatus = action.payload;
        },
        // Action to update player data
        updatePlayer(state, action: PayloadAction<Player>) {
            const index = state.players.findIndex(player => player.id === action.payload.id);
            if (index >= 0) {
                state.players[index] = action.payload;
            };
        },
        // A generic action to update any dynamic game data
        updateGameState(state, action: PayloadAction<{ key: keyof IGameState; value: any }>) {
            const { key, value } = action.payload;
            state[key] = value;
        },
    },
});

// Export actions to use in components
export const {
  setPlayers,
  setCurrentTurn,
  setGameStatus,
  updatePlayer,
  updateGameState,
} = gameSlice.actions;

// Export the reducer to be used in the store
export default gameSlice.reducer;
