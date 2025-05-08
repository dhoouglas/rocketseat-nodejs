import { defineConfig } from "vite";
import tsConfigPathcs from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPathcs()],
  test: {
    globals: true,
  },
});
