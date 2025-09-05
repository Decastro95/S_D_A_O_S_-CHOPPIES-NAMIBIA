import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      "78lgsg-5173.csb.app", // CodeSandbox
      ".csb.app", // fallback for sandbox previews
      "localhost", // local dev
    ],
  },
});
