import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // required for CodeSandbox/Replit
    port: 5173,
    open: false, // don't auto-open with xdg-open
  },
});
