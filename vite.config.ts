import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          chatbot: ['./src/components/chatbox/ChatWidget', './src/components/chatbox/KnowledgeBase'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', 'lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
