import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import babel from 'vite-plugin-babel';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';






export default defineConfig({
	base: '/vuetify3-resize-drawer/',
	build: {
		outDir: 'docs',
	},
	plugins: [
		eslint({
			fix: true,
		}),
		babel(),
		stylelint({
			cache: false,
			fix: true,
			include: [
				'src/**/*.{css,scss,sass,vue}',
				'./src/components/**/*.{css,scss,sass,vue}',
				'./src/plugin/styles/*.{css,scss,sass}'
			],
		}),
		vue({
			template: { transformAssetUrls }
		}),
		vuetify({
			autoImport: true,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@root': fileURLToPath(new URL('.', import.meta.url)),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		// open: true,
		hmr: {
			protocol: 'ws',
		},
	},
});

export const assetAttrsConfig: Record<string, string[]> = {
	link: ['href'],
	video: ['src', 'poster'],
	source: ['src', 'srcset'],
	img: ['src', 'srcset'],
	image: ['xlink:href', 'href'],
	use: ['xlink:href', 'href']
};
