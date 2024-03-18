import { writable } from "svelte/store";

export const isMenuOpen = writable(false);
export const isLoading = writable(false);
export const isReady = writable(false);