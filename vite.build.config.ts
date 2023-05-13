import { defineConfig } from 'vite';
import * as path from 'path';
import babel from 'vite-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';


const banner = `/**
 * @name ${pkg.name}
 * @version ${pkg.version}
 * @description ${pkg.description}
 * @author ${pkg.author}
 * @copyright Copyright ${new Date().getFullYear()}, WebDevNerdStuff
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository}
 * @license ${pkg.license} License
 */
`;

export default defineConfig({
	publicDir: false,
	build: {
		lib: {
			entry: './src/plugin/index.ts',
			name: pkg.name,
			formats: ['es', 'cjs'],
			fileName: format => `${pkg.name}.${format}.js`,
		},
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, './src/index.ts')
			},
			external: [
				...Object.keys(pkg.dependencies || {}),
			],
			output: {
				banner,
			},
		},
	},
	plugins: [
		babel(),
		commonjs(),
		vue({
			template: { transformAssetUrls },
		}),
		dts({
			insertTypesEntry: true,
		}),
		typescript({
			check: true,
			include: ['./src/plugin/**/*.vue'],
		}),
		vuetify({
			autoImport: true,
		}),
		cssInjectedByJsPlugin({ topExecutionPriority: false }),
		terser(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@root': path.resolve(__dirname, './')
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
});
