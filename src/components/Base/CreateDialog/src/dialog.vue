<template>
	<div class="dialog_component" :class="[showValue ? 'show' : 'noshow']">
		<div class="content_main">
			<template v-if="typeLayer === 'normal'">
				<NormalLayers v-bind="attrs" @destory="destoryDialog" />
			</template>
			<template v-else-if="typeLayer === 'custom'">
				<CustomLayers v-bind="attrs" @destory="destoryDialog" />
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup name="CreateDialog">
import { setShowFun } from './common.ts';
const props = defineProps({
	// 当前类型
	typeLayer: {
		type: String,
		default: 'normal',
	},
	// 绑定的对象
	bindAttrs: {
		type: Object,
		default: (): void => {},
	},
	// 显示
	show: {
		type: Boolean,
		default: false,
	},
});
const { state, destoryDialog } = setShowFun(props);

const { showValue } = toRefs(state);

const attrs = computed(() => {
	return props.bindAttrs;
});
onMounted(() => {
	/**
	 * 监听用户点击浏览器后退按钮
	 */
	//监听 hashchange 事件
	window.addEventListener(
		'hashchange',
		(e) => {
			//为当前导航页附加一个 tag
			window.history.replaceState('hasHash', '', '');
		},
		false
	);

	window.addEventListener(
		'popstate',
		(e) => {
			if (e.state) {
				//侦测是用户触发的后退操作, dosomething
				//这里刷新当前 url
				destoryDialog();
			}
		},
		false
	);
});
</script>

<style scoped lang="stylus"></style>
