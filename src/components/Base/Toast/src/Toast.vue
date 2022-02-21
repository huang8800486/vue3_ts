<template>
	<div class="toast_component toast_component_" :class="['toast_component_' + type, showValue ? 'show' : 'noshow']">
		{{ text }}
		{{ name }}
		<div class="title2">国际化: {{ $t('common.comfirm') }}</div>
	</div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'; // 国际化
import { useMainStore } from '@/store/modules/main';
const props = defineProps({
	// 提示文本
	text: {
		type: String,
		default: '',
	},
	// 提示类型, success | error
	type: {
		type: String,
		default: '',
	},
	// 显示
	show: {
		type: Boolean,
		default: false,
	},
	// 持续时长
	time: {
		type: Number,
		default: 2000,
	},
});
const state = reactive({
	showValue: props.show,
});
// 显示组件
const showPage = (): void => {
	setTimeout(() => {
		state.showValue = true;
	}, 100);
};
// 销毁组件
const destory = (): void => {
	setTimeout((): void => {
		state.showValue = false;
		setTimeout(() => {
			const globalToast = document.getElementById('global_toast') as HTMLIFrameElement;
			globalToast.childNodes.length && globalToast.removeChild(globalToast.childNodes[0]);
		}, 300);
	}, props.time);
};

onMounted(() => {
	// 显示
	showPage();
	destory();
});
const { name } = useMainStore();
const { showValue } = toRefs(state);
</script>
<style lang="stylus" scoped>
@import './index.styl';
</style>
