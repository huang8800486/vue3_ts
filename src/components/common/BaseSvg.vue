<template>
	<svg :class="[$attrs.class, spin && 'svg-icon-spin']" class="svg-icon" :style="getStyle" aria-hidden="true">
		<use :href="symbolId" :fill="color" />
	</svg>
</template>
<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
	name: 'BaseSvg',
	props: {
		prefix: {
			type: String,
			default: 'icon',
		},
		name: {
			type: String,
			required: true,
		},
		size: {
			type: [Number, String],
			default: 16,
		},
		spin: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: '#333',
		},
	},
	setup(props) {
		const symbolId = computed(() => `#${props.prefix}-${props.name}`);

		const getStyle = computed((): CSSProperties => {
			const { size } = props;
			let s = `${size}`;
			s = `${s.replace('px', '')}px`;
			return {
				width: s,
				height: s,
			};
		});
		return { symbolId, getStyle };
	},
});
</script>
<style lang="stylus" scoped>
.svg-icon {
	display: inline-block;
	overflow: hidden;
	vertical-align: -0.15em;
	fill: currentColor;
}

.svg-icon-spin {
	animation: loadingCircle 1s infinite linear;
}
</style>
