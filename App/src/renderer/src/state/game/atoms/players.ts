
import { atom } from "jotai";

import { samplePlayers } from "./samplePlayers";

import { PlayerMdl } from "@models/PlayerMdl";

import {
    selectCurrentTurnPlayerIdAtom,
    selectMc, selectMcIdAtom
} from "./gameStateAtoms";
import { selectCardMdlsViaIdsAtom } from "./cards";

// Define the atom to store players as an object with playerIds as keys
const playersAtomBase = atom<Record<string, PlayerMdl>>(samplePlayers);

export const selectPlayersAtom = atom(
    get => {
        const players = get(playersAtomBase);
        return players;
    },
);

export const selectPlayerAtom = atom(
    get => {
        const players = get(selectPlayersAtom);
        return (id: string) => {
            if (!players[id]) {
                console.warn(`Player with id "${id}" not found.`);
                return null;
            };
            return players[id];
        };
    },
);

export const isMcAtom = atom(
    get => {
        const mcId = get(selectMcIdAtom);
        return (playerId: string) => mcId === playerId;
    },
);

export const selectPlayerHandIdsAtom = atom(
    get => {
        const selectPlayer = get(selectPlayerAtom);
        return (playerId: string) => {
            const player = selectPlayer(playerId);
            const playerHandIds = player?.getHand();
            return playerHandIds;
        };
    },
);

export const selectPlayerHandCardMdlsAtom = atom(
    get => {
        const selectPlayerHandIds = get(selectPlayerHandIdsAtom);
        const selectCardMdlsViaIds = get(selectCardMdlsViaIdsAtom);
        return (playerId: string) => {
            const playerHandIds = selectPlayerHandIds(playerId);
            if (playerHandIds === undefined) {
                throw new Error("playerHandIds is undefined");
            };
            const cardMdls = selectCardMdlsViaIds(playerHandIds);
            return cardMdls;
        };
    },
);

export const selectPlayerFieldIdsAtom = atom(
    get => {
        const selectPlayer = get(selectPlayerAtom);
        return (playerId: string) => {
            const player = selectPlayer(playerId);
            const playerField = player?.getField();
            return playerField;
        };
    },
);

export const selectPlayerFieldCardMdlsAtom = atom(
    get => {
        const selectPlayerFieldIds = get(selectPlayerFieldIdsAtom);
        const selectCardMdlsViaIds = get(selectCardMdlsViaIdsAtom);
        return (playerId: string) => {
            const playerFieldIds = selectPlayerFieldIds(playerId);
            if (playerFieldIds === undefined) {
                throw new Error("playerFieldIds is undefined");
            };
            const cardMdls = selectCardMdlsViaIds(playerFieldIds);
            return cardMdls;
        };
    },
);

export const selectEnemiesAtom = atom(
    get => {
        const players = get(selectPlayersAtom);
        const mc = get(selectMc);

        if (!mc) {
            console.warn("No main character (MC) found in state.");
            return players;
        };
        // Create a new object excluding the MC
        const enemies = { ...players };
        delete enemies[mc.getId()]; // Remove the MC by their ID
        return enemies; // Return the remaining players (enemies)
    },
);

export const selectCurrentTurnPlayerAtom = atom(
    get => {
        const currentTurnPlayerId = get(selectCurrentTurnPlayerIdAtom);
        const selectPlayer = get(selectPlayerAtom);
        const currentTurnPlayerMdl = selectPlayer(currentTurnPlayerId);
        return currentTurnPlayerMdl;
    },
);

export const selectCurrentTurnPlayerHandAtom = atom(
    get => {
        const currentTurnPlayerMdl = get(selectCurrentTurnPlayerAtom);
        const currentTurnPlayerHand = currentTurnPlayerMdl?.getHand();
        return currentTurnPlayerHand;
    },
);

export const selectCurrentTurnPlayerFieldAtom = atom(
    get => {
        const currentTurnPlayerMdl = get(selectCurrentTurnPlayerAtom);
        const currentTurnPlayerField = currentTurnPlayerMdl?.getField();
        return currentTurnPlayerField;
    },
);


export const addPlayerHandCardIdAtom = atom(
    null,
    (get, set, playerId: string, cardId: string) => {
        const players = get(selectPlayersAtom);
        const player = players[playerId];

        if (!player) {
            console.warn(`Player with id "${playerId}" not found.`);
            return;
        };

        player.pushHandCardId(cardId);

        // Update the players state
        set(playersAtomBase, players);
    },
);

export const addPlayerFieldCardIdAtom = atom(
    null,
    (get, set, playerId: string, cardId: string) => {
        const players = get(selectPlayersAtom);
        const player = players[playerId];

        if (!player) {
            console.warn(`Player with id "${playerId}" not found.`);
            return;
        };

        player.pushFieldCardId(cardId);

        // Update the players state
        set(playersAtomBase, players);
    },
);

export const addCurrentTurnPlayerHandCardIdAtom = atom(
    null,
    (get, set, cardId: string) => {
        const currentTurnPlayerId = get(addPlayerHandCardIdAtom);
        if (!currentTurnPlayerId) {
            throw new Error(`currentTurnPlayerId invalid: type: ${typeof currentTurnPlayerId} value: ${currentTurnPlayerId}`);
        };
        set(addPlayerHandCardIdAtom, currentTurnPlayerId, cardId);
    },
);

export const addCurrentTurnPlayerFieldCardIdAtom = atom(
    null,
    (get, set, cardId: string) => {
        const currentTurnPlayerId = get(addPlayerFieldCardIdAtom);
        if (!currentTurnPlayerId) {
            throw new Error(`currentTurnPlayerId invalid: type: ${typeof currentTurnPlayerId} value: ${currentTurnPlayerId}`);
        };
        set(addPlayerFieldCardIdAtom, currentTurnPlayerId, cardId);
    },
);
