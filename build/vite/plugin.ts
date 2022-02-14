import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_PUBLIC_PATH, VITE_PROXY, VITE_APP_TITLE } = viteEnv;

	const vitePlugins = [
		// have to
		vue(),
		// support name
		vueSetupExtend(),
	];
	// vue API 自动导入
	vitePlugins.push(
		AutoImport({
			dts: 'types/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
			imports: ['vue'],
		})
	);
	// 自动注册组件
	vitePlugins.push(
		Components({
			// 指定组件位置，默认是src/components
			dirs: ['src/components'],
			// ui库解析器
			// resolvers: [ElementPlusResolver()],
			extensions: ['vue'],
			// 配置文件生成位置
			dts: 'types/components.d.ts',
			// 搜索子目录
			deep: true,
			// 允许子目录作为组件的命名空间前缀。, 目录+名字
			directoryAsNamespace: false,
		})
	);
	// @vitejs/plugin-legacy 兼容
	isBuild && vitePlugins.push(legacy());

	return vitePlugins;
}
