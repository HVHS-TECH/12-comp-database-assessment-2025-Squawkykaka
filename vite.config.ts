import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/12-comp-database-assessment-2025-Squawkykaka/",
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "firebase/database",
      "firebase/auth",
      "firebase/app",
    ],
  },
});
