import { isMenuOpen, isLoading } from "@lib/stores/stores";
import { get } from "svelte/store";
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector("#loader").classList.remove("show");
  }, 550);
});
document.addEventListener("astro:before-preparation", () => {
  isLoading.set(true);
  isMenuOpen.set(false);
  document.querySelector("#loader").classList.add("show");
});
document.addEventListener("astro:after-preparation", () => {
  isMenuOpen.set(false);
  isLoading.set(false);
  setTimeout(()=>{
    document.querySelector("#loader").classList.remove("show");
  }, 550);
});
