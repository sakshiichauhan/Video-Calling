import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress eval warnings from ZegoCloud SDK
        if (warning.code === 'EVAL' && 
            warning.id?.includes('zegocloud/zego-uikit-prebuilt')) {
          return;
        }
        warn(warning);
      }
    }
  },
  server: {
    host: true, // Needed for Vercel deployment
    port: 5173, // Default Vercel port
  },
  define: {
    'process.env': process.env // Forward environment variables
  }
});