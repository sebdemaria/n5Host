import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "host",
            remotes: {
                charactersRick: "http://localhost:3001/assets/remoteEntry.js",
                charactersHarry: "http://localhost:3002/assets/remoteEntry.js"
            },
            shared: {
                react: {
                    import: true,
                    version: "^18.2.0",
                    shareScope: "default"
                },
                "react-dom": {
                    import: true,
                    version: "^18.2.0",
                    shareScope: "default"
                }
            }
        })
    ],
    build: {
        target: "esnext"
    },
    server: {
        port: 3000
    }
});
