import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
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
  base: "/camp-trail/",
});
