
// react
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect, updateGameState } from "./gameSlice";

function WebSocketManager(): JSX.Element {
    const dispatch = useDispatch();
    const connectionStatus = useSelector((state) => state.game.connectionStatus);
    const playerAction = useSelector((state) => state.game.playerAction);

    // Use a ref to store the WebSocket instance
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (connectionStatus === "connecting") {
            const socket = new WebSocket("ws://example.com/game");
            socketRef.current = socket;

            socket.onopen = () => {
                console.log("WebSocket connected");
                dispatch(connect());
            };

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === "GAME_STATE_UPDATE") {
                    dispatch(updateGameState(data.payload));
                };
                // Handle other message types as needed
            };

            socket.onclose = () => {
                console.log("WebSocket disconnected");
                dispatch(disconnect());
                socketRef.current = null;
            };

            socket.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

        };

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            };
        };
    }, [connectionStatus, dispatch]);

    useEffect(() => {
        if (playerAction && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const message = JSON.stringify({ type: "PLAYER_ACTION", payload: playerAction });
            socketRef.current.send(message);
        };
    }, [playerAction]);

    return (
        <>
        </>
    ); // This component doesn't render anything

};

export default WebSocketManager;