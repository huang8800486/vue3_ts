import { app } from '@/mount'; // 全局createApp的实例
import { createVNode, VNode, render } from 'vue';
import MessageConstructor from './src/Toast.vue'; // 组件
import { IglobalConfig, merge, appendToElement } from './src/types';

let vm: VNode;
// 全局默认属性
const globalConfig: IglobalConfig = {
	type: 'success', // 类型, success || error
	time: 2000, // 持续时长
	show: false, // 控制显示
	text: '', // 文本
};
// 创建全局Toast方法
const toastPlugin = (options: IglobalConfig): void => {
	// 参数merge
	const config = merge(options, globalConfig);
	// 组件生成dom
	const container = document.createElement('div');
	vm = createVNode(MessageConstructor, config, { default: (): IglobalConfig => config });
	// 生成的虚拟dom共享根app的上下文
	vm.appContext = app._context;
	// 渲染到dom
	render(vm, container);
	// 添到dom
	appendToElement(container);
};

export default toastPlugin;
