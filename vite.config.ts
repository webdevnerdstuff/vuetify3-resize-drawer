import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import babel from 'vite-plugin-babel';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import StylelintPlugin from 'vite-plugin-stylelint';


export default defineConfig({
	base: '/vuetify3-resize-drawer/',
	build: {
		outDir: 'docs',
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/scss/app.scss";
				`,
			},
		},
	},
	plugins: [
		eslint({
			fix: true,
		}),
		babel(),
		StylelintPlugin({
			fix: true,
			include: ['src/**/*.{css,scss,sass,vue}'],
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
			'@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
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
