import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import { remarkTableOfContents } from "remark-table-of-contents"
import remarkHeadingId from 'remark-heading-id';

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
		remarkPlugins: [
			[remarkHeadingId, {
				defaults: true
			}],
			[remarkTableOfContents, {
				mdx: false,
				isListOrdered: true,
				navAttributes: {
					'aria-label': 'table of contents',
					class: "toc"
				}
			}], 
		]
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
