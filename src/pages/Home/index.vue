<template>
	<div style="height: 1100px">
		首页
		<HelloWorld ref="hello" msg="Hello Vue 3 + TypeScript + Vite" @callback="callback" />
		<BaseButton />
		<router-link to="/index2">跳转2</router-link>
		<div style="height: 100px; width: 100%; background: #ababab">
			<Scrollbar> 1212 </Scrollbar>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const callback = (value: number) => {
	console.log('fewfew', value);
};
const hello = ref(null);
onMounted(() => {
	// console.log('父级获取子级', hello.value.count);
	console.log(import.meta.env.MODE);
});
</script>
