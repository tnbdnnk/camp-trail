import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Ensure loader is a string
    include: /src\/.*\.jsx?$/, // Match both .js and .jsx files
  },
  base: "/camp-trail",
});
