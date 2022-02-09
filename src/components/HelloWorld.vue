<template>
	<h1>{{ msg }}</h1>
	<div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }} 测试:{{ mainStore.test }}</div>
	<hr />
	<button @click="updateName">修改store中的name</button>
	<img alt="Vue logo" src="@/assets/logo.png" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineProps<{ msg: string }>();
import { useMainStore } from '@/store/main';

const count = ref(0);
const mainStore = useMainStore();
const updateName = () => {
	// $patch 可以修改多个值 store 中的数据,
	mainStore.$patch({
		name: '名称被修改了,nameLength也随之改变了',
		test: 'ALan2',
	});
	// 使用actions同步或者异步修改state
	mainStore.updateName('ALan');
};
</script>
<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
