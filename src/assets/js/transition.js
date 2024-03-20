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
  isLoading.set(false);
});
swup.hooks.on('animation:out:start', () => {
  document.querySelector('#loader').hidden = false;
  document.querySelector('#loader-bg').hidden = false;
  document.querySelector('#loader-svg').hidden = false;
  isLoading.set(true);
});
swup.hooks.on('animation:in:end', () => {
  document.querySelector('#loader').hidden = true;
  document.querySelector('#loader-bg').hidden = true;
  document.querySelector('#loader-svg').hidden = true;
  isLoading.set(false);
});