import Swup from "@swup/astro";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import { isMenuOpen } from "@lib/stores/stores";
const swup = new Swup({
  linkToSelf: 'navigate',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), 
    new SwupMorphPlugin({containers: []}), 
  ],
});
swup.hooks.on('animation:out:start', (visit) => {
  isMenuOpen.set(false);
  console.log('New page: ', visit.to.url);
});