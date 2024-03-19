import { writable } from "svelte/store";
import { atom } from 'nanostores';

export const menuNano = atom(false);
export const isMenuOpen = writable(false);
export const isLoading = writable(false);
export const isReady = writable(false);