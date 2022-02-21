<template>
	<h1>{{ msg }}</h1>
	<h3>Mouse: {{ x }} x {{ y }}</h3>
	<hr />
	<div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }} 测试:{{ mainStore.test }}</div>
	<button @click="updateName">修改store中的name</button>
	<hr />
	<div class="title">国际化: {{ $t('common.comfirm') }}</div>
	<div class="title2">国际化: {{ $t('common.comfirm') }}</div>
	<!-- <div class="title2">国际化: {{ i18nText.common.comfirm }}</div> -->
	<button @click="switchLang">切换国际化</button>
	<button @click="callback">子组件向父组件事件传递</button>
	<hr />
	<BaseSvg name="compute" color="blue" size="38" />
	<BaseSvg name="discord" color="#000" size="38" />
	<img src="@/assets/images/logo.png" />
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { useMainStore } from '@/store/modules/main';
import { useMouse } from '@vueuse/core'; // vueuse插件
import { useI18n } from 'vue-i18n'; // 国际化
import { switchLanguage } from '@/locals/index'; // 国际化语言
// defineProps获取组件传值
// 采用ts专有声明，无默认值
const props = defineProps<{ msg: string }>();
// // 采用ts专有声明，有默认值
// interface Props {
// 	msg?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
// 	msg: 'hello1212',
// });
// // 非ts专有声明，有默认值
// const props = defineProps({
// 	msg: {
// 		type: String,
// 		default: 'Hello Alan',
// 	},
// });
// console.log('props', props);

// defineEmits子组件向父组件事件传递
/*ts专有*/
const emit = defineEmits<{
	(e: 'callback', num: number): void;
}>();
/*非ts专有*/
// const emit = defineEmits(['callback']);
// 事件
const callback = () => {
	emit('callback', 2);
};

// defineExpose组件暴露自己的属性
const count = ref('组件暴露自己的属性');
console.log('count', count.value);
defineExpose({
	count,
});

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
onMounted(() => {
	console.log('32323');
});
</script>
<style lang="stylus">
.title2 {
  color: $brand-color;
  font-size: 30px;
}
</style>
