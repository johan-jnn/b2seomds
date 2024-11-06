import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import rehypeSlug from 'rehype-slug';
import { toc } from "rehype-toc";
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({
		style: {
			plugins: [autoprefixer()]
		}
	}), mdsvex({
		layout: {
			blog: "./src/lib/components/article_content.svelte"
		},
		extensions: [".md", ".svx"],
		rehypePlugins: [
			rehypeSlug,
			toc,
			[rehypeExternalLinks, {
				target: "_blank"
			}]
		],
	})],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"$routes/*": "./src/routes/*"
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
