// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import demo from './components/demo.vue';
import customSlot from './components/customSlot.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'home-hero-before': () => h(customSlot)
      // 'aside-top': () => h(customSlot)
		});
	},
	enhanceApp({ app, router, siteData }) {
		app.component('demo', demo);
		// ...
	},
} satisfies Theme;
