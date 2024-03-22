// import { loadEnv } from "vite";
// const {
//   PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET,
//   SANITY_PROJECT_ID, 
//   SANITY_DATASET, SANITY_API_VERSION, PUBLIC_SANITY_API_VERSION
// } = loadEnv(import.meta.env.MODE, process.cwd(), "");
// const projectId =  PUBLIC_SANITY_PROJECT_ID || SANITY_PROJECT_ID;
// const dataset =  PUBLIC_SANITY_DATASET || SANITY_DATASET;
// const apiVersion = PUBLIC_SANITY_API_VERSION || SANITY_API_VERSION;
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import swup from '@swup/astro';
import { vite as vidstack } from 'vidstack/plugins';
import sanity from "@sanity/astro";
// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), mdx(), sanity({
  projectId: 'u6uatr6p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  // projectId,
  //   dataset,
  //   useCdn: true,
  //   apiVersion,
}
  ),
  swup({ globalInstance: true })
],
  output: "hybrid",
  adapter: cloudflare({
    imageService: 'passthrough',
    mode: "advanced"
  }),
  vite: {
    plugins: [
      // Include filter to only check specific files for components and styles.
      vidstack({ include: /player\// }),
    ],
    minify: 'esbuild',
    build: {
      terserOptions: {
        format: {
          comments: false, // Remove comments
        },
      },
    },
  },
});