import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "host-app",
            remotes: {
                charactersRick: "http://localhost:3001/assets/remoteEntry.js",
                charactersHarry: "http://localhost:3002/assets/remoteEntry.js"
            },
            shared: ["react", "react-dom"]
        })
    ],
    server: {
        port: 3000
    }
});
