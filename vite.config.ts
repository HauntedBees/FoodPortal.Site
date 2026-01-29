import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
	base: "/world/",
	plugins: [
		tailwindcss(),
		svelte(),
		viteStaticCopy({
			targets: [
				{
					src: "node_modules/svg-country-flags/svg/*",
					dest: "assets/flags"
				}
			]
		})
	],
	resolve: {
    	alias: {
    		$lib: path.resolve("./src/lib"),
    	},
  	}
});
