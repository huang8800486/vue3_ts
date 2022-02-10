<script setup lang="ts">
import { ref, onMounted } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
const callback = (value) => {
	console.log('fewfew', value);
};
const hello = ref(null);
onMounted(() => {
	console.log('父级获取子级', hello.value.count);
});
</script>
<template>
	<HelloWorld ref="hello" msg="Hello Vue 3 + TypeScript + Vite" @callback="callback" />
</template>

<style lang="stylus">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	color: $brand-color;
}
</style>
