import { isMenuOpen, isLoading, isReady } from "@lib/stores/stores";
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    isReady.set(true);
    document.querySelector("#loader").classList.remove("show");
  },500);
});

document.addEventListener("astro:before-preparation", () => {
  isLoading.set(true);
  isMenuOpen.set(false);
  isReady.set(false);
  document.querySelector("#loader").classList.add("show");
});
document.addEventListener("astro:after-preparation", () => {
  isMenuOpen.set(false);
  isLoading.set(false);
  setTimeout(()=>{
    document.querySelector("#loader").classList.remove("show");
    isReady.set(true);
  },500);
});