/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
import vidstackTailwind from 'vidstack/tailwind.cjs';
import tailwindTypography from '@tailwindcss/typography';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        'primary': '#f3edeb',
        'darkBorder': '#5f4444',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    vidstackTailwind({
      selector: '.media-player',
      prefix: 'media',
      webComponents: true,
    }),
    tailwindTypography,
    customVariants,
  ],
}

function customVariants({ addVariant, matchVariant }) {
  // Strict version of `.group` to help with nesting.
  matchVariant('parent-data', (value) => `.parent[data-${value}] > &`);
  addVariant('hocus', ['&:hover', '&:focus-visible']);
  addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
}