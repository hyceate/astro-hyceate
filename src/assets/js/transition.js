import Swup from "swup";
import SwupFadeTheme from '@swup/fade-theme';
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupProgressPlugin from '@swup/progress-plugin';
import { isMenuOpen, isLoading } from "@lib/stores/stores";
import { isReady } from "@lib/stores/stores";

const swup = new Swup({
  linkToSelf: 'navigate',
  animationSelector: '[class*="transition-"]',
  plugins: [new SwupFadeTheme(),new SwupA11yPlugin(), new SwupProgressPlugin(), new SwupHeadPlugin({awaitAssets: false}),
  ],
  containers: ['#swup'],
  timeout: 5000
});
swup.hooks.on('link:click', () => {
  isMenuOpen.set(false);
  isLoading.set(true);
});
swup.hooks.on('link:self', () => {
  isLoading.set(false);
})
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

swup.hooks.on('page:view', () => {
  // Access the current page URL
  const currentPageUrl = window.location.pathname;;
  
  // Check if the current page URL is "/"
  if (currentPageUrl === "/") {
    isReady.set(true);
      // Do something specific for the root URL "/"
  } else {
    isReady.set(false);
  }
});
swup.hooks.before('content:replace', () => {
  isReady.set(false);
});