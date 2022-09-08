import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // resolve: {
  //   alias:
  //     {
  //       find: "components",
  //       replacement: resolve(__dirname, "src/components"),
  //     }
  // },
  plugins: [react()],
  base: "/react-vite/",
  build: {
    manifest: true,
  },
});
