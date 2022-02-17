<template>
	<Scrollbar ref="scrollbarRef" class="scroll-container" v-bind="$attrs">
		<slot></slot>
	</Scrollbar>
</template>
<script lang="ts" setup>
import { Scrollbar, ScrollbarType } from '@/components/Base/Scrollbar';
import { useScrollTo } from '@/hooks/useScrollTo';
type Nullable<T> = T | null;
const scrollbarRef = ref<Nullable<ScrollbarType>>(null);
/**
 * Scroll to the specified position
 */
const scrollTo = (to: number, duration = 500) => {
	const scrollbar = unref(scrollbarRef);
	if (!scrollbar) {
		return;
	}
	nextTick(() => {
		const wrap = unref(scrollbar.wrap);
		if (!wrap) {
			return;
		}
		const { start } = useScrollTo({
			el: wrap,
			to,
			duration,
		});
		start();
	});
};

const getScrollWrap = () => {
	const scrollbar = unref(scrollbarRef);
	if (!scrollbar) {
		return null;
	}
	return scrollbar.wrap;
};

/**
 * Scroll to the bottom
 */
const scrollBottom = () => {
	const scrollbar = unref(scrollbarRef);
	if (!scrollbar) {
		return;
	}
	nextTick(() => {
		console.log('我是子组件scrollBottom方法', unref(scrollbar.wrap));
		const wrap = unref(scrollbar.wrap) as any;
		if (!wrap) {
			return;
		}
		const scrollHeight = wrap.scrollHeight as number;
		const { start } = useScrollTo({
			el: wrap,
			to: scrollHeight,
		});
		start();
	});
};
defineExpose({
	scrollTo,
	getScrollWrap,
	scrollBottom,
});
</script>
<style lang="stylus">
.scroll-container {
    width: 100%;
    height: 100%;

    .scrollbar__wrap {
      margin-bottom: 18px !important;
      overflow-x: hidden;
    }

    .scrollbar__view {
      box-sizing: border-box;
    }
  }
</style>
