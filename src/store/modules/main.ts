import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'mian',
	state: () => ({
		name: '超级管理员',
		test: 'Alan',
	}),
	// 类似于组件的computed，用来封装计算属性，具有缓存的功能
	getters: {
		nameLength: (state) => state.name.length,
	},
	// 提供了一种方法来定义如何更改状态的规则
	actions: {
		// 同步
		updateName(data: string) {
			this.name = data;
		},
		// 可以做异步
		async insertPost(data: string) {
			// await doAjaxRequest(data);
		},
	},
});
