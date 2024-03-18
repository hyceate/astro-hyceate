import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const useCdn = import.meta.env.SANITY_USE_CDN = true;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION;
export const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion
})