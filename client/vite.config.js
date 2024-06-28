import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
  },
  resolve: {
    alias: {
      src: "./src",
      components: "./src/components",
      pages: "./src/pages",
    },
  },
  base: "/camp-trail",
});
