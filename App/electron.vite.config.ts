
import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()]
    },
    preload: {
        plugins: [externalizeDepsPlugin()]
    },
    renderer: {
        resolve: {
            alias: {
                "@renderer": resolve("src/renderer/src"),
                "@interfaces": resolve("src/interfaces"),
                "@models": resolve("src/models"),
                "@state": resolve("src/renderer/src/state"),
            },
        },
        plugins: [
            react(),
        ],
    },
});
