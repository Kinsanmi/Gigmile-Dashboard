import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Gigmile-Dashboard/",
  plugins: [react()],
  server: {
    host: true,
  },
});
