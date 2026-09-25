import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  base:
    command === "build"
      ? "/react-mini-projects/todo-app/"
      : "/",
  plugins: [react(), tailwindcss()],
}));