<template>
	<h1>{{ msg }}</h1>
	<h3>Mouse: {{ x }} x {{ y }}</h3>
	<hr />
	<div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }} 测试:{{ mainStore.test }}</div>
	<button @click="updateName">修改store中的name</button>
	<hr />
	<div>国际化: {{ $t('common.comfirm') }}</div>
	<div>国际化: {{ i18nText.common.comfirm }}</div>
	<button @click="switchLang">切换国际化</button>
	<hr />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMainStore } from '@/store/main';
import { useMouse } from '@vueuse/core'; // vueuse插件
import { useI18n } from 'vue-i18n'; // 国际化
import { switchLanguage } from '@/locals/index'; // 国际化语言
// 传参
defineProps<{ msg: string }>(); // 采用ts专有声明，无默认值

const { x, y } = useMouse();
// pinia状态管理
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

// 国际化
const i18n = useI18n();
const i18nText = computed(() => {
	return {
		common: i18n.tm('common'),
	};
});
const switchLang = () => {
	const lang = localStorage.getItem('lan') === 'en_US' ? 'zh_CN' : 'en_US';
	switchLanguage(i18n, lang);
};
</script>
