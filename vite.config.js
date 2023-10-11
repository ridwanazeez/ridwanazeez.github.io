import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/ridwanazeez.github.io/",
  server: {
    ...(process.env.NODE_ENV === "development"
      ? {
          host: "0.0.0.0",
          port: 3000,
        }
      : {}),
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
