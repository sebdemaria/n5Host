import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        include: ["src/tests/**/*.{test,spec}.{ts,tsx}"],
        setupFiles: "./vitest.setup.ts",
        css: true,
        coverage: {
            provider: "v8",
            exclude: [
                "src/App.tsx",
                "src/GlobalStyles.ts",
                "src/main.tsx",
                "src/theme.ts",
                "src/consts/**",
                "vitest.config.*",
                "vite.config.*",
                "jest.config.*",
                "tailwind.config.*",
                "postcss.config.*",
                "tsconfig.*",
                "*.config.*",
                "**/config/**",
                "**/*.d.ts"
            ]
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
