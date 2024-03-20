import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import { isMenuOpen, isLoading } from "@lib/stores/stores";
const swup = new Swup({
  linkToSelf: 'navigate',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), 
  ],
  resolveUrl: (url) => {
    if (url.startsWith('/projects/')) {
      return '/projects/';
    }
    return url;
  },
});
swup.hooks.on('link:click', (visit) => {
  isMenuOpen.set(false);
  isLoading.set(true);
});
swup.hooks.on('animation:out:start', () => {
  document.querySelector('#loader').classList.remove('hidden');
  document.querySelector('#loader-bg').classList.remove('hidden');
  isLoading.set(true);
});

swup.hooks.on('animation:in:end', () => {
  document.querySelector('#loader').classList.add('hidden');
  document.querySelector('#loader-bg').classList.add('hidden');
  isLoading.set(false);
  console.log(isLoading);
});