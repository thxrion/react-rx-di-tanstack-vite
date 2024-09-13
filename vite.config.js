import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        react({ tsDecorators: true }),
        TanStackRouterVite(),
        tsconfigPaths(),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.ts",
        coverage: {
            provider: "v8",
        },
    },
});
