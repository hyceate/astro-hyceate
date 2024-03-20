import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  placeholder: "dominantColor",
  format: ["webp", "jpg"],
  fallbackFormat: "jpg",
  includeSourceFormat: false,
  formatOptions: {
    jpg: {
      quality: 80,
    },
    webp: {
      quality: 100,
    },
  },
});