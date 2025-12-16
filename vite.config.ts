import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // SOLUCIÓN: Establecer la base directamente con el nombre del repositorio
  // Esto asegura que la base sea siempre /Meaurio-Box-MB/ cuando se haga el build.
  base: "/Meaurio-Box-MB/", 
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});