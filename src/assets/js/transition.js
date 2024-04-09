
import { isMenuOpen, isLoading } from "@lib/stores/stores";
import { isReady } from "@lib/stores/stores";
import { get } from "svelte/store";


document.addEventListener("astro:before-preparation", () => {
  isLoading.set(true);
  isMenuOpen.set(false);
  document.querySelector("#loader").classList.remove("hidden");
});
document.addEventListener("astro:after-preparation", () => {
  isMenuOpen.set(false);
  isLoading.set(false);
  setTimeout(()=>{
    document.querySelector("#loader").classList.add("hidden");
  }, 500);
});
