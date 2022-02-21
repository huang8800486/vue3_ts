import { app } from '@/mount'; // 全局createApp的实例
import { createVNode, VNode, render } from 'vue';
import dialog from './src/dialog.vue';
import { appendToElement, IglobalConfig, merge } from './src/types';
import './src/index.styl';
let vm: VNode;
// 全局默认属性
const globalConfig: IglobalConfig = {
	type: 'normal', // 类型, normal || custom
	show: false, // 控制显示
};
const createDialog = (options: any): void => {
	// 参数merge
	const config = merge(options, globalConfig);

	const container = document.createElement('div');
	vm = createVNode(dialog, config, { default: (): any => config });
	// 生成的虚拟dom共享根app的上下文
	vm.appContext = app._context;
	render(vm, container);
	// 添到dom
	appendToElement(container);
};

export default createDialog;
