import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Treat PDFs and other document types as static asset imports
  // so they get a proper hashed URL in the build output
  assetsInclude: ["**/*.pdf", "**/*.docx"],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  build: {
    // Increase asset inline limit to 0 so PDFs are always written to files
    // (not inlined as base64) — browsers can't display inline base64 PDFs
    assetsInlineLimit: 0,
  },
});
