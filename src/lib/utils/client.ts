import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
// const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
// const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
// const useCdn = import.meta.env.SANITY_USE_CDN = true;
// const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION;
export const client = createClient({
  projectId: 'u6uatr6p',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  // projectId,
  // dataset,
  // useCdn,
  // apiVersion
})