<template>
	<div style="height: 1100px">
		<div class="toast_component">首页</div>
		<HelloWorld ref="hello" msg="Hello Vue 3 + TypeScript + Vite" @callback="callback" />
		<BaseButton />
		<router-link to="/index2">跳转2</router-link>
		<div style="height: 100px; width: 100%; background: #ababab">
			<Scrollbar> 1212 </Scrollbar>
		</div>
		<button @click="scrollTo(100)" class="mr-2">滚动到100px位置</button>
		<button @click="scrollTo(0)" class="mr-2">滚动到底部</button>
		<button @click="scrollBottom" class="mr-2">滚动到底部</button>
		<div style="height: 200px; width: 100%; background: #ababab">
			<ScrollContainer ref="scrollRef">
				<div v-for="item in 30" :key="item.id">{{ item }}</div>
			</ScrollContainer>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ScrollActionType } from '@/components/Base/ScrollContainer/typing.ts';
import Toast from '@/components/Base/Toast';
type Nullable<T> = T | null;
const scrollRef = ref<Nullable<ScrollActionType>>(null);
const getScroll = () => {
	const scroll = unref(scrollRef);
	if (!scroll) {
		throw new Error('scroll is Null');
	}
	return scroll;
};

const scrollTo = (top: number) => {
	getScroll().scrollTo(top);
	Toast({
		text: '测试', // 文本
	});
};
const scrollBottom = (top: number) => {
	getScroll().scrollBottom(top);
};
const callback = (value: number) => {
	console.log('fewfew', value);
};
const hello = ref(null);
onMounted(() => {
	// console.log('父级获取子级', hello.value.count);
	console.log(import.meta.env.MODE);
});
</script>
