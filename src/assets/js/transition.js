import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import { isMenuOpen, isLoading } from "@lib/stores/stores";
const swup = new Swup({
  linkToSelf: 'navigate',
  animationSelector: '[class*="transition-"]',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), 
  ],
  containers: ['#swup'],
});
swup.hooks.on('link:click', () => {
  isMenuOpen.set(false);
  isLoading.set(true);
});
swup.hooks.on('animation:out:start', () => {
  isLoading.set(true);
  document.querySelector('#loader').classList.remove('hidden');
  document.querySelector('#loader-bg').classList.remove('hidden');
});

swup.hooks.on('animation:in:end', () => {
  isLoading.set(false);
  document.querySelector('#loader').classList.add('hidden');
  document.querySelector('#loader-bg').classList.add('hidden');
});