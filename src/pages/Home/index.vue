<template>
	<div>
		首页
		<HelloWorld ref="hello" msg="Hello Vue 3 + TypeScript + Vite" @callback="callback" />
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
const callback = (value: number) => {
	console.log('fewfew', value);
};
const hello = ref(null);
onMounted(() => {
	console.log('父级获取子级', hello.value.count);
	console.log(import.meta.env.MODE);
});
</script>
