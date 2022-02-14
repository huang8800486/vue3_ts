import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
const dayjs = require('dayjs');
import { resolve } from 'path';
import { wrapperEnv } from './build/utils';
import { createProxy } from './build/proxy';
import { createVitePlugins } from './build/vite/plugin';
const configArgv: any = process.env.npm_config_argv;
const command = JSON.parse(configArgv).cooked[1];
const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
	pkg: { dependencies, devDependencies, name, version },
	lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};
const env = loadEnv(process.env.NODE_ENV, process.cwd());
const viteEnv = wrapperEnv(env);
const { VITE_PUBLIC_PATH, VITE_PROXY, VITE_APP_TITLE } = viteEnv;
const isBuild = command === 'build';
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// console.log('process.env.npm_config_argv', process.env.npm_config_argv);
// console.log('process.cwd()', process.cwd());
// console.log('env', env);
// console.log('viteEnv', viteEnv);
// console.log('isBuild', isBuild);
// https://vitejs.dev/config/
export default defineConfig({
	base: VITE_PUBLIC_PATH,
	plugins: createVitePlugins(viteEnv, isBuild),

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			stylus: {
				// imports: [resolve(__dirname, 'src/assets/styles/variable-default.styl')],
				additionalData: `@import "${resolve(__dirname, 'src/assets/styles/variable-default.styl')}";
        `,
				javascriptEnabled: true,
			},
		},
	},
	// 定义全局常量替换方式,其中每项在开发环境下会被定义在全局，而在构建时被静态替换
	define: {
		__APP_INFO__: JSON.stringify(__APP_INFO__),
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: false,
		https: false,
		proxy: createProxy(VITE_PROXY),
	},
	build: {
		target: 'es2015', // 浏览器兼容
		outDir: 'dist', // 指定输出路径
		emptyOutDir: true, // 不在项目根目录中, 清空目录
		assetsDir: 'static', // 合并所有文件只在static
		cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
		sourcemap: false, //是否构建source map 文件
		chunkSizeWarningLimit: 2000, // chunk 大小警告的限制
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
