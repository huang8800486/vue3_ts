import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			// styl: {
			// 	// additionalData: '@import "./src/assets/styles/variables.styl";',
			// 	// imports: [path.resolve(__dirname, 'src/assets/styles/variables.styl;')],

			// },
			stylus: {
				imports: [path.resolve(__dirname, 'src/assets/styles/variables.styl')],
			},
		},
	},
});
