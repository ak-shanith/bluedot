import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({ babel: { plugins: [["@emotion"]] } }),
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: "public/sw.js",
        swDest: "dist/sw.js",
        globDirectory: "dist",
        globPatterns: ["**/*.{html,js,css,json, png}"],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true,
      },
    }),
  ],
  envPrefix: "REACT_APP_",
  server: {
    host: true,
    port: 3000,
    proxy: { "/trpc": { target: "http://localhost:3001" } },
  },
});
