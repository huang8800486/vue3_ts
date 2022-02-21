<template>
	<div class="common_layer">
		<div class="content_mark"></div>
		<div class="content_wrap">
			<button @click="handleCancel">{{ name }}</button>
			<button @click="destroySuccess">curson成功回调</button>
		</div>
	</div>
</template>

<script lang="ts" setup name="CustomLayers">
const props = defineProps({
	// 当前类型
	name: {
		type: String,
		default: 'name',
	},
	// 取消事件
	cancel: {
		type: Function,
		default: (): void => {},
	},
	// 成功事件
	success: {
		type: Function,
		default: (): void => {},
	},
});
const emit = defineEmits<{
	(e: 'destory'): void;
}>();
// 事件
const destory = () => {
	emit('destory');
};
/**
 * 成功回调
 */
const destroySuccess = () => {
	typeof props.success === 'function' && props.success();
	destory();
};
/**
 * 取消按钮点击
 */
const handleCancel = (isClose: boolean): void => {
	typeof props.cancel === 'function' && props.cancel();
	destory();
};
</script>

<style scoped lang="stylus"></style>
