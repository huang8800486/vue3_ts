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
			stylus: {
				imports: [path.resolve(__dirname, 'src/assets/styles/variables.styl')],
			},
		},
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
		https: false,
		proxy: {},
	},
	build: {
		terserOptions: {
			compress: {
				// eslint-disable-next-line camelcase
				drop_console: true,
				// eslint-disable-next-line camelcase
				drop_debugger: true,
			},
		},
	},
});
